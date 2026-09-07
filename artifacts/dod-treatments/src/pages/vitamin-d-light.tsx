import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { GeneralTreatmentCta } from '@/components/GeneralTreatmentCta';
import { TreatmentHeroCtas } from '@/components/TreatmentHeroCtas';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock3, Eye, ShieldCheck, Sparkles, Sun } from 'lucide-react';

const wellnessBenefits = [
  {
    title: 'Vitamin D support',
    description: 'Controlled UVB exposure is used to support your skin’s natural vitamin D synthesis when regular sunlight exposure is limited.',
  },
  {
    title: 'Short, scheduled sessions',
    description: 'Each session follows a provider-led schedule, so exposure time and frequency are tailored to your individual needs.',
  },
  {
    title: 'Targeted or broader coverage',
    description: 'The modular SolRx system can be arranged for a smaller area or a broader treatment setup, depending on your session plan.',
  },
  {
    title: 'A gentler light experience',
    description: 'Optional natural quartz crystal panels diffuse the light before it reaches you, creating a softer, more comfortable experience.',
  },
];

const sessionSteps = [
  'Your practitioner reviews your wellness goals, health history, and suitability for narrowband UVB light.',
  'You receive clear positioning instructions and UV-blocking eye protection before the session begins.',
  'The SolRx light is set to the scheduled exposure time; sessions are deliberately brief and closely guided.',
  'Your practitioner helps you plan the next session, including whether crystal quartz panels are appropriate for your experience.',
];

export default function VitaminDLight() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Vitamin D Light with Quartz Crystal Panels',
      description: 'Provider-guided SolRx narrowband UVB light sessions with optional quartz crystal panels for vitamin D and skin wellness support.',
      lastReviewed: '2026-08-24',
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
        title="Vitamin D Light | SolRx UVB with Quartz Crystal Panels"
        description="Learn about provider-guided SolRx narrowband UVB light sessions with optional quartz crystal panels for vitamin D and skin wellness support."
        path="/treatments/vitamin-d-light"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-y-0 right-0 hidden md:flex w-[35%] items-center justify-center pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/50 to-transparent" />
          <img
            src={`${import.meta.env.BASE_URL}images/solrx-e-series.webp`}
            alt=""
            aria-hidden="true"
            className="relative z-10 h-[75%] max-h-96 w-full object-contain mix-blend-screen opacity-90"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center md:mx-0 md:max-w-3xl md:text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Narrowband UVB Light
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              Vitamin D Light
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-8 font-medium">
              SolRx light with optional quartz crystal panels
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A provider-guided narrowband UVB light session designed to support vitamin D synthesis and skin wellness. Natural quartz crystal panels can be added to diffuse the light for a gentler experience.
            </p>
            <TreatmentHeroCtas dod5StarLabel="Included with DOD5Star Stays" />
          </div>
        </div>
      </section>

      {/* System overview */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-4">A two-part light system</p>
            <h2 className="text-3xl md:text-4xl font-bold gold-gradient mb-4">SolRx Light, with an Optional Quartz Layer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The SolRx E-Series is a modular narrowband UVB light system. When a session calls for it, natural quartz crystal panels are placed in front of the light to gently diffuse its output.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <article className="glass-panel rounded-3xl p-8">
              <Sun className="w-9 h-9 text-primary mb-6" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-4">SolRx Narrowband UVB Light</h3>
              <p className="text-muted-foreground leading-relaxed">
                This is the primary light system used in the session. It is configured for either targeted or broader coverage and is always used according to a scheduled exposure protocol.
              </p>
            </article>
            <article className="glass-panel rounded-3xl p-8">
              <Sparkles className="w-9 h-9 text-primary mb-6" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-4">Natural Quartz Crystal Panels</h3>
              <p className="text-muted-foreground leading-relaxed">
                These optional panels are added in front of the SolRx light. They naturally diffuse the light, helping create a softer experience while preserving the same guided session approach.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-4">Wellness-focused support</p>
            <h2 className="text-3xl md:text-4xl font-bold gold-gradient mb-4">What Patients Often Appreciate</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vitamin D has an important role in normal body functions, including calcium absorption and immune health. Your practitioner can help determine whether guided narrowband UVB sessions are suitable for you.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {wellnessBenefits.map((benefit) => (
              <article key={benefit.title} className="glass-panel rounded-2xl p-7">
                <CheckCircle2 className="w-8 h-8 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Session details */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="glass-panel rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <Clock3 className="w-7 h-7 text-primary" aria-hidden="true" />
                <h2 className="text-3xl font-bold">What to Expect</h2>
              </div>
              <ol className="space-y-5">
                {sessionSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/15 text-primary text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-muted-foreground leading-relaxed pt-0.5">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="rounded-3xl border border-primary/25 bg-primary/5 p-8 md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <ShieldCheck className="w-7 h-7 text-primary" aria-hidden="true" />
                <h2 className="text-3xl font-bold">Comfort & Safety</h2>
              </div>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Narrowband UVB should be used only under the guidance of a qualified healthcare provider. Follow your prescribed session length and frequency exactly.
                </p>
                <p>
                  Protective eyewear is required. Do not look directly at the light source, and let your practitioner know immediately if you experience discomfort or an unusual skin reaction.
                </p>
                <p>
                  Tell your practitioner if you are pregnant or nursing, take medications that increase light sensitivity, have a photosensitivity condition, a history of skin cancer, or any health concern that could affect your suitability.
                </p>
                <div className="flex gap-3 pt-1">
                  <Eye className="w-5 h-5 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <p className="text-sm">This wellness information does not replace medical advice, diagnosis, or treatment from your healthcare professional.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <GeneralTreatmentCta className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Vitamin D Light Therapy</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our clinic directory to find guided Vitamin D light services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gold-glow" asChild>
                <Link href="/clinics">Explore Clinics</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/clinics/ixtapa-zihuatanejo">Available at DOD5Star — Free with Your Stay</Link>
              </Button>
            </div>
          </div>
        </div>
      </GeneralTreatmentCta>
    </>
  );
}
