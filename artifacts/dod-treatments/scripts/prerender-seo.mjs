import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pagesDirectory = path.join(root, 'src/pages');
const outputDirectory = path.join(root, 'dist/public');
const siteUrl = 'https://docofdetoxtreatments.com';
const defaultImage = `${siteUrl}/images/hero-treatments.jpg`;

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const pageFiles = (await readdir(pagesDirectory)).filter((file) => file.endsWith('.tsx'));
const pages = [];

for (const file of pageFiles) {
  const source = await readFile(path.join(pagesDirectory, file), 'utf8');
  const seo = source.match(/<(?:Seo|LegalPage)\b[\s\S]*?(?:\/>|>)/)?.[0];
  if (!seo) continue;

  const getAttribute = (attribute) =>
    seo.match(new RegExp(`\\b${attribute}="([^"]+)"`))?.[1];
  const rawTitle = getAttribute('title');
  const title = seo.startsWith('<LegalPage')
    ? `${rawTitle} | Doc of Detox Treatments`
    : rawTitle;
  const description = getAttribute('description');
  const route = getAttribute('path');
  const image = getAttribute('ogImage') ?? defaultImage;

  if (!rawTitle || !description || !route || !route.startsWith('/')) {
    throw new Error(`Static SEO attributes are incomplete in src/pages/${file}`);
  }

  pages.push({ title, description, route, image });
}

const dod5StarTreatmentSlugs = new Set([
  'wolfe-non-surgical',
  'cellsonic-regeneration',
  'cardio-medbed',
  'consultations',
  'dod-core-restore',
  'bone-density-scanner',
  'infrared-light-healing',
  'vitamin-d-light',
  'bioptron-light',
  'avacen',
]);

for (const page of [...pages]) {
  const slug = page.route.match(/^\/treatments\/([^/]+)$/)?.[1];
  if (!slug || !dod5StarTreatmentSlugs.has(slug)) continue;

  pages.push({
    ...page,
    route: `/clinics/ixtapa-zihuatanejo/treatments/${slug}`,
    canonicalRoute: page.route,
  });
}

if (pages.length === 0) {
  throw new Error('No pages with static SEO attributes were found');
}

const sourceHtml = await readFile(path.join(outputDirectory, 'index.html'), 'utf8');
const headTagPatterns = [
  /<title>[\s\S]*?<\/title>\s*/i,
  /<meta\s+name="description"[^>]*>\s*/i,
  /<link\s+rel="canonical"[^>]*>\s*/i,
  /<meta\s+property="og:(?:title|description|type|url|image)"[^>]*>\s*/gi,
  /<meta\s+name="twitter:(?:card|title|description|image)"[^>]*>\s*/gi,
  /<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>\s*/gi,
];

for (const page of pages) {
  const canonicalRoute = page.canonicalRoute ?? page.route;
  const canonical = `${siteUrl}${canonicalRoute === '/' ? '/' : canonicalRoute}`;
  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: canonical,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Doc of Detox Treatments',
      url: `${siteUrl}/`,
    },
  }).replaceAll('<', '\\u003c');

  let html = sourceHtml;
  for (const pattern of headTagPatterns) html = html.replace(pattern, '');

  const metadata = `    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:image" content="${escapeHtml(page.image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.description)}" />
    <meta name="twitter:image" content="${escapeHtml(page.image)}" />
    <script type="application/ld+json">${structuredData}</script>
`;
  html = html.replace('</head>', `${metadata}  </head>`);

  const destination =
    page.route === '/'
      ? path.join(outputDirectory, 'index.html')
      : path.join(outputDirectory, page.route.slice(1), 'index.html');
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, html);
}

console.log(`Prerendered metadata for ${pages.length} routes.`);