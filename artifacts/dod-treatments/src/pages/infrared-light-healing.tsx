import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  { title: 'Deep Tissue Penetration', desc: 'Infrared light reaches deep into tissues where healing happens.' },
  { title: 'Condition Reversal', desc: 'Effective support for the reversal of many chronic conditions.' },
  { title: 'Non-Invasive & Painless', desc: 'Relax during treatment — no needles, no downtime.' },
  { title: 'Whole-Body Support', desc: 'Complements every other DOD treatment and protocol.' },
];

export default function InfraredLightHealing() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Infrared Light Healing',
      description: 'The latest in deep infrared phototherapy — effective support for the reversal of many conditions.',
      lastReviewed: '2026-08-17',
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
        title="Infrared Light Healing | Deep Infrared Phototherapy"
        description="Infrared Light Healing brings the latest in deep infrared phototherapy — non-invasive, painless, and effective for the reversal of many conditions."
        path="/treatments/infrared-light-healing"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Phototherapy
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              Infrared Light Healing
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-8 font-medium">
              The Latest in Deep Infrared Phototherapy
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Effective for the reversal of many conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">How Infrared Light Healing Can Help</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-panel rounded-xl p-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Infrared Light Healing</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a consultation to learn how infrared phototherapy fits into your healing plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gold-glow" asChild>
                <Link href="/treatments/consultations">Book Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/clinics">Explore Clinics</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
