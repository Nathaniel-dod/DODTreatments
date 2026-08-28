import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { ArrowRight } from 'lucide-react';

export default function Clinics() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Doc of Detox Treatment Clinics',
      description: 'Find Doc of Detox treatment clinics in Ixtapa-Zihuatanejo México and Penticton BC Canada. Advanced energy medicine at world-class facilities.',
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
        title="Clinics | Doc of Detox Treatment Centers"
        description="Experience advanced energy medicine treatments at our clinics in Ixtapa-Zihuatanejo México (5-Star Healing & Training Retreat) and Penticton BC Canada."
        path="/clinics"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              Our Clinics
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Experience world-class advanced energy medicine at our healing centers in México and Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Cards */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Ixtapa */}
            <Link href="/clinics/ixtapa-zihuatanejo">
              <div className="glass-panel rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group h-full">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}images/ixtapa-aerial.jpg`}
                    alt="Aerial view of Ixtapa-Zihuatanejo, México"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    5-Star Healing & Training Retreat
                  </div>
                  <h2 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">Ixtapa-Zihuatanejo, México</h2>
                  <p className="text-muted-foreground mb-4">Hosted by Dr. Sage Wolfe & Jesse Malcolm</p>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                    Nestled within the captivating landscapes of Ixtapa-Zihuatanejo, Mexico, indulge in a beautiful picturesque jungle backdrop with life-changing, life-saving amenities as you immerse your whole being into our 5 Star Health & Healing Retreat.
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Penticton */}
            <a href="https://vitalvibeswellness.com" target="_blank" rel="noopener noreferrer">
              <div className="glass-panel rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group h-full">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}images/penticton.jpg`}
                    alt="View of Penticton, BC and Okanagan Lake with mountains"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    Professional Clinic
                  </div>
                  <h2 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">Penticton, BC Canada</h2>
                  <p className="text-muted-foreground mb-4">Hosted by Master Practitioner Rita Marialaki</p>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                    Experience advanced energy medicine treatments at our Penticton clinic, where Master Practitioner Rita Marialaki provides personalized Wolfe Non-Surgical therapy and comprehensive health consultations in a professional, welcoming environment.
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find More Practitioners</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Search our global network of certified practitioners through the BraveHeartNation directory.
            </p>
            <Link href="/practitioners">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Search Practitioners
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
