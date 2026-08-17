import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Dod5StarNav } from '@/components/Dod5StarNav';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MapPin, BedDouble, Sparkles, Users } from 'lucide-react';

export default function IxtapaZihuatanejo() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'Doc of Detox 5-Star Healing & Training Retreat',
      description: 'Luxury healing retreat in Ixtapa-Zihuatanejo, México offering advanced energy medicine treatments, training, and personalized health protocols.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ixtapa-Zihuatanejo',
        addressCountry: 'MX',
      },
      telephone: '+1-469-861-8884',
      url: 'https://docofdetoxtreatments.com/clinics/ixtapa-zihuatanejo',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Ixtapa-Zihuatanejo México Clinic - 5-Star Healing Retreat',
      description: 'Experience advanced energy medicine at our luxury healing retreat in Ixtapa-Zihuatanejo, México. Hosted by Dr. Darrell Wolfe & Dr. Sage Wolfe.',
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
        title="Ixtapa-Zihuatanejo Clinic | 5-Star Healing Retreat"
        description="Experience advanced energy medicine at our luxury healing retreat in Ixtapa-Zihuatanejo, México, hosted by Dr. Darrell Wolfe. Call 1-469-861-8884."
        path="/clinics/ixtapa-zihuatanejo"
        structuredData={structuredData}
      />
      <Dod5StarNav />

      {/* Hero */}
      <section className="pt-16 pb-16 md:pt-24 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-primary">Ixtapa-Zihuatanejo, México</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              5-Star Healing & Training Retreat
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              The Ultimate Healing & Training Retreat
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Hosted by Dr. Darrell Wolfe & Dr. Sage Wolfe
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">The Journey Of A Lifetime That Will Last Your Whole Lifetime</h2>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Nestled within the captivating landscapes of Ixtapa-Zihuatanejo, Mexico, indulge in a beautiful picturesque jungle backdrop with life-changing, life-saving amenities as you immerse your whole being into our 5 Star Health & Healing Retreat.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Your personalized health & healing journey is built on 40 years of Dr. Darrell Wolfe's clinical and in-the-trenches experience of proving that your body along with proven strategies and advanced energy-medicine will reverse the so-called Irreversible. Where the Mind goes the Body follows. Let us guide you, support you emotionally and physically so that you take the Impossible and create the <strong>I AM Possible</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">Experience Options</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass-panel rounded-2xl p-8 text-center">
              <div className="text-4xl gold-gradient mb-4">✦</div>
              <h3 className="text-xl font-bold mb-3">The Healing Experience</h3>
              <p className="text-sm text-muted-foreground">
                Rejuvenating therapies, personalized healing protocols, and elegantly designed suites for a transformative journey of renewal.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-8 text-center">
              <div className="text-4xl gold-gradient mb-4">◆</div>
              <h3 className="text-xl font-bold mb-3">The Treatment Experience</h3>
              <p className="text-sm text-muted-foreground">
                Revolutionary Wolfe Non-Surgical treatments and advanced energy medicine therapies in a luxurious jungle estate.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-8 text-center">
              <div className="text-4xl gold-gradient mb-4">❖</div>
              <h3 className="text-xl font-bold mb-3">The Training Experience</h3>
              <p className="text-sm text-muted-foreground">
                Learn revolutionary healing techniques while enjoying luxury accommodations and the serene backdrop of lush jungles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore the Retreat */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">Explore the Retreat</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/clinics/ixtapa-zihuatanejo/residence">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <BedDouble className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">The Residence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Private suites, chef-prepared cuisine, pools, and treatment rooms in a luxury jungle estate.
                </p>
                <div className="flex items-center text-primary text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                  Tour the House <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/clinics/ixtapa-zihuatanejo/treatments">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <Sparkles className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Treatments</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Daily Wolfe Non-Surgical, CellSonic, Cardio MedBed, and personalized healing protocols.
                </p>
                <div className="flex items-center text-primary text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                  See the Treatments <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/clinics/ixtapa-zihuatanejo/team">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Your Team</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Dr. Darrell Wolfe, Dr. Sage Wolfe, and the consultants guiding your transformation.
                </p>
                <div className="flex items-center text-primary text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                  Meet the Team <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-32 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Retreat</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Call Dr. Darrell Wolfe directly for your 30-minute consultation. It will be an honor for him to help you create your Health & Healing Experience.
            </p>
            <div className="glass-panel rounded-2xl p-6 inline-block">
              <div className="space-y-3">
                <a href="tel:1-469-861-8884" className="flex items-center gap-3 text-lg group">
                  <Phone className="w-6 h-6 text-primary" />
                  <div className="text-left">
                    <div className="font-medium group-hover:text-primary">USA Direct or WhatsApp</div>
                    <div className="text-primary">1-469-861-8884</div>
                  </div>
                </a>
                <a href="tel:1-855-900-4544" className="flex items-center gap-3 text-lg group">
                  <Phone className="w-6 h-6 text-primary" />
                  <div className="text-left">
                    <div className="font-medium group-hover:text-primary">Worldwide Toll-Free</div>
                    <div className="text-primary">1-855-900-4544 ext. 5</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Your Stay CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/clinics/ixtapa-zihuatanejo/inquire">
            <Button size="lg" className="gold-glow">Plan Your Stay <ArrowRight className="ml-2 w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </>
  );
}
