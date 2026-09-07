import { Link } from 'wouter';
import { Activity, CheckCircle2, Gauge, RadioTower, ShieldCheck, Waves } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/button';

const experienceHighlights = [
  {
    title: 'Adjustable intensity',
    description: 'Settings can be adapted from longer, lower-intensity sessions to shorter, higher-intensity experiences.',
  },
  {
    title: 'Broad frequency range',
    description: 'The Sentient Element operates across frequencies from 7 Hz to 10,000 Hz for a highly configurable session.',
  },
  {
    title: 'Targeted coil placement',
    description: 'Padded coil accessories can be positioned around selected areas while you rest comfortably.',
  },
  {
    title: 'Included at the Residence',
    description: 'Resident access and basic setup guidance are included with your DOD5Star stay.',
  },
];

const sessionSteps = [
  'The DOD5Star team reviews the equipment and asks about relevant health considerations.',
  'A padded coil accessory is positioned around or near the area selected for your session.',
  'The frequency, intensity, and session length are chosen for a comfortable experience.',
  'You relax during use and tell the team immediately if you notice discomfort or an unexpected sensation.',
];

export default function SentientElementPemf() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Sentient Element PEMF at DOD5Star',
      description: 'Patient-facing information about Sentient Element pulsed electromagnetic field wellness sessions available during a DOD5Star stay.',
      lastReviewed: '2026-09-07',
    },
  ];

  return (
    <>
      <Seo
        title="Sentient Element PEMF | Included with Your DOD5Star Stay"
        description="Explore the adjustable Sentient Element PEMF system available to residents during a DOD5Star retreat in Ixtapa-Zihuatanejo."
        path="/clinics/ixtapa-zihuatanejo/treatments/sentient-element-pemf"
        structuredData={structuredData}
      />

      <section className="relative overflow-hidden pb-14 pt-28 md:pb-20 md:pt-36">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <RadioTower className="h-4 w-4" aria-hidden="true" />
                Included with Your Stay
              </div>
              <h1 className="gold-glow gold-gradient text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                Sentient Element PEMF
              </h1>
              <p className="mt-6 text-2xl font-medium text-foreground/80 md:text-3xl">
                A configurable pulsed electromagnetic field experience
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Sentient Element is an adjustable PEMF system designed to generate pulsed electromagnetic fields through padded coil accessories. Its broad range of settings allows the DOD5Star team to shape a comfortable wellness session around your retreat experience.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="gold-glow">
                  <Link href="/clinics/ixtapa-zihuatanejo/inquire">Plan Your Stay</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/clinics/ixtapa-zihuatanejo/treatments">Back to Treatments</Link>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto flex aspect-square w-full max-w-lg items-center justify-center overflow-hidden rounded-3xl border border-primary/20 bg-black/70 p-6 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,hsl(var(--primary)/0.16),transparent_52%)]" />
              <img
                src={`${import.meta.env.BASE_URL}images/sentient-element-pemf.png`}
                alt="Sentient Element PEMF system with padded coil accessories"
                className="relative z-10 h-full w-full object-contain drop-shadow-2xl"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">How it works</p>
            <h2 className="gold-gradient text-3xl font-bold md:text-4xl">Pulsed Fields, Personalized Settings</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              PEMF stands for pulsed electromagnetic field. The system sends timed electrical current through a coil to produce a changing magnetic field around the selected area. Your session settings are chosen for comfort and wellness use.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <article className="glass-panel rounded-3xl p-8">
              <Waves className="mb-6 h-9 w-9 text-primary" aria-hidden="true" />
              <h3 className="mb-4 text-2xl font-bold">7 Hz to 10,000 Hz</h3>
              <p className="leading-relaxed text-muted-foreground">
                A broad operational frequency range gives the team flexibility when preparing the equipment for your session.
              </p>
            </article>
            <article className="glass-panel rounded-3xl p-8">
              <Gauge className="mb-6 h-9 w-9 text-primary" aria-hidden="true" />
              <h3 className="mb-4 text-2xl font-bold">Flexible Session Intensity</h3>
              <p className="leading-relaxed text-muted-foreground">
                The system supports both lower-intensity, longer-duration use and shorter sessions at higher settings.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">At the Residence</p>
            <h2 className="gold-gradient text-3xl font-bold md:text-4xl">What Residents Can Expect</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Sentient Element is offered as a wellness amenity. It is not a substitute for medical diagnosis, treatment, or care from a qualified health professional.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {experienceHighlights.map((highlight) => (
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
                <Activity className="h-7 w-7 text-primary" aria-hidden="true" />
                <h2 className="text-3xl font-bold">Your Session</h2>
              </div>
              <ol className="space-y-5">
                {sessionSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                    <p className="pt-0.5 leading-relaxed text-muted-foreground">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
            <aside className="rounded-3xl border border-primary/25 bg-primary/5 p-8 md:p-10">
              <div className="mb-5 flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-primary" aria-hidden="true" />
                <h2 className="text-3xl font-bold">Suitability &amp; Safety</h2>
              </div>
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Tell the DOD5Star team before use if you are pregnant, have an implanted electronic or medical device, have a seizure disorder, or are managing another health condition.
                </p>
                <p>
                  Follow the team’s setup instructions and do not change the controls without guidance. Stop the session and ask for assistance if you feel pain, dizziness, unusual warmth, or discomfort.
                </p>
                <p className="text-sm">
                  Availability and recommended use may vary. Speak with your healthcare professional when you have questions about whether PEMF is appropriate for you.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}