import { Seo } from '@/components/Seo';
import { InquiryForm } from '@/components/InquiryForm';
import { Phone, MapPin } from 'lucide-react';

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
        description="Experience advanced energy medicine at our luxury healing retreat in Ixtapa-Zihuatanejo, México. Hosted by Dr. Darrell Wolfe & Dr. Sage Wolfe. Call 1-469-861-8884."
        path="/clinics/ixtapa-zihuatanejo"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
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

      {/* Inquiry Form */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Information</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll reach out personally within 24 hours.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <InquiryForm defaultType="clinic" defaultLocation="Ixtapa-Zihuatanejo, México" />
          </div>
        </div>
      </section>
    </>
  );
}
