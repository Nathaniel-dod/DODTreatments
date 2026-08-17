import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, MapPin } from 'lucide-react';

const treatmentProducts = [
  {
    href: '/treatments/wolfe-non-surgical',
    name: 'Wolfe Non-Surgical',
    category: 'Bodywork Therapy',
    tagline: "The World's Most Powerful Bodywork",
    blurb: 'Addresses scar tissue, inflammation, calcification, and crystallization — reversing the root cause of pain in just a few treatments.',
    priceLabel: 'Inquire',
    glyph: '✦',
  },
  {
    href: '/treatments/cellsonic-regeneration',
    name: 'CellSonic Regeneration ESWT',
    category: 'Shock Wave Therapy',
    tagline: 'Cell & Tissue Regeneration',
    blurb: 'Non-invasive shock wave therapy promoting tissue regeneration, pain relief, and accelerated healing across the whole body.',
    priceLabel: 'Inquire',
    glyph: '◆',
  },
  {
    href: '/treatments/cardio-medbed',
    name: 'Cardio MedBed EECP',
    category: 'Cardiovascular Therapy',
    tagline: 'Heart & Circulatory Regeneration',
    blurb: 'FDA-approved Enhanced External Counter Pulsation therapy, clinically proven to increase blood flow and cardiovascular health.',
    priceLabel: 'Inquire',
    glyph: '❖',
  },
  {
    href: '/treatments/consultations',
    name: 'Health Consultations',
    category: 'Personalized Guidance',
    tagline: 'Your Roadmap to Total Regeneration',
    blurb: 'One-hour consultations with Dr. Darrell Wolfe or Master Practitioners — emotional, nutritional, Perfect Day, and water fasting.',
    priceLabel: '$450 with Dr. Wolfe',
    glyph: '✦',
  },
  {
    href: '/treatments/dod-core-restore',
    name: 'DOD Core Restore',
    category: 'Core & Pelvic Therapy',
    tagline: 'Pelvic Floor & Deep Core Strengthening',
    blurb: 'Pelvic floor restoration, urinary incontinence, sexual wellness, and deep core strengthening — for both women and men.',
    priceLabel: 'Inquire',
    glyph: '◆',
  },
  {
    href: '/treatments/bone-density-scanner',
    name: 'DOD Advanced Bone Density Scanner',
    category: 'Diagnostic Assessment',
    tagline: 'Radiation-Free Bone Density Assessment',
    blurb: 'Track skeletal health and regeneration across every DOD protocol — safely, with no radiation exposure.',
    priceLabel: 'Inquire',
    glyph: '❖',
  },
  {
    href: '/treatments/infrared-light-healing',
    name: 'Infrared Light Healing',
    category: 'Phototherapy',
    tagline: 'Deep Infrared Phototherapy',
    blurb: 'The latest in deep infrared phototherapy. Effective for the reversal of many conditions.',
    priceLabel: 'Inquire',
    glyph: '✦',
  },
  {
    href: '/treatments/vitamin-d-light',
    name: 'Vitamin D Light',
    category: 'Light Therapy',
    tagline: 'Naturally Increase Your Vitamin D',
    blurb: 'Vitamin D Light Therapy is an extremely efficient way to naturally increase vitamin D in the body.',
    priceLabel: 'Inquire',
    glyph: '◆',
  },
];

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
          </div>
        </div>
      </section>

      {/* Treatment Cards */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatmentProducts.map((product) => (
              <Link key={product.href} href={product.href}>
                <div className="glass-panel rounded-2xl overflow-hidden hover:scale-[1.02] hover:border-primary/30 transition-all duration-300 group h-full flex flex-col">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center relative">
                    <span className="text-6xl gold-gradient">{product.glyph}</span>
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/80 text-primary text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h2 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{product.name}</h2>
                    <p className="text-sm text-foreground/70 mb-3">{product.tagline}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{product.blurb}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm font-medium text-primary">{product.priceLabel}</span>
                      <span className="flex items-center text-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                        View <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clinics & Practitioner Finder */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">Where to Experience These Treatments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit one of our destination clinics or find a certified practitioner near you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Link href="/clinics/ixtapa-zihuatanejo">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Ixtapa-Zihuatanejo, México</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">5-Star Healing & Training Retreat</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  A luxury oceanside retreat hosted by Dr. Darrell Wolfe and Dr. Sage Wolfe — immersive treatment and training for total-body transformation.
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                  Visit the Retreat <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/clinics/penticton">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Penticton, BC Canada</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Penticton Clinic</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Wolfe Non-Surgical treatments and health consultations in British Columbia, hosted by Master Practitioner Rita Marialaki.
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                  Explore the Clinic <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/practitioners">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Worldwide</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Practitioner Map</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Search the BraveHeartNation directory by location to find certified practitioners offering these treatments near you.
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                  Find a Practitioner <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
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
