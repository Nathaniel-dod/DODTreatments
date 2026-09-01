import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

export default function Home() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Doc of Detox Treatments',
      url: 'https://docofdetoxtreatments.com',
      logo: 'https://docofdetoxtreatments.com/favicon.svg',
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
        <img
          aria-hidden="true"
          src={`${import.meta.env.BASE_URL}images/home-3d-world-map.jpg`}
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#071421]/85 via-[#071421]/45 to-background" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_72%_62%_at_center,_rgba(7,20,33,0.4)_0%,_transparent_75%)]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--gold-core)_0%,_transparent_50%)] opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 gold-gradient gold-glow animate-fade-in-up">
              Total Regeneration Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-1">
               From Wolfe Non-Surgical to advanced energy medicine technology, find clinics and practitioners dedicated to helping people explore practical strategies when they&apos;ve been told nothing more can be done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-2">
              <Link href="/treatments">
                <Button size="lg" className="text-lg px-8 h-14 gold-glow">
                  Explore Treatments <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/clinics">
                <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                  Explore Clinics
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
                  Wolfe Non-Surgical, CellSonic Regeneration ESWT, Cardio MedBed EECP, Energy Medicine, &amp; Perfect Day Consultations - designed to support mobility, circulation, and whole-body wellness while reducing inflammation and calcification.
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                  Explore Treatments <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/clinics/ixtapa-zihuatanejo">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <h3 className="text-2xl font-bold mb-3 gold-gradient">DOD5Star</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  The 5-Star Healing & Training Retreat in Ixtapa-Zihuatanejo, México — hosted by Dr. Sage Wolfe and Jesse Malcolm for total-body transformation.
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                  Visit the Retreat <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/personal-treatment">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <h3 className="text-2xl font-bold mb-3 gold-gradient">Personal Treatments & Training</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Private multi-day intensive treatment and training programs are available in your home anywhere in the world, built entirely around you.
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
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
            <Link href="/clinics/ixtapa-zihuatanejo" className="block h-full">
              <div className="glass-panel rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group h-full flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}images/ixtapa-aerial.jpg`}
                    alt="Aerial view of Ixtapa-Zihuatanejo, México"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Ixtapa-Zihuatanejo, México</h3>
                  <p className="text-muted-foreground mb-4">5-Star Healing & Training Retreat</p>
                  <p className="text-sm text-foreground/70 mb-4">Hosted by Dr. Sage Wolfe & Jesse Malcolm</p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all mt-auto">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Penticton */}
            <a href="https://vitalvibeswellness.com" target="_blank" rel="noopener noreferrer" className="block h-full">
              <div className="glass-panel rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group h-full flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}images/penticton.jpg`}
                    alt="View of Penticton, BC and Okanagan Lake with mountains"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Penticton, BC Canada</h3>
                  <p className="text-muted-foreground mb-4">Professional Clinic</p>
                  <p className="text-sm text-foreground/70 mb-4">Hosted by Master Practitioner Rita Marialaki</p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all mt-auto">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>

            {/* Practitioner Map */}
            <Link href="/practitioners" className="block h-full">
              <div className="glass-panel rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group h-full flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden bg-background">
                  <img
                    src={`${import.meta.env.BASE_URL}images/practitioner-earth.jpg`}
                    alt="Earth viewed from space"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-background/10" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Practitioner Map</h3>
                  <p className="text-muted-foreground mb-4">Certified Practitioners Worldwide</p>
                  <p className="text-sm text-foreground/70 mb-4">Search the BraveHeartNation directory near you</p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all mt-auto">
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
          <div className="max-w-6xl mx-auto grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="order-1 text-center lg:order-2 lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 gold-gradient">45 Years in the Trenches of Functional Medicine</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                 Wolfe Non-Surgical, DOD Energy Medicine, and Perfect Day Consultations are the culmination of Dr. Darrell Wolfe's 45 years in the trenches of functional medicine. We have had patients living with chronic conditions say these personalized strategies helped them experience meaningful changes they once thought were out of reach.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                 Together they offer support at every level — from cellular wellness to inflammation, scar tissue, calcification, emotions, and nutrition — for a truly whole-body approach.
              </p>
            </div>
            <div className="relative order-2 self-stretch overflow-hidden lg:order-1 [mask-image:radial-gradient(ellipse_78%_86%_at_62%_48%,black_53%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_78%_86%_at_62%_48%,black_53%,transparent_100%)]">
              <img
                src={`${import.meta.env.BASE_URL}images/body-regeneration-3d.jpg`}
                alt="Three-dimensional illustration of the body transitioning from pain toward renewal"
                className="aspect-square h-full w-full origin-top scale-[1.12] object-cover lg:aspect-auto"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-tr from-background/30 via-transparent to-primary/5" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
