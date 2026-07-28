import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>[];
}

const SITE_URL = 'https://docofdetoxtreatments.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero-treatments.jpg`;

export function Seo({ title, description, path, ogImage = DEFAULT_OG_IMAGE, structuredData = [] }: SeoProps) {
  const canonicalUrl = `${SITE_URL}${path}`;

  useEffect(() => {
    // Set title
    document.title = title;

    // Set or update meta tags
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:type', 'website', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Set canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Inject structured data: clear any stale route JSON-LD, then add this route's blocks
    document
      .querySelectorAll('script[type="application/ld+json"]')
      .forEach((script) => script.remove());

    const injectedScripts = structuredData.map((data, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `structured-data-${path}-${index}`;
      script.textContent = JSON.stringify(data);
      document.head.appendChild(script);
      return script;
    });

    // Cleanup on unmount: remove the scripts this render injected
    return () => {
      injectedScripts.forEach((script) => script.remove());
    };
  }, [title, description, canonicalUrl, ogImage, path, structuredData]);

  return null;
}
