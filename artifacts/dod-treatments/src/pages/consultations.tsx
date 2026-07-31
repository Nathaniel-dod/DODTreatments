import { Seo } from '@/components/Seo';
import { InquiryForm } from '@/components/InquiryForm';
import { Phone, ExternalLink, Heart, Sun, Apple, Droplets } from 'lucide-react';
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
      'Doc of Detox Master Practitioners Sandra and Rita each offer four consultation types: Emotional Consultation, Perfect Day Consultation, Nutritional Consultation, and Water Fasting Consultation. Each consultation delivers a personalized roadmap for your health goals.',
  },
  {
    question: 'How do I book a Doc of Detox consultation?',
    answer:
      'To book a Doc of Detox consultation, call Cinthia toll-free at 1-855-900-4544 ext. 1 or direct/WhatsApp at 1-469-861-9872. You can also book practitioner consultations online through the booking links on this page, or submit the inquiry form for a personal follow-up.',
  },
];

const sandraOptions = [
  { label: 'Emotional Consultation', href: 'https://lacremeluxe.janeapp.com/#/staff_member/3/treatment/17', icon: Heart },
  { label: 'Perfect Day Consultation', href: 'https://lacremeluxe.janeapp.com/#/staff_member/3/treatment/18', icon: Sun },
  { label: 'Nutritional Consultation', href: 'https://lacremeluxe.janeapp.com/#/staff_member/3/treatment/19', icon: Apple },
  { label: 'Water Fasting Consultation', href: 'https://lacremeluxe.janeapp.com/#/staff_member/3/treatment/20', icon: Droplets },
];

const ritaOptions = [
  { label: 'Emotional Consultation', href: 'https://booking.lacremeluxe.com/webstoreNew/services', icon: Heart },
  { label: 'Perfect Day Consultation', href: 'https://booking.lacremeluxe.com/webstoreNew/services', icon: Sun },
  { label: 'Nutritional Consultation', href: 'https://booking.lacremeluxe.com/webstoreNew/services', icon: Apple },
  { label: 'Water Fasting Consultation', href: 'https://booking.lacremeluxe.com/webstoreNew/services', icon: Droplets },
];

export default function Consultations() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Personalized Consultation with Dr. Darrell Wolfe',
      description:
        '1-hour personalized health consultation with Dr. Darrell Wolfe including lifetime support. Step-by-step strategy covering nutritional, emotional, and physical health.',
      image: 'https://docofdetoxtreatments.com/images/og-default.jpg',
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
      name: 'Health Consultations - Doc of Detox',
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
        title="Health Consultations | Doc of Detox"
        description="Book a personalized $450 consultation with Dr. Darrell Wolfe including lifetime support, or choose Emotional, Perfect Day, Nutritional, or Water Fasting consultations."
        path="/treatments/consultations"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              Health Consultations
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              A personalized consultation gives you a step-by-step strategy for your health — nutritional, emotional, and physical — from Dr. Darrell Wolfe or a certified New World Master Practitioner.
            </p>
            <p className="text-2xl font-bold gold-gradient">3, 2, 1, We Got This!</p>
          </div>
        </div>
      </section>

      {/* Dr. Wolfe consultation */}
      <section className="py-20 md:py-32 bg-card/30">
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
                  <h3 className="text-lg font-bold">Call Cinthia to Book</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Toll-Free: <a className="text-primary font-medium" href="tel:1-855-900-4544">1-855-900-4544</a> ext. 1
                </p>
                <p className="text-sm text-muted-foreground">
                  Direct/WhatsApp: <a className="text-primary font-medium" href="tel:1-469-861-9872">1-469-861-9872</a>
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
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gold-gradient">
            Book a Consultation with a Qualified New World Master Practitioner
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Choose from Emotional, Perfect Day, Nutritional, or Water Fasting consultations with Master Practitioners Sandra and Rita.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-panel rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">Consultations with Sandra</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                "Our bodies not only can heal, they were designed to stay healed when we master our perfect day. When we take personal action to become our own practitioner, true healing is not only obtainable but permanent. Let me be your Life Coach on your incredible journey to wellness."
              </p>
              <div className="space-y-3">
                {sandraOptions.map((opt) => (
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
              <h3 className="text-2xl font-bold mb-4">Consultations with Rita</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                "Everyone needs a personalized roadmap, along with repetition, focus and a coach to achieve optimal success. Let me guide you to experience the healing power of the Perfect Day Lifestyle and the enormous potential of Self Care & Self Love. 3-2-1 We got this!"
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Click 'La Crème Health and Healing' then 'Consultations' to book:
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-card/30">
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

      {/* Inquiry Form */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Consultation</h2>
            <p className="text-lg text-muted-foreground">
              Prefer to write? Send your questions and we'll reach out personally within 24 hours.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <InquiryForm defaultType="consultation" defaultInterest="Consultation" />
          </div>
        </div>
      </section>
    </>
  );
}
