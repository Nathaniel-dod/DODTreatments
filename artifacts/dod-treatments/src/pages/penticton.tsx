import { Seo } from '@/components/Seo';
import { MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Penticton() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'Doc of Detox Clinic Penticton',
      description: 'Advanced energy medicine clinic in Penticton, BC Canada. Wolfe Non-Surgical treatments and health consultations with Master Practitioner Rita Marialaki.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Penticton',
        addressRegion: 'BC',
        addressCountry: 'CA',
      },
      url: 'https://docofdetoxtreatments.com/clinics/penticton',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Penticton BC Canada Clinic - Doc of Detox',
      description: 'Experience Wolfe Non-Surgical and advanced energy medicine in Penticton, BC Canada. Hosted by Master Practitioner Rita Marialaki.',
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
        title="Penticton BC Canada | Doc of Detox Clinic"
        description="Experience Wolfe Non-Surgical and advanced energy medicine in Penticton, BC Canada. Hosted by Master Practitioner Rita Marialaki. Book your treatment today."
        path="/clinics/penticton"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-16 relative overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/penticton.jpg`}
          alt="View of Penticton, BC and Okanagan Lake with mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-primary">Penticton, BC Canada</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              Penticton Clinic
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Advanced Energy Medicine in British Columbia
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Hosted by Master Practitioner Rita Marialaki
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Experience Healing in Penticton</h2>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              As a Practitioner, I realized that everyone needs a personalized roadmap, along with repetition, focus and a coach to achieve optimal success.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              DOCOFDETOX High Frequency Nutriceuticals, Advanced Energy Medicine and cutting edge therapies like Wolfe Non-Surgical body therapy will provide all the necessary tools to be empowered, regain health and keep it for a lifetime.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Let me guide You on your way to experience the healing power of the Perfect Day Lifestyle and the enormous potential that Self Care & Self Love has to offer and to empower You to master Your God-given Precious Life. <strong>3-2-1 We got this!</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">Services Available</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">Wolfe Non-Surgical Treatments</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Advanced bodywork therapy targeting scar tissue, inflammation, and calcification for rapid pain relief and healing.
              </p>
            </div>
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">Health Consultations</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Personalized Perfect Day protocols, emotional healing, nutritional guidance, and water fasting support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Treatment</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Visit Vital Vibes Wellness to book with Master Practitioner Rita.
            </p>
            <a 
              href="https://vitalvibeswellness.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gold-glow">
                Visit Vital Vibes Wellness <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
