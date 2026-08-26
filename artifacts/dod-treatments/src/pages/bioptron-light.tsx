import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { TreatmentHeroCtas } from '@/components/TreatmentHeroCtas';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock3, Eye, ShieldCheck, Sparkles, Sun, Waves } from 'lucide-react';

const wellnessHighlights = [
  {
    title: 'Comfort-focused light support',
    description: 'Polarized light may be incorporated into a practitioner-guided wellness plan focused on temporary joint and muscle comfort.',
  },
  {
    title: 'Skin wellness',
    description: 'The broad light spectrum is used in cosmetic and wellness routines intended to support healthy-looking skin and its natural renewal processes.',
  },
  {
    title: 'Circulation support',
    description: 'Bioptron light may complement wellness routines intended to support healthy local circulation and cellular activity.',
  },
  {
    title: 'Gentle and non-invasive',
    description: 'The light does not emit UV and is applied without needles, medication, or recovery time.',
  },
];

const sessionSteps = [
  'The DOD5Star team discusses the area you would like to focus on and reviews basic suitability.',
  'You are positioned comfortably with the light directed perpendicular to the selected area.',
  'The device is placed a short distance from the skin for broad, even light coverage.',
  'A typical guided application lasts approximately 4 to 10 minutes per area.',
];

export default function BioptronLight() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Bioptron Polarized Light Therapy',
      description: 'Patient-facing information about non-invasive Bioptron polarized light sessions available at DOD5Star.',
      lastReviewed: '2026-08-26',
      reviewedBy: {
        '@type': 'Person',
        name: 'Dr. Darrell Wolfe',
        honorificSuffix: 'N.D.',
        jobTitle: 'Doctor of Naturopathic Medicine',
      },
    },
  ];

  return (
    <>
      <Seo
        title="Bioptron Light | Polarized Light Therapy"
        description="Learn about non-invasive Bioptron polarized light sessions for comfort, circulation, and skin wellness support at DOD5Star."
        path="/treatments/bioptron-light"
        structuredData={structuredData}
      />

      <section className="relative overflow-hidden pb-14 pt-28 md:pb-16 md:pt-36">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sun className="h-4 w-4" aria-hidden="true" />
              Polarized Light Therapy
            </div>
            <h1 className="gold-glow gold-gradient mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">Bioptron Light</h1>
            <p className="mb-8 text-2xl font-medium text-foreground/80 md:text-3xl">Broad-spectrum, non-UV light for a gentle wellness session</p>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Bioptron uses polarized light across a broad spectrum to provide a comfortable, non-invasive light experience that can complement personal wellness, skin-care, and comfort-focused routines.
            </p>
            <TreatmentHeroCtas dod5StarLabel="Included with DOD5Star Stays" />
          </div>
        </div>
      </section>

      <section className="bg-card/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">How the technology works</p>
            <h2 className="gold-gradient mb-4 text-3xl font-bold md:text-4xl">Polarized Light with Broad, Even Coverage</h2>
            <p className="leading-relaxed text-muted-foreground">
              The device produces polarized light across approximately 480–3400 nm. Its Brewster’s Mirror design creates a high degree of polarization, helping deliver the light evenly across the selected area.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <article className="glass-panel rounded-3xl p-8">
              <Waves className="mb-6 h-9 w-9 text-primary" aria-hidden="true" />
              <h3 className="mb-4 text-2xl font-bold">Broad-Spectrum Polarized Light</h3>
              <p className="leading-relaxed text-muted-foreground">
                Unlike a focused laser beam, Bioptron distributes a broad range of polarized light over the treatment area for a gentle topical application.
              </p>
            </article>
            <article className="glass-panel rounded-3xl p-8">
              <Sparkles className="mb-6 h-9 w-9 text-primary" aria-hidden="true" />
              <h3 className="mb-4 text-2xl font-bold">No UV Exposure</h3>
              <p className="leading-relaxed text-muted-foreground">
                The device does not emit ultraviolet light and is designed for non-invasive topical use without thermal damage to the skin.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Wellness-focused support</p>
            <h2 className="gold-gradient mb-4 text-3xl font-bold md:text-4xl">What Patients Often Appreciate</h2>
            <p className="leading-relaxed text-muted-foreground">
              Bioptron may be used as a supportive wellness modality. It is not a replacement for diagnosis or treatment from a qualified healthcare professional.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {wellnessHighlights.map((highlight) => (
              <article key={highlight.title} className="glass-panel rounded-2xl p-7">
                <CheckCircle2 className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mb-3 text-xl font-bold">{highlight.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="glass-panel rounded-3xl p-8 md:p-10">
              <div className="mb-5 flex items-center gap-3">
                <Clock3 className="h-7 w-7 text-primary" aria-hidden="true" />
                <h2 className="text-3xl font-bold">What to Expect</h2>
              </div>
              <ol className="space-y-5">
                {sessionSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">{index + 1}</span>
                    <p className="pt-0.5 leading-relaxed text-muted-foreground">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            <aside className="rounded-3xl border border-primary/25 bg-primary/5 p-8 md:p-10">
              <div className="mb-5 flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-primary" aria-hidden="true" />
                <h2 className="text-3xl font-bold">Comfort &amp; Safety</h2>
              </div>
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>Use the device according to DOD5Star team guidance and the recommended duration for the selected area.</p>
                <p>Do not stare directly into the light. Tell the team about photosensitivity, active skin concerns, eye conditions, pregnancy, medications, or any health concern that could affect suitability.</p>
                <div className="flex gap-3 pt-1">
                  <Eye className="mt-1 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-sm">If you are seeking care for a medical condition, consult your qualified healthcare professional.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel mx-auto max-w-4xl rounded-3xl p-8 text-center md:p-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Experience Bioptron Light at DOD5Star</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Resident access to Bioptron Light is included with your DOD5Star stay. The team can help you understand setup, positioning, and appropriate use.
            </p>
            <Button asChild size="lg" className="gold-glow">
              <Link href="/clinics/ixtapa-zihuatanejo/inquire">Plan Your Stay</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}