import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ExternalLink } from 'lucide-react';

const benefits = [
  { title: 'Radiation-Free by Design', desc: 'Quantitative ultrasound assesses relative bone density without ionizing radiation, X-rays, or contrast.' },
  { title: 'An Objective Baseline', desc: 'Start with a measurable reference point, then re-scan over time to observe changes in skeletal health.' },
  { title: 'Fast & Fully Clothed', desc: 'A scan takes only minutes, with a handheld probe and coupling gel—no needles or undressing required.' },
  { title: 'Progress You Can Track', desc: 'Repeatable measurements provide data points that can help make longer-term wellness goals easier to follow.' },
  { title: 'Whole-Program Context', desc: 'Bone-health measurements can add context alongside mobility, recovery, and wellness protocols.' },
  { title: 'Informed Conversations', desc: 'Clear, repeatable readings help guide practical conversations with your practitioner about your goals.' },
];

const howItWorks = [
  {
    step: '01',
    title: 'Position & Scan',
    desc: 'A practitioner places a handheld ultrasound probe at the measurement site while you remain fully clothed.',
  },
  {
    step: '02',
    title: 'Ultrasound Reading',
    desc: 'Sound waves travel through bone, and the scanner measures their speed to produce a relative bone-density reading in minutes.',
  },
  {
    step: '03',
    title: 'Baseline & Track',
    desc: 'Your initial result becomes a baseline that can be revisited over the course of a wellness protocol.',
  },
];

const serviceLines = [
  'Regenerative & wellness clinics',
  'Aging & longevity practices',
  'Post-menopause care',
  'Athletes & high performers',
  'Functional medicine',
  'Combined DOD protocols',
];

export default function BoneDensityScanner() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'DOD Advanced Bone Density Scanner',
        description: 'Radiation-free quantitative ultrasound assessment that measures the speed of sound through bone to support relative bone-density tracking.',
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
        title="DOD Advanced Bone Density Scanner | Quantitative Ultrasound"
        description="Radiation-free quantitative ultrasound assessment with the DOD Advanced Bone Density Scanner. Establish a baseline and track relative bone-density readings over time."
        path="/treatments/bone-density-scanner"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Objective Wellness Assessment
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              DOD Advanced Bone Density Scanner
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-8 font-medium">
              Your Body&apos;s Most Powerful Test
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Clinical-grade, radiation-free quantitative ultrasound measures the speed of sound through bone in minutes—giving you an objective baseline to track relative skeletal-health readings over time.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/bone-density-scanner-lifestyle.png`}
              alt="Practitioner performing a DOD Advanced Bone Density Scanner assessment"
              className="mt-10 h-[18rem] w-full rounded-3xl border border-primary/20 object-cover object-center shadow-2xl md:h-[28rem]"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">How Quantitative Ultrasound Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ultrasound sends sound waves through bone and measures how quickly they travel. That measurement provides a radiation-free, relative bone-density reading without X-rays.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {howItWorks.map((item) => (
              <div key={item.step} className="glass-panel rounded-2xl p-7">
                <span className="text-sm font-bold text-primary">{item.step}</span>
                <h3 className="text-xl font-bold mt-4 mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">Measurement Is the Multiplier</h2>
            <p className="text-lg text-muted-foreground">
              You can&apos;t manage what you don&apos;t measure. A consistent baseline and repeatable readings bring useful context to your wellness journey.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

      {/* Built For */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Built for</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 gold-gradient">One Scan. Useful Context for Every Protocol.</h2>
              <p className="text-lg text-muted-foreground">For clinics, wellness practices, and individuals who want to track a meaningful skeletal-health baseline over time.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
              {serviceLines.map((serviceLine) => (
                <div key={serviceLine} className="rounded-xl border border-primary/20 bg-background/25 px-5 py-4 text-center text-sm font-medium">
                  {serviceLine}
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm leading-relaxed text-muted-foreground">
              The DOD Advanced Bone Density Scanner is a wellness assessment device. Its readings are for relative tracking and are not a substitute for medical diagnosis; suspected osteoporosis or fracture risk should be evaluated by a qualified physician.
            </p>
          </div>
        </div>
      </section>

      {/* Home & Clinic CTA */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel max-w-4xl mx-auto rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold gold-gradient">Want This for Your Home or Clinic?</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Learn more about bringing the DOD Advanced Bone Density Scanner to your home or professional clinic.
            </p>
            <a
              href="https://www.dodpowerpack.com/bone-density-scanner"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 gold-glow"
            >
              Learn More <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Know Your Baseline. Track Your Regeneration.</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a consultation to include a bone density assessment in your healing protocol.
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
