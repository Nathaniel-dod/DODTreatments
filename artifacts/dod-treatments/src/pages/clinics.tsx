import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { ArrowRight } from 'lucide-react';

export default function Clinics() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Doc of Detox Treatment Clinics',
      description: 'Explore the DOD5Star healing and training retreat in Ixtapa-Zihuatanejo, México, plus a worldwide directory of independent practitioners.',
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
        description="Explore the DOD5Star healing and training retreat in Ixtapa-Zihuatanejo, México, plus a worldwide directory of independent practitioners."
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
              Explore the DOD5Star retreat in México and find independent practitioners around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic Cards */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mx-auto mb-8 max-w-3xl rounded-xl border border-primary/20 bg-primary/5 px-5 py-4 text-center text-sm leading-relaxed text-foreground/90">
            Featured clinics are locations highlighted by Doc of Detox. Practitioners listed in the directory are independent providers responsible for their own services, advice, scheduling, fees, and policies.
          </p>
          <div className="mx-auto max-w-3xl">
            
            {/* Ixtapa */}
            <Link
              href="/clinics/ixtapa-zihuatanejo"
              className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
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
                    5 Star Healing & Training Retreat
                  </div>
                  <h2 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors">Ixtapa-Zihuatanejo, México</h2>
                  <p className="text-muted-foreground mb-4">Hosted by Dr. Sage Wolfe & Jesse Malcolm</p>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                    Nestled within the captivating landscapes of Ixtapa-Zihuatanejo, Mexico, settle into a picturesque jungle backdrop with restorative amenities designed to support your stay at our 5 Star Health & Healing Retreat.
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find More Practitioners</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Search our global network of certified practitioners through the BraveHeartNation directory.
            </p>
            <Link
              href="/practitioners"
              className="inline-flex rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              Search Practitioners
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
