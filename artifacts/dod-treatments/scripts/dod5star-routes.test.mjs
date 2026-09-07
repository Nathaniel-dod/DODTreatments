import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const DOD5STAR_TREATMENTS_PATH = '/clinics/ixtapa-zihuatanejo/treatments';

const treatmentPageFiles = [
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
];

const retreatPages = [
  { file: 'ixtapa-zihuatanejo', route: '/clinics/ixtapa-zihuatanejo' },
  { file: 'dod5star-residence', route: '/clinics/ixtapa-zihuatanejo/residence' },
  { file: 'dod5star-treatments', route: '/clinics/ixtapa-zihuatanejo/treatments' },
  { file: 'dod5star-team', route: '/clinics/ixtapa-zihuatanejo/team' },
  { file: 'dod5star-inquire', route: '/clinics/ixtapa-zihuatanejo/inquire' },
  { file: 'dod5star-location', route: '/clinics/ixtapa-zihuatanejo/location' },
];

const [
  appSource,
  treatmentsSource,
  routeShellSource,
  heroCtasSource,
  generalCtaSource,
  dod5StarNavSource,
  retreatPageSources,
  ...treatmentPageSources
] = await Promise.all([
  readFile(new URL('../src/App.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/dod5star-treatments.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/Dod5StarTreatmentRoute.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/TreatmentHeroCtas.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/GeneralTreatmentCta.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/Dod5StarNav.tsx', import.meta.url), 'utf8'),
  Promise.all(
    retreatPages.map(({ file }) =>
      readFile(new URL(`../src/pages/${file}.tsx`, import.meta.url), 'utf8'),
    ),
  ),
  ...treatmentPageFiles.map((file) =>
    readFile(new URL(`../src/pages/${file}.tsx`, import.meta.url), 'utf8'),
  ),
]);

function linkedTreatmentPaths() {
  return [
    ...treatmentsSource.matchAll(
      /href:\s*['"]([^'"]*\/treatments\/[^'"]+)['"]/g,
    ),
  ].map((match) => match[1]);
}

function staticClinicPaths(source) {
  return [
    ...source.matchAll(/(?:href\s*=\s*|href:\s*)['"]([^'"]+)['"]/g),
  ]
    .map((match) => match[1])
    .filter((path) => path.startsWith('/clinics'));
}

test('every DOD5Star page route uses the established retreat navigation', () => {
  for (const [{ route }, source] of retreatPages.map((page, index) => [
    page,
    retreatPageSources[index],
  ])) {
    const escapedRoute = route.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    assert.match(
      appSource,
      new RegExp(`<Route\\s+path=["']${escapedRoute}["']`),
      `missing DOD5Star page route for ${route}`,
    );
    assert.match(source, /<Dod5StarNav\s*\/>/, `missing DOD5Star navigation on ${route}`);
  }
});

test('DOD5Star navigation and retreat-page actions stay in the retreat namespace', () => {
  const retreatSources = [
    ['Dod5StarNav.tsx', dod5StarNavSource],
    ...retreatPages.map(({ file }, index) => [
      `${file}.tsx`,
      retreatPageSources[index],
    ]),
  ];

  for (const [file, source] of retreatSources) {
    for (const path of staticClinicPaths(source)) {
      assert.ok(
        path === '/clinics/ixtapa-zihuatanejo'
          || path.startsWith('/clinics/ixtapa-zihuatanejo/'),
        `DOD5Star navigation escaped the retreat journey in ${file}: ${path}`,
      );
    }
  }
});

test('every linked DOD5Star treatment stays in the DOD5Star route namespace', () => {
  const paths = linkedTreatmentPaths();

  assert.ok(paths.length > 0, 'expected the DOD5Star page to link to treatments');
  for (const path of paths) {
    assert.ok(
      path.startsWith(`${DOD5STAR_TREATMENTS_PATH}/`),
      `treatment link escaped the DOD5Star journey: ${path}`,
    );
  }
});

test('every linked DOD5Star treatment route uses the DOD5Star navigation shell', () => {
  for (const path of linkedTreatmentPaths()) {
    const escapedPath = path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const routePattern = new RegExp(
      `<Route\\s+path=["']${escapedPath}["']>[\\s\\S]*?<Dod5StarTreatmentRoute>[\\s\\S]*?<\\/Dod5StarTreatmentRoute>[\\s\\S]*?<\\/Route>`,
    );

    assert.match(appSource, routePattern, `missing DOD5Star route shell for ${path}`);
  }

  assert.match(routeShellSource, /<Dod5StarNav\s*\/>/);
});

test('DOD5Star treatment details do not expose clinic-directory CTAs', () => {
  assert.match(
    heroCtasSource,
    /location\.startsWith\(['"]\/clinics\/ixtapa-zihuatanejo\/treatments\/['"]\)/,
  );

  const dod5StarBranch = heroCtasSource.slice(
    heroCtasSource.indexOf('if (isDod5StarJourney)'),
    heroCtasSource.indexOf('\n  return (', heroCtasSource.indexOf('if (isDod5StarJourney)')),
  );

  assert.match(dod5StarBranch, /href=["']\/clinics\/ixtapa-zihuatanejo\/inquire["']/);
  assert.doesNotMatch(dod5StarBranch, /href=["']\/clinics["']/);

  assert.match(
    generalCtaSource,
    /location\.startsWith\(\s*['"]\/clinics\/ixtapa-zihuatanejo\/treatments\/['"]/,
  );
  assert.match(
    generalCtaSource,
    /if \(isDod5StarJourney\) \{\s*return null;\s*\}/,
  );

  for (const [index, source] of treatmentPageSources.entries()) {
    const sourceWithoutGeneralCtas = source.replace(
      /<GeneralTreatmentCta\b[\s\S]*?<\/GeneralTreatmentCta>/g,
      '',
    );

    assert.doesNotMatch(
      sourceWithoutGeneralCtas,
      /href=["']\/clinics["']/,
      `unprotected clinic-directory CTA in ${treatmentPageFiles[index]}.tsx`,
    );
  }
});

test('general treatment details still expose clinic CTAs', () => {
  const generalBranch = heroCtasSource.slice(heroCtasSource.lastIndexOf('\n  return ('));

  assert.match(generalBranch, /href=["']\/clinics\/ixtapa-zihuatanejo["']/);
  assert.match(generalBranch, /href=["']\/clinics["']/);
  assert.match(generalBranch, /Find a Practitioner \/ Clinic/);
  assert.match(
    generalCtaSource,
    /<section className=\{className\} data-general-treatment-cta>/,
  );
  assert.ok(
    treatmentPageSources.some((source) =>
      /<GeneralTreatmentCta\b[\s\S]*?href=["']\/clinics["'][\s\S]*?<\/GeneralTreatmentCta>/.test(
        source,
      ),
    ),
    'expected general treatment pages to retain lower clinic-directory CTAs',
  );
});