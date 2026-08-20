import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Dod5StarNav } from '@/components/Dod5StarNav';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const experiences = [
  {
    glyph: '✦',
    title: 'The Healing Experience',
    description: 'Rejuvenating therapies and personalized healing protocols in a transformative journey of renewal.',
  },
  {
    glyph: '◆',
    title: 'The Treatment Experience',
    description: 'Revolutionary Wolfe Non-Surgical treatments and advanced energy medicine therapies, daily.',
  },
  {
    glyph: '❖',
    title: 'The Training Experience',
    description: 'Learn revolutionary healing techniques directly from the masters while you restore your own health.',
  },
];

const therapies = [
  { name: 'Wolfe Non-Surgical', href: '/treatments/wolfe-non-surgical', note: "The World's Most Powerful Bodywork" },
  { name: 'CellSonic Regeneration ESWT', href: '/treatments/cellsonic-regeneration', note: 'Cell & tissue regeneration' },
  { name: 'Cardio MedBed EECP', href: '/treatments/cardio-medbed', note: 'Heart & circulatory regeneration' },
  { name: 'Health Consultations', href: '/treatments/consultations', note: 'Your personalized roadmap' },
  { name: 'DOD Core Restore', href: '/treatments/dod-core-restore', note: 'Pelvic floor, incontinence, sexual wellness & deep core — for women and men' },
  { name: 'DOD Advanced Bone Density Scanner', href: '/treatments/bone-density-scanner', note: 'Radiation-free skeletal health tracking' },
  { name: 'Infrared Light Healing', href: '/treatments/infrared-light-healing', note: 'Deep infrared phototherapy' },
  { name: 'Vitamin D Light', href: '/treatments/vitamin-d-light', note: 'Naturally increase vitamin D' },
];

export default function Dod5StarTreatments() {
  return (
    <>
      <Seo
        title="Treatments at the Retreat | DOD5Star Ixtapa-Zihuatanejo"
        description="Daily Wolfe Non-Surgical bodywork, CellSonic ESWT, Cardio MedBed EECP, and personalized protocols at the DOD5Star retreat in Ixtapa-Zihuatanejo, México."
        path="/clinics/ixtapa-zihuatanejo/treatments"
      />
      <Dod5StarNav />

      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 gold-gradient gold-glow">Treatments at the Retreat</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your days are built around intensive, personalized treatment — delivered by host Master Practitioners Dr. Sage Wolfe and Jesse Malcolm.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {experiences.map((e) => (
              <div key={e.title} className="glass-panel rounded-2xl p-8 text-center">
                <div className="text-4xl gold-gradient mb-4">{e.glyph}</div>
                <h2 className="text-xl font-bold mb-3">{e.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-16 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card/85 to-accent/10 p-8 md:p-10 text-center shadow-[0_18px_55px_rgba(0,0,0,0.2)]">
            <span className="inline-flex rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              DOD5Star Exclusive
            </span>
            <h2 className="mt-5 text-2xl font-bold md:text-3xl gold-gradient">Receive a Complimentary Core Restore Treatment</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Book a Cardio MedBed treatment during your retreat and receive a DOD Core Restore session at no additional cost.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Therapies Available On-Site</h2>
            <div className="space-y-3">
              {therapies.map((t) => (
                <a
                  key={t.href}
                  href={`${import.meta.env.BASE_URL}${t.href.replace(/^\//, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="glass-panel rounded-xl px-6 py-4 flex items-center justify-between hover:border-primary/30 transition-all group">
                    <div>
                      <div className="font-bold group-hover:text-primary transition-colors">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.note}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary shrink-0" />
                  </div>
                </a>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">
              A day-by-day treatment schedule for retreat guests is coming soon.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/clinics/ixtapa-zihuatanejo/inquire">
            <Button size="lg" className="gold-glow">Plan Your Stay</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
