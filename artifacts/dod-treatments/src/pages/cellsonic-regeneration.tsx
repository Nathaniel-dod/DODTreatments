import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  { title: 'Pain Relief', desc: 'Reduce inflammation and accelerate natural healing.' },
  { title: 'Scar Tissue Repair', desc: 'Support regeneration for healthier skin and muscles.' },
  { title: 'Joint & Organ Rejuvenation', desc: 'Reduce calcification and improve mobility.' },
  { title: 'Unlock Your Potential', desc: 'Enhance strength, flexibility, and motion.' },
  { title: 'Supercharge Your System', desc: 'Boost circulation, lymphatic flow, and cellular function.' },
  { title: 'Restore Balance', desc: 'Optimize body harmony and long-term wellness.' },
  { title: 'Accelerated Healing', desc: 'Activate self-repair for faster recovery.' },
  { title: 'Cellular Revolution', desc: 'Reduce inflammation and restore vitality.' },
  { title: 'Cellular Harmony', desc: 'Optimize mitochondrial efficiency.' },
  { title: 'Energize from Within', desc: 'Increase natural energy production.' },
  { title: 'Mitochondrial Restoration', desc: 'Repair and enhance mitochondrial function for sustained energy.' },
  { title: 'Cellular Recharge', desc: 'Replenish and optimize cellular energy for improved resilience and longevity.' },
];

const treatmentAreas = [
  { title: 'Joints & Mobility', image: 'images/cellsonic-joints.png' },
  { title: 'Pain Relief', image: 'images/cellsonic-pain-relief.png' },
  { title: 'Wounds', image: 'images/cellsonic-wounds.png' },
  { title: 'Bones', image: 'images/cellsonic-bones.png' },
  { title: 'Jaw, Mouth, & Dental', image: 'images/cellsonic-jaw.png' },
  { title: 'Tissues', image: 'images/cellsonic-tissues.png' },
  { title: 'Tendons & Ligaments', image: 'images/cellsonic-tendons.png' },
  { title: 'Erectile Dysfunction', image: 'images/cellsonic-erectile-dysfunction.png' },
];

const mechanisms = [
  { title: 'Better Blood Flow, More Oxygen, ED Treatment', icon: '◈' },
  { title: 'Collagen Stimulation & Cellulite Reduction', icon: '◈' },
  { title: 'Breaks Down Calcium Deposits', icon: '◈' },
  { title: 'Activates Stem Cell Growth', icon: '◈' },
  { title: 'Reduces Cellular Inflammation', icon: '◈' },
];

export default function CellSonicRegeneration() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'CellSonic Regeneration ESWT',
      description: 'Extracorporeal Shock Wave Therapy for cell and tissue regeneration. Non-invasive treatment for pain relief, wound healing, and cellular repair.',
      image: 'https://docofdetoxtreatments.com/images/hero-treatments.jpg',
      url: 'https://docofdetoxtreatments.com/treatments/cellsonic-regeneration',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'CellSonic Regeneration ESWT Treatment',
      description: 'Shock wave therapy promoting tissue regeneration, pain relief, and accelerated healing through non-invasive cellular stimulation.',
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
        title="CellSonic Regeneration ESWT | Shock Wave Therapy"
        description="CellSonic Regeneration ESWT uses extracorporeal shock wave therapy for tissue regeneration, pain relief, and accelerated healing across many conditions."
        path="/treatments/cellsonic-regeneration"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-[3fr_2fr] gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Shock Wave Therapy
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
                CellSonic Regeneration ESWT
              </h1>
              <p className="text-2xl md:text-3xl text-foreground/80 mb-8 font-medium">
                Extracorporeal Shock Wave Therapy for Cell & Tissue Regeneration
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A healthy body generates 0.04 volts per cell, and with 50 trillion cells, your body battery holds an incredible 2 trillion volts of energy. Extracorporeal Shock Wave Therapy harnesses this power.
              </p>
            </div>
            <img
              src={`${import.meta.env.BASE_URL}images/cellsonic-unit.png`}
              alt="CellSonic Regeneration shock wave therapy unit"
              className="w-full max-w-sm mx-auto md:max-w-none max-h-[32rem] object-contain"
            />
          </div>
        </div>
      </section>

      {/* How It Can Help */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">How CellSonic Regeneration Can Help</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-panel rounded-xl p-6">
                <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Areas */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">CellSonic Regeneration Treatments</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {treatmentAreas.map((area, index) => (
              <div key={index} className="glass-panel rounded-xl p-6 text-center">
                <img
                  src={`${import.meta.env.BASE_URL}${area.image}`}
                  alt={`CellSonic treatment for ${area.title}`}
                  className="w-28 h-28 mx-auto rounded-full object-contain mb-4"
                  loading="lazy"
                />
                <h3 className="font-bold text-sm">{area.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gold-gradient">SWT Shockwave Therapy for Regeneration & Pain Relief</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Extracorporeal Shock Wave Therapy promotes tissue regeneration, pain relief, and accelerated healing. As a non-invasive therapy, it is widely used in orthopedics, sports medicine, urology, and rehabilitation, helping restore your body's natural balance and vitality.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {mechanisms.map((mech, index) => (
              <div key={index} className="glass-panel rounded-xl p-6 text-center">
                <div className="text-4xl gold-gradient mb-4">{mech.icon}</div>
                <p className="text-sm font-medium leading-snug">{mech.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience CellSonic Regeneration</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find a certified CellSonic practitioner near you or book a consultation to learn how ESWT can support your healing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/practitioners">
                <Button size="lg" className="gold-glow">Find a CellSonic Practitioner</Button>
              </Link>
              <Link href="/treatments/consultations">
                <Button size="lg" variant="outline">Book Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
