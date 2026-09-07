import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { GeneralTreatmentCta } from '@/components/GeneralTreatmentCta';
import { TreatmentHeroCtas } from '@/components/TreatmentHeroCtas';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ExternalLink } from 'lucide-react';

const benefits = [
  'May Support Nitric Oxide and Vascular Health',
  'Designed to Support More Efficient Cardiac Work',
  'May Support Coronary Blood Flow to the Heart',
  'May Encourage Natural Blood Vessel Formation (Angiogenesis)',
  'Supports the Circulation of Oxygen and Nutrients',
  'May Support Cardiac Output',
  'May Support Healthy Inflammatory Processes',
];

const steps = [
  { step: 'Step 1', title: 'Inflation initiates retrograde pulse wave', desc: 'Inflation of calf cuffs' },
  { step: 'Step 2', title: 'Inflation of lower thigh cuffs 50ms later', desc: 'Sequential compression begins' },
  { step: 'Step 3', title: 'Inflation of upper thigh cuffs 50ms later', desc: 'Blood propelled toward heart' },
  { step: 'Step 4', title: 'Deflation facilitates cardiac unloading', desc: 'Timed with heartbeat' },
];

export default function CardioMedBed() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Cardio MedBed EECP',
      description: 'Complete Regeneration Of Heart & Circulatory System. FDA-approved Enhanced External Counter Pulsation therapy for cardiovascular health.',
      image: 'https://docofdetoxtreatments.com/images/hero-treatments.jpg',
      url: 'https://docofdetoxtreatments.com/treatments/cardio-medbed',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Cardio MedBed EECP Treatment',
      description: 'FDA-approved Enhanced External Counter Pulsation therapy for improving cardiovascular health, blood flow, and heart function.',
      lastReviewed: '2025-01-15',
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
        title="Cardio MedBed EECP | Heart Regeneration Therapy"
        description="Cardio MedBed EECP uses FDA-approved Enhanced External Counter Pulsation therapy to improve blood flow, heart function, and cardiovascular health."
        path="/treatments/cardio-medbed"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Cardiovascular Therapy
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              Cardio MedBed EECP
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-8 font-medium">
              Advanced Support For Heart & Circulatory Wellness
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Enhanced External Counter Pulsation (EECP) is a non-invasive therapy backed by a growing body of clinical research and used in cardiovascular care settings around the world.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}images/cardio-medbed-lifestyle.webp`}
              alt="Patient receiving Cardio MedBed EECP therapy with a practitioner"
              className="mt-10 h-[18rem] w-full rounded-3xl border border-primary/20 object-cover object-center shadow-2xl md:h-[28rem]"
            />
            <TreatmentHeroCtas />
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gold-gradient">
              A Clinically Studied Approach to Supporting Blood Circulation
            </h2>
            <div className="glass-panel rounded-2xl p-8 md:p-12 space-y-4">
              <p className="text-lg text-foreground/90 leading-relaxed">
                EECP is an internationally recognized, non-invasive treatment that has been studied for cardiovascular health and circulation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Used in Cardiovascular Care</strong> — EECP systems have recognized clinical applications in the United States.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Referenced in European Cardiology</strong> — EECP has been considered in cardiovascular care guidance and research.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Clinically Studied</strong> — Research has evaluated EECP in patients with coronary artery disease.</span>
                </li>
              </ul>
              <p className="text-muted-foreground pt-4">
                This non-invasive technology is used in cardiology settings around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center gold-gradient">How The Cardio MedBed Works</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Cardio MedBed Treatment is administered through three pairs of external inflatable cuffs that are applied around the lower legs, upper legs and buttocks. These cuffs continuously inflate and deflate between the resting period of the heartbeat and increase blood returned to the heart.
          </p>
          <figure className="max-w-5xl mx-auto mb-12 overflow-hidden rounded-3xl border border-primary/20 bg-background/30 shadow-2xl">
            <img
              src={`${import.meta.env.BASE_URL}images/cardio-medbed-blood-flow.jpg`}
              alt="Illustration of red blood cells flowing freely through a healthy blood vessel"
              className="h-[16rem] w-full object-cover object-center md:h-[26rem]"
            />
          </figure>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((item, index) => (
              <div key={index} className="glass-panel rounded-xl p-6 text-center">
                <div className="text-sm font-bold text-primary mb-2">{item.step}</div>
                <h3 className="font-bold text-sm mb-2 leading-snug">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="glass-panel rounded-2xl p-8 mt-12 max-w-3xl mx-auto text-center">
            <h3 className="font-bold text-xl mb-3">How does Cardio MedBed increase blood flow?</h3>
            <p className="text-muted-foreground">
              EECP is designed to encourage circulation through small branches of blood vessels, which may support alternate pathways around narrowed arteries.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">How Cardio MedBed Can Help</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-panel rounded-xl p-6 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <GeneralTreatmentCta className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Cardio MedBed EECP</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our clinic directory to find Cardio MedBed EECP services near you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/clinics">
                <Button size="lg" className="gold-glow">Find a Clinic</Button>
              </Link>
              <Link href="/clinics/ixtapa-zihuatanejo">
                <Button size="lg" variant="outline">Available at DOD5Star</Button>
              </Link>
            </div>
          </div>
        </div>
      </GeneralTreatmentCta>

      {/* Research */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <a
              href="https://www.dodpowerpack.com/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 gold-glow"
            >
              Read the Studies <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* At-Home & Clinic */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel max-w-4xl mx-auto rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold gold-gradient">Want a Cardio MedBed in Your Home or Clinic?</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Learn more about bringing Cardio MedBed EECP to your personal care setting or professional clinic.
            </p>
            <a
              href="https://www.dodpowerpack.com/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 gold-glow"
            >
              Learn More <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
