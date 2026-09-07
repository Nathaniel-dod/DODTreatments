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

const [
  appSource,
  treatmentsSource,
  routeShellSource,
  heroCtasSource,
  generalCtaSource,
  ...treatmentPageSources
] = await Promise.all([
  readFile(new URL('../src/App.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/pages/dod5star-treatments.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/Dod5StarTreatmentRoute.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/TreatmentHeroCtas.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/GeneralTreatmentCta.tsx', import.meta.url), 'utf8'),
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