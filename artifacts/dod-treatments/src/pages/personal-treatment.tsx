import { Seo } from '@/components/Seo';
import { InquiryForm } from '@/components/InquiryForm';
import { Plane, Star, Calendar } from 'lucide-react';

export default function PersonalTreatment() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Personal Treatment & Training - In-Home',
      description: 'Elite Master Practitioners fly to your home anywhere in the world to deliver personalized multi-day intensive advanced energy medicine programs.',
      image: 'https://docofdetoxtreatments.com/images/hero-personal-treatment.jpg',
      url: 'https://docofdetoxtreatments.com/personal-treatment',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Personal Treatment & Training - In-Home Service',
      description: 'Elite Master Practitioners deliver advanced energy medicine treatments and training in your home anywhere in the world. Multi-day intensive programs available.',
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
        title="Personal Treatment & Training | Doc of Detox"
        description="Elite Master Practitioners fly to your home anywhere in the world to deliver multi-day intensive programs in Wolfe Non-Surgical and energy medicine."
        path="/personal-treatment"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Plane className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-primary">Worldwide In-Home Service</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              Personal Treatment & Training
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Elite Master Practitioners Fly to You — Anywhere in the World
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Experience advanced energy medicine in the comfort of your own home with personalized multi-day intensive programs delivered by our two elite Master Practitioners.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">How Personal Treatment Works</h2>
            <div className="glass-panel rounded-3xl p-8 md:p-12 space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Our elite <strong>Master Practitioner Rita Marialaki</strong> travels to your home anywhere in the world to deliver intensive, personalized healing and training programs.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Whether you're seeking deep healing, learning advanced techniques to treat yourself and your family, or both, our practitioners bring decades of experience directly to you.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Programs are fully customized based on your health goals, timeline, and desired outcomes. All travel, accommodation, and logistics are handled seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioners */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">Our Elite Practitioners</h2>
          <div className="max-w-3xl mx-auto">
            
            {/* Rita */}
            <div className="glass-panel rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Master Practitioner Rita Marialaki</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                As a Practitioner, I realized that everyone needs a personalized roadmap, along with repetition, focus and a coach to achieve optimal success. Let me guide You on your way to experience the healing power of the Perfect Day Lifestyle and empower You to master Your God-given Precious Life.
              </p>
              <p className="text-xs text-primary font-medium">Specialties: Wolfe Non-Surgical, Perfect Day Protocols, Emotional Healing</p>
            </div>

          </div>
        </div>
      </section>

      {/* Program Options */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">Program Options</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            <div className="glass-panel rounded-2xl p-6 text-center">
              <Calendar className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">3-Day Intensive</h3>
              <p className="text-sm text-muted-foreground mb-3">Focused healing or training</p>
              <p className="text-xs text-primary font-medium">Inquire for pricing</p>
            </div>

            <div className="glass-panel rounded-2xl p-6 text-center">
              <Calendar className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">5-Day Deep Dive</h3>
              <p className="text-sm text-muted-foreground mb-3">Comprehensive treatment + training</p>
              <p className="text-xs text-primary font-medium">Inquire for pricing</p>
            </div>

            <div className="glass-panel rounded-2xl p-6 text-center">
              <Calendar className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">7-Day Transformation</h3>
              <p className="text-sm text-muted-foreground mb-3">Full immersion healing journey</p>
              <p className="text-xs text-primary font-medium">Inquire for pricing</p>
            </div>

            <div className="glass-panel rounded-2xl p-6 text-center">
              <Calendar className="w-10 h-10 mx-auto mb-4 text-primary" />
              <h3 className="font-bold mb-2">Fully Customized</h3>
              <p className="text-sm text-muted-foreground mb-3">Tailored to your exact needs</p>
              <p className="text-xs text-primary font-medium">Inquire for pricing</p>
            </div>

          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            All programs include practitioner travel, accommodations, personalized treatment protocols, training materials, and lifetime support. Contact us to design your custom program.
          </p>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Your Personal Program</h2>
            <p className="text-lg text-muted-foreground">
              Tell us about your health goals and preferred dates. We'll design a custom program and provide a detailed proposal within 24 hours.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <InquiryForm defaultType="personal-treatment" defaultLocation="In-home (worldwide)" />
          </div>
        </div>
      </section>
    </>
  );
}
