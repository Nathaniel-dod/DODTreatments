import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { TreatmentHeroCtas } from '@/components/TreatmentHeroCtas';
import { Phone, Mail, ExternalLink, Heart, Sun, Apple, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';

const consultationFaqs = [
  {
    question: 'How much does a personalized consultation with Dr. Darrell Wolfe cost?',
    answer:
      'A personalized consultation with Dr. Darrell Wolfe costs $450 for a 1-hour session and includes lifetime support. Dr. Wolfe provides a step-by-step personalized strategy covering nutritional, emotional, and physical health, with unlimited telephone support.',
  },
  {
    question: 'What types of consultations do Doc of Detox Master Practitioners offer?',
    answer:
      'Doc of Detox Master Practitioners offer personalized consultation options designed to provide a clear roadmap for your health goals.',
  },
  {
    question: 'How do I book a Doc of Detox consultation?',
    answer:
      'To book a Doc of Detox consultation, call Cinthia toll-free at 1-855-900-4544 ext. 1, direct/WhatsApp at 1-469-861-9872, or email office.docofdetox@gmail.com. You can also use the practitioner booking links on this page.',
  },
];

const ritaOptions = [
  { label: 'Emotional Consultation', href: 'https://vitalvibeswellness.com', icon: Heart },
  { label: 'Perfect Day Consultation', href: 'https://vitalvibeswellness.com', icon: Sun },
  { label: 'Nutritional Consultation', href: 'https://vitalvibeswellness.com', icon: Apple },
  { label: 'Water Fasting Consultation', href: 'https://vitalvibeswellness.com', icon: Droplets },
];

export default function Consultations() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Personalized Consultation with Dr. Darrell Wolfe',
      description:
        '1-hour personalized health consultation with Dr. Darrell Wolfe including lifetime support. Step-by-step strategy covering nutritional, emotional, and physical health.',
      image: 'https://docofdetoxtreatments.com/images/hero-consultations.jpg',
      url: 'https://docofdetoxtreatments.com/treatments/consultations',
      offers: {
        '@type': 'Offer',
        price: 450,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://docofdetoxtreatments.com/treatments/consultations',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: consultationFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Perfect Day Consultations - Doc of Detox',
      description:
        'Book a personalized health consultation with Dr. Darrell Wolfe or a certified New World Master Practitioner. Emotional, Perfect Day, Nutritional, and Water Fasting consultations.',
      lastReviewed: '2025-01-15',
      reviewedBy: {
        '@type': 'Person',
        name: 'Dr. Darrell Wolfe',
        honorificSuffix: 'N.D.',
        jobTitle: 'Doctor of Naturopathic Medicine',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://docofdetoxtreatments.com/' },
        { '@type': 'ListItem', position: 2, name: 'Treatments', item: 'https://docofdetoxtreatments.com/treatments' },
        { '@type': 'ListItem', position: 3, name: 'Consultations', item: 'https://docofdetoxtreatments.com/treatments/consultations' },
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Perfect Day Consultations | Doc of Detox"
        description="Book a personalized $450 consultation with Dr. Darrell Wolfe including lifetime support, or choose Emotional, Perfect Day, Nutritional, or Water Fasting consultations."
        path="/treatments/consultations"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              Perfect Day Consultations
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              A personalized consultation gives you a step-by-step strategy for your health — nutritional, emotional, and physical — from Dr. Darrell Wolfe or a certified New World Master Practitioner.
            </p>
            <p className="text-2xl font-bold gold-gradient">3, 2, 1, We Got This!</p>
            <img
              src={`${import.meta.env.BASE_URL}images/perfect-day-consultation.jpg`}
              alt="Woman speaking on the phone during a personal consultation"
              className="mt-10 h-[16rem] w-full rounded-3xl border border-primary/20 object-cover object-center shadow-2xl md:h-[24rem]"
            />
            <TreatmentHeroCtas />
          </div>
        </div>
      </section>

      {/* Dr. Wolfe consultation */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gold-gradient">
              Book Your Personalized Consultation with Dr. Darrell Wolfe
            </h2>
            <p className="text-center text-5xl font-extrabold mb-2">$450</p>
            <p className="text-center text-lg text-muted-foreground mb-8">1-Hour Consultation + Lifetime Support</p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              How would you like to have Dr. Darrell Wolfe as your guide and coach? Where all questions matter, because you matter. Dr. Wolfe will provide you with a step-by-step personalized strategy to create the life you deserve. He will support you on a nutritional, emotional, and physical level with unlimited telephone support until you become the master of the life that you've always dreamed of.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="rounded-2xl border border-border/50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold">Call or Email Cinthia to Book</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Toll-Free: <a className="text-primary font-medium" href="tel:1-855-900-4544">1-855-900-4544</a> ext. 1
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Direct/WhatsApp: <a className="text-primary font-medium" href="tel:1-469-861-9872">1-469-861-9872</a>
                </p>
                <p className="text-sm text-muted-foreground">
                  <Mail className="inline-block w-4 h-4 mr-1.5 text-primary" />
                  Email: <a className="text-primary font-medium break-all" href="mailto:office.docofdetox@gmail.com">office.docofdetox@gmail.com</a>
                </p>
              </div>
              <div className="rounded-2xl border border-border/50 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold">Call Dr. Darrell Wolfe Directly</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  USA Direct/WhatsApp: <a className="text-primary font-medium" href="tel:1-469-861-9454">1-469-861-9454</a>
                </p>
                <p className="text-sm text-muted-foreground">
                  Toll-Free: <a className="text-primary font-medium" href="tel:1-855-900-4544">1-855-900-4544</a> ext. 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Practitioners */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gold-gradient">
            Book a Consultation with a Qualified New World Master Practitioner
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Choose a personalized consultation with Master Practitioners Rita or Jesse.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-panel rounded-3xl p-8">
              <img
                src={`${import.meta.env.BASE_URL}images/rita-consultation.webp`}
                alt="Rita Marialaki, New World Master Practitioner"
                className="w-36 h-36 mx-auto rounded-full object-cover mb-6 ring-2 ring-primary/30"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold mb-4 text-center">Consultations with Rita</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                "Everyone needs a personalized roadmap, along with repetition, focus and a coach to achieve optimal success. Let me guide you to experience the healing power of the Perfect Day Lifestyle and the enormous potential of Self Care & Self Love. 3-2-1 We got this!"
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Visit Vital Vibes Wellness to book with Rita:
              </p>
              <div className="space-y-3">
                {ritaOptions.map((opt) => (
                  <a key={opt.label} href={opt.href} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full justify-between">
                      <span className="flex items-center gap-2">
                        <opt.icon className="w-4 h-4 text-primary" /> {opt.label}
                      </span>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-3xl p-8">
              <img
                src={`${import.meta.env.BASE_URL}images/jesse-consultation.webp`}
                alt="Jesse Malcolm, Wolfe Non-Surgical Master Practitioner"
                className="w-36 h-36 mx-auto rounded-full object-cover mb-6 ring-2 ring-primary/30"
                loading="lazy"
              />
              <h3 className="text-2xl font-bold mb-4 text-center">Consultations with Jesse</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Jesse Malcolm is a Wolfe Non-Surgical Master Practitioner dedicated to helping clients improve mobility, ease physical restrictions, and support their overall well-being through advanced non-invasive deep tissue therapy.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Known for his calm, professional, and approachable manner, Jesse listens carefully, assesses individual needs, and provides personalized support focused on restoring natural function.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Contact Jesse directly:
              </p>
              <div>
                <a href="tel:+12508788178" className="block">
                  <Button variant="outline" className="w-full h-auto min-h-12 justify-start whitespace-normal py-2">
                    <span className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span className="text-left">
                        <span className="block text-xs text-muted-foreground">Call or text, Direct/WhatsApp</span>
                        <span className="block">+1 (250) 878-8178</span>
                      </span>
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">
            Consultation Questions, Answered
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {consultationFaqs.map((faq) => (
              <div key={faq.question} className="glass-panel rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Clinics */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center glass-panel rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">Looking for More Clinics?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our clinic directory to find additional treatment locations and practitioner services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/clinics">
                <Button size="lg" className="gold-glow">Explore More Clinics</Button>
              </Link>
              <Link href="/clinics/ixtapa-zihuatanejo">
                <Button size="lg" variant="outline">Available at DOD5Star</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
