import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  { title: 'Pelvic Floor Strength', desc: 'Strengthen the foundation of the deep core without surgery, medication, or downtime.' },
  { title: 'Continence Support', desc: 'Support bladder control and pelvic stability for women and men.' },
  { title: 'Back, Hip & Posture Support', desc: 'A stronger inner core can help create a natural bracing effect for daily movement.' },
  { title: 'Sexual Wellness', desc: 'Targeted neuromuscular stimulation supports pelvic blood flow, sensation, and intimacy.' },
  { title: 'Post-Partum Recovery', desc: 'Support rebuilding of the inner core and pelvic-floor strength after childbirth.' },
  { title: 'Core Stability', desc: 'Activate the deep inner unit—including the pelvic floor, transverse abdominis, and multifidus.' },
];

const howItWorks = [
  {
    step: '01',
    title: 'Sit Fully Clothed',
    desc: 'No probes, undressing, or medication. You simply sit comfortably on the Core Restore device.',
  },
  {
    step: '02',
    title: 'Focused 28-Minute Session',
    desc: 'High-Intensity Focused Electromagnetic (HIFEM) energy activates the pelvic floor and deep-core muscles beyond voluntary effort.',
  },
  {
    step: '03',
    title: 'Build a Stronger Foundation',
    desc: 'A typical protocol is six sessions over three weeks, tailored with a practitioner to your goals and history.',
  },
];

const serviceLines = [
  'Post-childbirth recovery',
  'Post-menopause restoration',
  "Men's continence & sexual wellness",
  'Athletes & high performers',
  'Aging adults',
  'Combined DOD protocols',
];

export default function DodCoreRestore() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'DOD Core Restore',
        description: 'Clinical-grade HIFEM therapy for pelvic floor strength, continence support, sexual wellness, and deep core stability for women and men.',
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
        title="DOD Core Restore | HIFEM Pelvic Floor & Deep Core Therapy"
        description="DOD Core Restore uses clinical-grade HIFEM therapy to support pelvic floor strength, continence, sexual wellness, and deep core stability for women and men."
        path="/treatments/dod-core-restore"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Core & Pelvic Therapy
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              DOD Core Restore
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-8 font-medium">
              Rebuild From the Core
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Clinical-grade High-Intensity Focused Electromagnetic (HIFEM) therapy designed to support pelvic-floor strength, deep-core stability, continence, and sexual wellness—for women and men, fully clothed in 28-minute sessions.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/dod-core-restore-lifestyle.png`}
              alt="Person receiving DOD Core Restore therapy beside the treatment device"
              className="mt-10 h-[18rem] w-full rounded-3xl border border-primary/20 object-cover object-center shadow-2xl md:h-[28rem]"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">How HIFEM Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Focused electromagnetic energy activates deep pelvic-floor and core muscles to help rebuild the lumbo-pelvic foundation that supports the back, hips, posture, and everyday movement.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">More Than the Pelvic Floor</h2>
            <p className="text-lg text-muted-foreground">
              The pelvic floor is the base of the deep core. Supporting it can positively influence stability, comfort, posture, and whole-body confidence.
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
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 gold-gradient">One Device. Many Ways to Support the Core.</h2>
              <p className="text-lg text-muted-foreground">For clinics, wellness practices, and individuals ready to expand their pelvic-floor and recovery options.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
              {serviceLines.map((serviceLine) => (
                <div key={serviceLine} className="rounded-xl border border-primary/20 bg-background/25 px-5 py-4 text-center text-sm font-medium">
                  {serviceLine}
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm leading-relaxed text-muted-foreground">
              DOD Core Restore is a wellness device. It is not a substitute for medical diagnosis or treatment, and individual results vary.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience DOD Core Restore</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a consultation to learn how DOD Core Restore fits into your personalized healing plan.
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
