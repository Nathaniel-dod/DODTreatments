import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { GeneralTreatmentCta } from '@/components/GeneralTreatmentCta';
import { TreatmentHeroCtas } from '@/components/TreatmentHeroCtas';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock3, Eye, ShieldCheck, Sparkles, Sun } from 'lucide-react';

const wellnessBenefits = [
  {
    title: 'A gentle wellness session',
    description: 'Sessions are non-invasive and designed to be comfortable, with no recovery time needed afterward.',
  },
  {
    title: 'Support for skin wellness',
    description: 'The broad light spectrum is commonly used in wellness routines that support healthy-looking skin and its natural renewal processes.',
  },
  {
    title: 'Circulation-focused support',
    description: 'Near-infrared light is often included in wellness protocols intended to support healthy circulation in the treated area.',
  },
  {
    title: 'A calm moment for yourself',
    description: 'Many people enjoy the warmth and quiet of an infrared session as part of a restorative self-care routine.',
  },
];

const sessionSteps = [
  'Your practitioner discusses the area and wellness goal you would like to focus on.',
  'You are positioned comfortably with either the seated or stand-mounted device.',
  'The lamp is set for broad, even coverage of the intended area.',
  'Relax for 10 to 20 minutes, then return to your day with no downtime.',
];

export default function InfraredLightHealing() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'RX Infrared Light Healing',
      description: 'A non-invasive infrared phototherapy wellness session using two COLLAGENTEX device configurations.',
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
        title="RX Infrared Light Healing | Deep Infrared Phototherapy"
        description="Explore RX Infrared Light Healing: comfortable 10- to 20-minute infrared phototherapy sessions with seated and full-body device options."
        path="/treatments/infrared-light-healing"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Infrared Phototherapy
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              RX Infrared Light Healing
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-8 font-medium">
              Gentle light therapy, with two ways to receive it
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              RX Infrared Light Healing uses the same broad-spectrum phototherapy technology in two comfortable device configurations: a seated light that shines upward and an adjustable full-body treatment light.
            </p>
            <TreatmentHeroCtas dod5StarLabel="Included with DOD5Star Stays" />
          </div>
        </div>
      </section>

      {/* Device options */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-4">Two device options</p>
            <h2 className="text-3xl md:text-4xl font-bold gold-gradient mb-4">The Right Setup for Your Session</h2>
            <p className="text-muted-foreground leading-relaxed">
              Both devices use the same COLLAGENTEX Plasma-Arc/Quartz lamp technology. Your practitioner can recommend the setup that best suits the area and type of session you have in mind.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <article className="glass-panel rounded-3xl overflow-hidden">
              <div className="bg-background/40 h-80 p-6 flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}images/rx-infrared-seat.webp`}
                  alt="RX Infrared Light Healing seated device with an upward-facing light"
                  className="h-full max-w-full object-contain"
                />
              </div>
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Sun className="w-7 h-7 text-primary" aria-hidden="true" />
                  <h3 className="text-2xl font-bold">RX-1 Seated Light</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  This configuration is built around a comfortable seat with the infrared light directed upward. It offers a simple, supported way to receive a lower-body or pelvic-area wellness session while seated.
                </p>
              </div>
            </article>

            <article className="glass-panel rounded-3xl overflow-hidden">
              <div className="bg-background/40 h-80 p-6 flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}images/rx-infrared-stand.webp`}
                  alt="RX Infrared Light Healing adjustable stand positioned above a treatment table"
                  className="h-full max-w-full object-contain"
                />
              </div>
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-7 h-7 text-primary" aria-hidden="true" />
                  <h3 className="text-2xl font-bold">RX-1 Full-Body Light</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  The adjustable stand-mounted light is positioned over a treatment table for broad coverage. It can be used for a focused area or as part of a more comprehensive body session.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 max-w-6xl mx-auto items-start">
            <div className="glass-panel rounded-3xl p-8 md:p-10">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-4">The technology</p>
              <h2 className="text-3xl md:text-4xl font-bold gold-gradient mb-5">Broad-spectrum light, not a focused beam</h2>
              <p className="text-muted-foreground leading-relaxed">
                The RX system uses a Plasma-Arc/Quartz lamp with a polychromatic spectrum from 590nm to 1250nm. Instead of one narrow wavelength, it delivers a range of visible red and near-infrared light at the same time.
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-muted-foreground leading-relaxed">
                  Its non-collimated design spreads light broadly and evenly rather than concentrating it into a laser-like point.
                </p>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-muted-foreground leading-relaxed">
                  Different wavelengths interact with different tissue depths, which is why the same technology can be used for facial, focused body, and broader wellness sessions.
                </p>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-muted-foreground leading-relaxed">
                  The experience is gentle and non-invasive. It is not a laser treatment and does not involve cutting, needles, or a recovery period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-4">Wellness-focused support</p>
            <h2 className="text-3xl md:text-4xl font-bold gold-gradient mb-4">What Patients Often Appreciate</h2>
            <p className="text-muted-foreground leading-relaxed">
              Infrared phototherapy is commonly incorporated into personal wellness and skin-care routines. It is not intended to diagnose, treat, cure, or prevent disease.
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
      <section className="py-16 md:py-24">
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
                  Sessions typically last <strong className="text-foreground">10 to 20 minutes</strong>. Let your practitioner know about your comfort level at any time.
                </p>
                <p>
                  Do not look directly at the lamp. Your practitioner will provide positioning guidance and any recommended eye protection.
                </p>
                <p>
                  Please share if you are pregnant or nursing, have photosensitivity or an active skin concern, use medications that increase light sensitivity, or have a medical device or health condition that may affect your suitability for light therapy.
                </p>
                <div className="flex gap-3 pt-1">
                  <Eye className="w-5 h-5 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                  <p className="text-sm">If you are seeking care for a medical condition, speak with your qualified healthcare professional.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Infrared Light Healing</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our clinic directory to find RX Infrared Light Healing services.
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
