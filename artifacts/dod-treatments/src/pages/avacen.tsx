import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { TreatmentHeroCtas } from '@/components/TreatmentHeroCtas';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Hand, HeartPulse, ShieldCheck, Sparkles, ThermometerSun } from 'lucide-react';

const wellnessHighlights = [
  {
    title: 'Microcirculation support',
    description: 'Controlled warmth and gentle negative pressure are applied through the palm to support healthy microcirculation.',
  },
  {
    title: 'Temporary muscle and joint comfort',
    description: 'The thermal experience may provide temporary relief from minor muscle aches, joint discomfort, and everyday stiffness.',
  },
  {
    title: 'Muscle relaxation',
    description: 'Comfortable warmth may help relax muscles as part of a restorative wellness routine.',
  },
  {
    title: 'Simple, non-invasive use',
    description: 'The session works through one hand and does not involve needles, medication, or a recovery period.',
  },
];

const sessionSteps = [
  'The DOD5Star team reviews the device with you and discusses basic suitability.',
  'You place one hand into the specialized mitt and rest it comfortably inside the device.',
  'The system applies controlled heat together with gentle negative pressure through the palm.',
  'You relax during the session and let the team know if the temperature or pressure feels uncomfortable.',
];

export default function Avacen() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Avacen Thermal Microcirculation Therapy',
      description: 'Patient-facing information about non-invasive Avacen thermal microcirculation sessions available at DOD5Star.',
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
        title="Avacen | Thermal Microcirculation Support"
        description="Learn about non-invasive Avacen sessions using controlled warmth and gentle negative pressure through the palm."
        path="/treatments/avacen"
        structuredData={structuredData}
      />

      <section className="relative overflow-hidden pb-14 pt-28 md:pb-16 md:pt-36">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <ThermometerSun className="h-4 w-4" aria-hidden="true" />
              Thermal Microcirculation Support
            </div>
            <h1 className="gold-glow gold-gradient mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">Avacen</h1>
            <p className="mb-8 text-2xl font-medium text-foreground/80 md:text-3xl">Controlled warmth through the palm of your hand</p>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Avacen is a non-invasive thermal wellness device that combines controlled heat with gentle negative pressure at the palm to support microcirculation and temporary muscle and joint comfort.
            </p>
            <TreatmentHeroCtas dod5StarLabel="Included with DOD5Star Stays" />
          </div>
        </div>
      </section>

      <section className="bg-card/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">How the experience works</p>
            <h2 className="gold-gradient mb-4 text-3xl font-bold md:text-4xl">One Hand, Whole-Body Circulation Support</h2>
            <p className="leading-relaxed text-muted-foreground">
              The palm contains vascular structures close to the skin’s surface. Avacen’s patented method uses controlled warmth and negative pressure at this access point to support blood flow and microcirculation.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <article className="glass-panel rounded-3xl p-8">
              <Hand className="mb-6 h-9 w-9 text-primary" aria-hidden="true" />
              <h3 className="mb-4 text-2xl font-bold">Comfortable Hand Placement</h3>
              <p className="leading-relaxed text-muted-foreground">
                One hand rests inside a specialized mitt while the device applies controlled warmth and gentle negative pressure through the palm.
              </p>
            </article>
            <article className="glass-panel rounded-3xl p-8">
              <HeartPulse className="mb-6 h-9 w-9 text-primary" aria-hidden="true" />
              <h3 className="mb-4 text-2xl font-bold">Microcirculation-Focused</h3>
              <p className="leading-relaxed text-muted-foreground">
                The experience is designed to support microcirculation throughout the body without needles or an invasive procedure.
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
              Avacen is intended for temporary comfort and wellness support. It does not replace medical evaluation, diagnosis, or treatment.
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
                <Sparkles className="h-7 w-7 text-primary" aria-hidden="true" />
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
                <p>The experience should feel comfortably warm. Stop and ask for assistance if you feel excessive heat, pressure, numbness, or discomfort.</p>
                <p>Tell the DOD5Star team about pregnancy, circulation or vascular concerns, reduced heat sensation, hand injuries, implanted medical devices, medications, or other health conditions before use.</p>
                <p className="text-sm">The team can help determine whether resident use is appropriate and explain the device controls before your first session.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel mx-auto max-w-4xl rounded-3xl p-8 text-center md:p-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Experience Avacen at DOD5Star</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
              Resident access to Avacen is included with your DOD5Star stay. The team can provide setup and usage guidance at the Residence.
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