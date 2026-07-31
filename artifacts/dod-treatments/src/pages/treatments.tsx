import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Treatments() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Advanced Energy Medicine Treatments',
      description: 'Wolfe Non-Surgical bodywork, CellSonic Regeneration ESWT, and Cardio MedBed EECP therapy for regenerative healing.',
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
        title="Treatments | Advanced Energy Medicine Therapies"
        description="Wolfe Non-Surgical, CellSonic Regeneration ESWT, and Cardio MedBed EECP. Non-invasive regenerative treatments addressing pain, tissue damage, and cardiovascular health."
        path="/treatments"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              Our Treatments
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Three advanced energy-medicine therapies designed to address the root cause of pain, tissue damage, and cardiovascular dysfunction.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Cards */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 max-w-6xl mx-auto">
            
            {/* Wolfe Non-Surgical */}
            <div className="glass-panel rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12">
                <div>
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Bodywork Therapy
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Wolfe Non-Surgical</h2>
                  <p className="text-lg text-foreground/70 font-medium mb-4">
                    The World's Most Powerful Bodywork
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    You will notice better results from the first treatment than from anything else you have done so far because, unlike other therapies, we address the scar tissue, inflammation, calcification, and crystallization that create physical blocks. These blocks are the underlying source of aches, pains, lumps, bumps, and disease; by focusing on this root cause, Wolfe Non-Surgical practitioners can truly reverse issues in just a few treatments—and sometimes only one.
                  </p>
                  <Link href="/treatments/wolfe-non-surgical">
                    <Button size="lg">
                      Learn More <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="aspect-[4/3] lg:aspect-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <span className="text-8xl gold-gradient">✦</span>
                </div>
              </div>
            </div>

            {/* CellSonic */}
            <div className="glass-panel rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12">
                <div className="order-2 lg:order-1 aspect-[4/3] lg:aspect-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <span className="text-8xl gold-gradient">◆</span>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Shock Wave Therapy
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">CellSonic Regeneration ESWT</h2>
                  <p className="text-lg text-foreground/70 font-medium mb-4">
                    Extracorporeal Shock Wave Therapy for Cell & Tissue Regeneration
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A healthy body generates 0.04 volts per cell, and with 50 trillion cells, your body battery holds an incredible 2 trillion volts of energy. Extracorporeal Shock Wave Therapy harnesses this power, promoting tissue regeneration, pain relief, and accelerated healing. As a non-invasive therapy, it is widely used in orthopedics, sports medicine, urology, and rehabilitation, helping restore your body's natural balance and vitality.
                  </p>
                  <Link href="/treatments/cellsonic-regeneration">
                    <Button size="lg">
                      Learn More <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Cardio MedBed */}
            <div className="glass-panel rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12">
                <div>
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Cardiovascular Therapy
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Cardio MedBed EECP</h2>
                  <p className="text-lg text-foreground/70 font-medium mb-4">
                    Complete Regeneration Of Heart & Circulatory System
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Enhanced External Counter Pulsation (EECP) – A Non-Invasive Therapy Backed by Science. EECP is an internationally recognized, non-invasive treatment with clinically proven benefits for cardiovascular health. FDA-Approved (USA), endorsed by the European Society of Cardiology (ESC), and clinically validated through studies confirming EECP's effectiveness in patients with coronary artery disease. This technology is safe, medically approved, and widely used in leading cardiology centers worldwide.
                  </p>
                  <Link href="/treatments/cardio-medbed">
                    <Button size="lg">
                      Learn More <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="aspect-[4/3] lg:aspect-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <span className="text-8xl gold-gradient">❖</span>
                </div>
              </div>
            </div>

            {/* Consultations */}
            <div className="glass-panel rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12">
                <div>
                  <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Personalized Guidance
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Health Consultations</h2>
                  <p className="text-lg text-foreground/70 font-medium mb-4">
                    Your Personalized Roadmap to Total Regeneration
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Every treatment plan starts with the right guidance. Book a personalized 1-hour consultation with Dr. Darrell Wolfe ($450, including lifetime support), or choose an Emotional, Perfect Day, Nutritional, or Water Fasting consultation with Master Practitioners Sandra and Rita.
                  </p>
                  <Link href="/treatments/consultations">
                    <Button size="lg">
                      Explore Consultations <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                <div className="aspect-[4/3] lg:aspect-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <span className="text-8xl gold-gradient">✦</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Healing Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a consultation with Dr. Darrell Wolfe or one of our Master Practitioners to create your personalized treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/treatments/consultations">
                <Button size="lg" className="gold-glow">Book Consultation</Button>
              </Link>
              <Link href="/practitioners">
                <Button size="lg" variant="outline">Find a Practitioner</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
