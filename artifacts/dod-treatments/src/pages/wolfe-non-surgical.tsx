import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { GeneralTreatmentCta } from '@/components/GeneralTreatmentCta';
import { TreatmentHeroCtas } from '@/components/TreatmentHeroCtas';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const patientTestimonialVideos = ['7_r8mZ5ARrI', 'Qb4FgBQlte0', '4xEpZNQIpmc'];

const certificationTestimonialVideos = ['Vcz11YbC37I', 'dDRNfKkzgtg', 'oYARa0ivUaY'];

const conditions = [
  'Abdominal Pain', 'Ankle Problems', 'Back Pain', 'Bladder Conditions',
  'Bone Spurs', 'Bursitis', 'Disc Problems', 'Displaced Calcium',
  'Fibroids & Cysts', 'Fibromyalgia', 'Frozen Neck', 'Headache & Migraines',
  'Hip Problems', 'Knee Problems', 'Muscle Spasm', 'Neck Pain',
  'Nerve Pain', 'Numbness & Tingling', 'Osteoarthritis', 'Overuse Syndrome',
  'Pregnancy Complications', 'Prostate Conditions', 'Rheumatoid Arthritis', 'Sciatica',
  'Shin Splints', 'Sports Injuries', 'Sprains & Strains', 'Tendinitis', 'And more upon request',
];

export default function WolfeNonSurgical() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Wolfe Non Surgical',
      description: 'A focused bodywork approach addressing scar tissue, inflammation, calcification, and crystallization. Patients have reported greater comfort and freedom of movement.',
      image: 'https://docofdetoxtreatments.com/images/wns-hero.jpg',
      url: 'https://docofdetoxtreatments.com/treatments/wolfe-non-surgical',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Wolfe Non Surgical Bodywork Treatment',
      description: 'Non-invasive bodywork focused on scar tissue, inflammation, and calcification. Some patients report meaningful changes within their first few sessions.',
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
        title="Wolfe Non Surgical | Focused Bodywork"
        description="Wolfe Non Surgical focuses on scar tissue, inflammation, calcification, and crystallization. Patients have reported greater comfort and movement."
        path="/treatments/wolfe-non-surgical"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-16 relative overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/wns-hero.jpg`}
          alt="Wolfe Non Surgical practitioner treating a patient's neck and shoulder"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Bodywork Therapy
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              Wolfe Non Surgical
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/80 mb-8 font-medium">
              A Powerful Approach to Focused Bodywork
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Patients have noticed meaningful changes from their first treatment and say the focused approach to scar tissue, inflammation, calcification, and crystallization feels unlike other bodywork they have tried.
            </p>
            <TreatmentHeroCtas />
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Why Wolfe Non Surgical Works</h2>
            <div className="glass-panel rounded-2xl overflow-hidden md:grid md:grid-cols-2">
              <img
                src={`${import.meta.env.BASE_URL}images/wns-treatment.jpg`}
                alt="Practitioner's hands working along a patient's spine during a Wolfe Non Surgical treatment"
                className="w-full h-56 md:h-full object-cover"
              />
              <p className="text-lg text-foreground/90 leading-relaxed p-8 md:p-12">
                Wolfe Non Surgical focuses on <strong>scar tissue, inflammation, calcification, and crystallization</strong> that may contribute to physical restrictions. We have had patients say they noticed greater comfort and freedom of movement within just a few treatments—and some report a meaningful change after their first session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">Requested Across Joints & Areas of Wellness</h2>
          <div className="max-w-5xl mx-auto mb-8 rounded-2xl overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}images/wns-spine.jpg`}
              alt="Illustration of the spine, knee, shoulder, and ankle highlighting common pain points"
              className="w-full object-cover"
            />
          </div>
          <div className="max-w-5xl mx-auto glass-panel rounded-2xl p-8 md:p-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <GeneralTreatmentCta className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Wolfe Non Surgical</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our clinic directory to find Wolfe Non Surgical services near you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/clinics">
                <Button size="lg" className="gold-glow">Find a Practitioner Near You</Button>
              </Link>
              <Link href="/clinics/ixtapa-zihuatanejo">
                <Button size="lg" variant="outline">Available at DOD5Star</Button>
              </Link>
            </div>
          </div>
        </div>
      </GeneralTreatmentCta>

      {/* Patient Testimonials */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">Patient Testimonials</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {patientTestimonialVideos.map((videoId, index) => (
              <div key={videoId} className="rounded-2xl overflow-hidden aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Wolfe Non Surgical patient testimonial ${index + 1}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://youtube.com/playlist?list=PLGL9YQNm1Tc-rK1v7zk_F0wlIzykuQiRj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              View More
            </a>
          </div>
        </div>
      </section>

      {/* Certification Testimonials */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">Want to Get Trained in Wolfe Non Surgical?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your clients are looking for answers. This is the training that gives you the tools to truly deliver them.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {certificationTestimonialVideos.map((videoId, index) => (
              <div key={videoId} className="rounded-2xl overflow-hidden aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Wolfe Non Surgical certification testimonial ${index + 1}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://www.bhnuniversity.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Become Wolfe Non Surgical Certified
            </a>
            <a
              href="https://youtube.com/playlist?list=PLGL9YQNm1Tc9mEQ1Nk2JZabjphRhxuZDn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full border border-primary/40 text-primary text-sm font-medium hover:bg-primary/10 transition-colors"
            >
              View More
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
