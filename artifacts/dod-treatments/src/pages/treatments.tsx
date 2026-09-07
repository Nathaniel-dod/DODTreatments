import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/button';
import { ArrowRight, Globe, MapPin } from 'lucide-react';

const treatmentProducts = [
  {
    href: '/treatments/wolfe-non-surgical',
    name: 'Wolfe Non Surgical',
    category: 'Bodywork Therapy',
    tagline: 'A Powerful Approach to Focused Bodywork',
    blurb: 'Focused bodywork addressing scar tissue, inflammation, calcification, and crystallization that may contribute to physical restrictions.',
    glyph: '✦',
    image: 'images/wns-hero.jpg',
    imageAlt: "Wolfe Non Surgical practitioner treating a patient's neck and shoulder",
    imagePosition: 'object-[center_35%]',
  },
  {
    href: '/treatments/cellsonic-regeneration',
    name: 'CellSonic Regeneration ESWT',
    category: 'Shock Wave Therapy',
    tagline: 'Cell & Tissue Regeneration',
    blurb: 'Non-invasive shock wave therapy designed to support tissue renewal, comfort, and natural recovery.',
    glyph: '◆',
    image: 'images/cellsonic-ankle-treatment.webp',
    imageAlt: 'CellSonic Regeneration treatment being applied to an ankle',
  },
  {
    href: '/treatments/cardio-medbed',
    name: 'Cardio MedBed EECP',
    category: 'Cardiovascular Therapy',
    tagline: 'Heart & Circulatory Support',
    blurb: 'Enhanced External Counter Pulsation therapy, clinically studied for its role in supporting blood flow and cardiovascular wellness.',
    glyph: '❖',
    image: 'images/cardio-medbed-lifestyle.webp',
    imageAlt: 'Patient receiving Cardio MedBed EECP therapy with a practitioner',
  },
  {
    href: '/treatments/consultations',
    name: 'Perfect Day Consultation',
    category: 'Personalized Guidance',
    tagline: 'Your Roadmap to Total Regeneration',
    blurb: 'One-hour consultations with Dr. Darrell Wolfe or Master Practitioners — emotional, nutritional, Perfect Day, and water fasting.',
    glyph: '✦',
    image: 'images/perfect-day-consultation.jpg',
    imageAlt: 'Woman speaking on the phone during a personal consultation',
  },
  {
    href: '/treatments/dod-core-restore',
    name: 'DOD Core Restore',
    category: 'Core & Pelvic Therapy',
    tagline: 'Pelvic Floor & Deep Core Strengthening',
    blurb: 'Pelvic floor restoration, urinary incontinence, sexual wellness, and deep core strengthening — for both women and men.',
    glyph: '◆',
    image: 'images/dod-core-restore-lifestyle.webp',
    imageAlt: 'Person receiving DOD Core Restore therapy beside the treatment device',
  },
  {
    href: '/treatments/bone-density-scanner',
    name: 'DOD Advanced Bone Density Scanner',
    category: 'Diagnostic Assessment',
    tagline: 'Radiation-Free Bone Density Assessment',
    blurb: 'Track skeletal health and regeneration across every DOD protocol — safely, with no radiation exposure.',
    glyph: '❖',
    image: 'images/bone-density-scanner-lifestyle.webp',
    imageAlt: 'Practitioner performing a DOD Advanced Bone Density Scanner assessment',
  },
  {
    href: '/treatments/infrared-light-healing',
    name: 'RX Infrared Light Healing',
    category: 'Phototherapy',
    tagline: 'Deep Infrared Phototherapy',
    blurb: 'Comfortable broad-spectrum light therapy with seated and full-body device options.',
    collage: [
      {
        src: 'images/rx-infrared-seat.webp',
        alt: 'RX Infrared Light seated device',
        label: 'Seated',
      },
      {
        src: 'images/rx-infrared-stand.webp',
        alt: 'RX Infrared Light stand-mounted full-body device',
        label: 'Full-body',
      },
    ],
  },
  {
    href: '/treatments/vitamin-d-light',
    name: 'Vitamin D Light',
    category: 'Light Therapy',
    tagline: 'SolRx UVB + Optional Quartz Crystal Panels',
    blurb: 'Guided narrowband UVB light sessions with optional quartz crystal panels for a gentler experience.',
    image: 'images/solrx-e-series.webp',
    imageAlt: 'SolRx E-Series narrowband UVB light panel',
  },
  {
    href: '/treatments/bioptron-light',
    name: 'Bioptron Light',
    category: 'Polarized Light Therapy',
    tagline: 'Broad-Spectrum, Non-UV Light',
    blurb: 'A comfortable, non-invasive polarized-light experience designed to complement personal wellness and comfort-focused routines.',
    image: 'images/bioptron-light.webp',
    imageAlt: 'Bioptron polarized light therapy device',
    imagePosition: 'object-contain p-5',
  },
  {
    href: '/treatments/avacen',
    name: 'Avacen',
    category: 'Thermal Wellness Technology',
    tagline: 'Gentle Thermal Microcirculation Support',
    blurb: 'A non-invasive hand-warming session designed to support temporary comfort, relaxation, and general wellness.',
    image: 'images/avacen.webp',
    imageAlt: 'Avacen thermal microcirculation device',
    imagePosition: 'object-contain px-4 pb-3 pt-20',
  },
];

const treatmentGoalGroups = [
  {
    title: 'Pain, Mobility & Scar Tissue',
    description: 'Start with therapies focused on restoring movement and addressing physical restrictions.',
    treatments: [treatmentProducts[0]],
  },
  {
    title: 'Regeneration & Recovery',
    description: 'Explore focused support for tissue renewal, recovery, and whole-body restoration.',
    treatments: [treatmentProducts[1]],
  },
  {
    title: 'Heart & Circulation',
    description: 'Discover cardiovascular support designed to promote healthy circulation.',
    treatments: [treatmentProducts[2]],
  },
  {
    title: 'Core & Pelvic Wellness',
    description: 'Find dedicated support for deep core strength and pelvic wellness.',
    treatments: [treatmentProducts[4]],
  },
  {
    title: 'Assessment & Monitoring',
    description: 'Use clear, non-invasive information to understand and track your health.',
    treatments: [treatmentProducts[5]],
  },
  {
    title: 'Personalized Guidance',
    description: 'Get a tailored roadmap and one-on-one guidance for your next steps.',
    treatments: [treatmentProducts[3]],
  },
];

const lightTreatmentProducts = treatmentProducts.slice(6);

function TreatmentGoalCard({ group }: { group: (typeof treatmentGoalGroups)[number] }) {
  return (
    <section className="glass-panel rounded-3xl p-6 md:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold gold-gradient">{group.title}</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mt-2">{group.description}</p>
      </div>
      <div className={`grid gap-4 ${group.treatments.length > 1 ? 'sm:grid-cols-2' : ''}`}>
        {group.treatments.map((product) => (
          <Link key={product.href} href={product.href}>
            <div className="rounded-2xl overflow-hidden border border-border/60 bg-background/30 hover:border-primary/40 transition-all duration-300 group h-full flex flex-col">
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center relative overflow-hidden">
                {'image' in product ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${product.image}`}
                    alt={product.imageAlt}
                    className={`absolute inset-0 w-full h-full object-cover ${'imagePosition' in product ? product.imagePosition : 'object-top'} group-hover:scale-105 transition-transform duration-500`}
                  />
                ) : 'collage' in product && product.collage ? (
                  <div className="absolute inset-0 grid grid-cols-[0.95fr_1.05fr] gap-px bg-primary/25">
                    <div className="relative overflow-hidden bg-gradient-to-br from-background via-background/90 to-primary/10">
                      <img
                        src={`${import.meta.env.BASE_URL}${product.collage[0].src}`}
                        alt={product.collage[0].alt}
                        className="absolute inset-x-0 bottom-0 mx-auto h-[94%] w-[88%] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute bottom-2 left-2 rounded-full bg-background/85 px-2 py-1 text-[10px] font-semibold text-primary">
                        {product.collage[0].label}
                      </span>
                    </div>
                    <div className="relative overflow-hidden bg-background/70">
                      <img
                        src={`${import.meta.env.BASE_URL}${product.collage[1].src}`}
                        alt={product.collage[1].alt}
                        className="absolute inset-0 h-full w-full object-cover object-[center_42%] transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent" />
                      <span className="absolute bottom-2 right-2 rounded-full bg-background/85 px-2 py-1 text-[10px] font-semibold text-primary">
                        {product.collage[1].label}
                      </span>
                    </div>
                  </div>
                ) : null}
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/85 text-primary text-xs font-medium">
                  {product.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-sm text-foreground/70 mb-3">{product.tagline}</p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{product.blurb}</p>
                <div className="flex items-center justify-end mt-auto">
                  <span className="flex items-center text-primary text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                    View <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Treatments() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Advanced Energy Medicine Treatments',
      description: 'Wolfe Non Surgical bodywork, CellSonic Regeneration ESWT, and Cardio MedBed EECP therapy for regenerative healing.',
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
        title="Treatments | Advanced Energy Medicine Therapies"
        description="Wolfe Non Surgical, CellSonic Regeneration ESWT, and Cardio MedBed EECP. Non-invasive regenerative treatments addressing pain, tissue damage, and cardiovascular health."
        path="/treatments"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              Our Treatments
            </h1>
          </div>
        </div>
      </section>

      {/* Treatment Cards */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">Find Your Starting Point</h2>
            <p className="text-lg text-muted-foreground">
              Explore treatments by the outcome or area of support that matters most to you.
            </p>
          </div>
          <div className="mx-auto max-w-6xl space-y-6 lg:hidden">
            {treatmentGoalGroups.map((group) => (
              <TreatmentGoalCard key={group.title} group={group} />
            ))}
          </div>
          <div className="mx-auto hidden max-w-6xl grid-cols-2 gap-8 lg:grid">
            <div className="space-y-8">
               {[0, 2, 4].map((index) => (
                <TreatmentGoalCard key={treatmentGoalGroups[index].title} group={treatmentGoalGroups[index]} />
              ))}
            </div>
            <div className="space-y-8">
               {[1, 3, 5].map((index) => (
                <TreatmentGoalCard key={treatmentGoalGroups[index].title} group={treatmentGoalGroups[index]} />
              ))}
            </div>
          </div>

           <div className="mx-auto mt-8 max-w-6xl rounded-3xl border border-border/60 bg-card/30 p-6 md:p-8">
             <div className="mb-6 text-center">
               <h2 className="text-2xl font-bold gold-gradient">More Wellness &amp; Energy Medicine Devices</h2>
               <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                 Explore additional light-based and thermal options that support restorative routines and wellness goals.
               </p>
             </div>
             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
               {lightTreatmentProducts.map((product) => (
                 <Link key={product.href} href={product.href}>
                   <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/30 transition-all duration-300 hover:border-primary/40">
                     <div className="relative h-32 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10">
                       {'image' in product ? (
                         <img
                           src={`${import.meta.env.BASE_URL}${product.image}`}
                           alt={product.imageAlt}
                           className={`h-full w-full ${
                             product.name === 'Bioptron Light' || product.name === 'Avacen'
                               ? 'object-contain p-3'
                               : 'object-cover object-top'
                           } transition-transform duration-500 group-hover:scale-105`}
                         />
                       ) : 'collage' in product && product.collage ? (
                         <div className="grid h-full grid-cols-2 gap-px bg-primary/25">
                           {product.collage.map((image) => (
                             <img
                               key={image.src}
                               src={`${import.meta.env.BASE_URL}${image.src}`}
                               alt={image.alt}
                               className="h-full w-full bg-background/70 object-contain p-1"
                             />
                           ))}
                         </div>
                       ) : null}
                     </div>
                     <div className="flex flex-1 flex-col p-4">
                       <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary">{product.category}</p>
                       <h3 className="mt-2 font-bold transition-colors group-hover:text-primary">{product.name}</h3>
                       <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{product.tagline}</p>
                       <ArrowRight className="mt-4 h-4 w-4 self-end text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
                     </div>
                   </article>
                 </Link>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* Clinics & Practitioner Finder */}
      <section className="pb-20 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-gradient">Where to Experience These Treatments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit one of our destination clinics or find a certified practitioner near you.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl md:grid-cols-2 gap-6 lg:gap-8">
            <Link href="/clinics/ixtapa-zihuatanejo">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Ixtapa-Zihuatanejo, México</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">5 Star Healing & Training Retreat</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  A luxury oceanside retreat hosted by Dr. Sage Wolfe and Jesse Malcolm — immersive treatment and training for total-body transformation.
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                  Visit the Retreat <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/clinics">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Worldwide</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Clinics & Practitioners</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Explore our clinic directory to find treatment locations and practitioner services near you.
                </p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                  Find a Practitioner <ArrowRight className="w-4 h-4" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Healing Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our clinic directory to find treatment options and practitioner services near you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/clinics">
                <Button size="lg" className="gold-glow">Find a Practitioner</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
