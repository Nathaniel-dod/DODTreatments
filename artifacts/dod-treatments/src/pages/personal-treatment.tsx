import { Seo } from '@/components/Seo';
import { Plane, Users, GraduationCap, Mail, Phone } from 'lucide-react';

export default function PersonalTreatment() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Personal Treatment & Training - In-Home',
      description: 'Personalized multi-day intensive advanced energy medicine programs are available in your home anywhere in the world.',
      image: 'https://docofdetoxtreatments.com/images/hero-personal-treatment.jpg',
      url: 'https://docofdetoxtreatments.com/personal-treatment',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Personal Treatment & Training - In-Home Service',
      description: 'Advanced energy medicine treatments and training are available in your home anywhere in the world through personalized multi-day intensive programs.',
      lastReviewed: '2025-01-15',
    },
  ];

  return (
    <>
      <Seo
        title="Personal Treatment & Training | Doc of Detox"
        description="Personalized multi-day intensive programs in Wolfe Non-Surgical and energy medicine are available in your home anywhere in the world."
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
              Private Multi-Day Programs — Anywhere in the World
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Experience advanced energy medicine in the comfort of your own home through a personalized multi-day intensive program.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">A Program Built Around You</h2>
            <div className="glass-panel rounded-3xl p-8 md:p-12 space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Personal Treatment &amp; Training is available for individuals, families, friends, caregivers, groups, and organizations anywhere in the world.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Each experience is personalized to the needs of the person or group. Programs can range from 5 to 33 days, with a minimum of seven hours per day, depending on your goals and circumstances.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Treatment, hands-on training, strategies, and practical tools are brought together so what you learn can become part of your daily lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized paths */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">Two Personalized Paths</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            <div className="glass-panel rounded-3xl p-8 md:p-10">
              <Users className="w-10 h-10 mb-5 text-primary" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-4">Treatment &amp; Training for You and Your Loved Ones</h3>
              <p className="text-foreground/90 leading-relaxed">
                Receive personalized treatments while you, your friends, and your family learn and practice techniques on yourselves. The experience is built around your group so you can continue supporting your own well-being and the people you love.
              </p>
              <p className="mt-6 border-t border-white/10 pt-5 text-sm font-medium text-primary">
                Best for individuals and families who want to treat themselves and their loved ones.
              </p>
            </div>
            <div className="glass-panel rounded-3xl p-8 md:p-10">
              <GraduationCap className="w-10 h-10 mb-5 text-primary" aria-hidden="true" />
              <h3 className="text-2xl font-bold mb-4">Professional Wolfe Non-Surgical Certification</h3>
              <p className="text-foreground/90 leading-relaxed">
                Wolfe Non-Surgical certification can be completed individually or with a group of friends and family. Training comes to you, helping participants build the skills and confidence to become a light in their communities and begin or strengthen a clinic or home practice.
              </p>
              <p className="mt-6 border-t border-white/10 pt-5 text-sm font-medium text-primary">
                Best for those who want to begin or advance a professional healing career.
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 max-w-3xl mx-auto">
            Every experience is shaped around the needs, goals, size, and location of the individual or group.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request Your Personal Program</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Email Cinthia or call Dr. Darrell Wolfe directly to discuss a personalized treatment and training experience for you or your group.
            </p>
            <div className="glass-panel rounded-2xl p-6 inline-block text-left">
              <div className="space-y-4">
                <a href="mailto:office.docofdetox@gmail.com" className="flex items-center gap-3 text-lg group">
                  <Mail className="w-6 h-6 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <div className="font-medium group-hover:text-primary">Email Cinthia</div>
                    <div className="text-primary break-all">office.docofdetox@gmail.com</div>
                  </div>
                </a>
                <a href="tel:1-469-861-8884" className="flex items-center gap-3 text-lg group">
                  <Phone className="w-6 h-6 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <div className="font-medium group-hover:text-primary">Dr. Darrell Wolfe — USA Direct or WhatsApp</div>
                    <div className="text-primary">1-469-861-8884</div>
                  </div>
                </a>
                <a href="tel:1-855-900-4544" className="flex items-center gap-3 text-lg group">
                  <Phone className="w-6 h-6 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <div className="font-medium group-hover:text-primary">Dr. Darrell Wolfe — Worldwide Toll-Free</div>
                    <div className="text-primary">1-855-900-4544 ext. 5</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
