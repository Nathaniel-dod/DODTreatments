import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Globe, MapPin, User } from 'lucide-react';

export default function Home() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Doc of Detox Treatments',
      url: 'https://docofdetoxtreatments.com',
      logo: 'https://docofdetoxtreatments.com/images/logo.png',
      description: 'Advanced energy medicine treatments, clinics, and consultations for life-changing regenerative healing.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-855-900-4544',
        contactType: 'customer service',
        areaServed: ['US', 'CA', 'MX'],
        availableLanguage: 'English',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Doc of Detox Treatments - Advanced Energy Medicine',
      description: 'Wolfe Non-Surgical, CellSonic Regeneration ESWT, and Cardio MedBed EECP treatments for non-invasive regenerative healing.',
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
        title="DOCOFDETOX TREATMENTS"
        description="Wolfe Non-Surgical, CellSonic Regeneration ESWT, and Cardio MedBed EECP. Life-changing regenerative treatments at our clinics or in your home."
        path="/"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 opacity-[0.09]"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/world-map.svg)`,
            backgroundSize: '130% auto',
            backgroundPosition: 'center 38%',
            backgroundRepeat: 'no-repeat',
            maskImage: 'radial-gradient(ellipse 75% 65% at 50% 45%, black 35%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 45%, black 35%, transparent 80%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--gold-core)_0%,_transparent_50%)] opacity-5" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 gold-gradient gold-glow animate-fade-in-up">
              Total Regeneration Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
              From the world's most powerful bodywork to advanced medical technology, find the clinics and practitioners dedicated to reversing the root cause of pain and disease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-2">
              <Link href="/treatments">
                <Button size="lg" className="text-lg px-8 h-14 gold-glow">
                  Explore Treatments <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/treatments/consultations">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Link href="/treatments">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <h3 className="text-2xl font-bold mb-3 gold-gradient">Treatments</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Wolfe Non-Surgical, CellSonic Regeneration ESWT, Cardio MedBed EECP, and personalized health consultations — therapies that target the root cause of pain and disease.
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                  Explore Treatments <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/personal-treatment">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <h3 className="text-2xl font-bold mb-3 gold-gradient">Personal Treatments & Training</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Elite Master Practitioners fly to your home anywhere in the world for multi-day intensive treatment and training programs, built entirely around you.
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/clinics/ixtapa-zihuatanejo">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <h3 className="text-2xl font-bold mb-3 gold-gradient">DOD5Star</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  The 5-Star Healing & Training Retreat in Ixtapa-Zihuatanejo, México — hosted by Dr. Darrell Wolfe and Dr. Sage Wolfe for total-body transformation.
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                  Visit the Retreat <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* Clinics */}
      <section className="py-12 md:py-20 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-gradient">Our Clinics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience advanced treatments at our world-class healing centers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ixtapa */}
            <Link href="/clinics/ixtapa-zihuatanejo">
              <div className="glass-panel rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-16 h-16 text-primary/40" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Ixtapa-Zihuatanejo, México</h3>
                  <p className="text-muted-foreground mb-4">5-Star Healing & Training Retreat</p>
                  <p className="text-sm text-foreground/70 mb-4">Hosted by Dr. Darrell Wolfe & Dr. Sage Wolfe</p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Penticton */}
            <Link href="/clinics/penticton">
              <div className="glass-panel rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-16 h-16 text-primary/40" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Penticton, BC Canada</h3>
                  <p className="text-muted-foreground mb-4">Professional Clinic</p>
                  <p className="text-sm text-foreground/70 mb-4">Hosted by Master Practitioner Rita Marialaki</p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Practitioner Map */}
            <Link href="/practitioners">
              <div className="glass-panel rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/10 relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage: `url(${import.meta.env.BASE_URL}images/world-map.svg)`,
                      backgroundSize: '160% auto',
                      backgroundPosition: 'center 40%',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-16 h-16 text-primary/40" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Practitioner Map</h3>
                  <p className="text-muted-foreground mb-4">Certified Practitioners Worldwide</p>
                  <p className="text-sm text-foreground/70 mb-4">Search the BraveHeartNation directory near you</p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                    Find a Practitioner <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 45 Years of Functional Medicine */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 gold-gradient">45 Years in the Trenches of Functional Medicine</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Wolfe Non-Surgical, DOD Energy Medicine, and Perfect Day Consultations are the culmination of Dr. Darrell Wolfe's 45 years in the trenches of functional medicine. Personalized to each patient, these strategies have helped reverse the so-called irreversible in thousands of people living with chronic conditions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Together they address healing at every level — from the cells to inflammation, scar tissue, calcification, emotions, and nutrition — for true whole-body regeneration.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Treatment CTA */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
            <User className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-5xl font-bold mb-4 gold-gradient">Personal Treatment & Training</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our elite Master Practitioners fly to your home anywhere in the world to deliver personalized multi-day intensive programs.
            </p>
            <Link href="/personal-treatment">
              <Button size="lg" className="gold-glow">Learn More About In-Home Treatment</Button>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
