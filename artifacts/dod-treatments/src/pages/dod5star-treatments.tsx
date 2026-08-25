import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Dod5StarNav } from '@/components/Dod5StarNav';
import { Button } from '@/components/ui/button';
import { Activity, ArrowRight, CalendarDays, ClipboardList, Leaf, ShieldCheck, Sparkles } from 'lucide-react';

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

const externalTherapyExamples = [
  {
    icon: Activity,
    title: 'Movement & restoration',
    description: 'Time for breathing practices, gentle movement, the vibration plate, and restorative use of the salt-water pool.',
  },
  {
    icon: Sparkles,
    title: 'Light & energy therapies',
    description: 'Depending on your plan, this may include Bioptron, Avacen, infrared light, Vitamin D Light, or other on-site wellness devices.',
  },
  {
    icon: ClipboardList,
    title: 'Focused treatment sessions',
    description: 'Your practitioner may coordinate Wolfe Non-Surgical, CellSonic, Cardio MedBed, or other therapies around your goals and response.',
  },
];

const internalSupportExamples = [
  'A daily rhythm that fits your energy, preferences, and time at the retreat.',
  'Personalized nutrition, hydration, and internal-support conversations with your practitioner.',
  'Regular check-ins so the plan can be adjusted as your needs change during the stay.',
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

          {/* Personalized protocol examples */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="rounded-3xl border border-primary/30 bg-card/60 p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center mb-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  <CalendarDays className="w-4 h-4" aria-hidden="true" />
                  A sample retreat framework
                </div>
                <h2 className="mt-5 text-3xl font-bold md:text-4xl gold-gradient">Your Protocol Is Built Around You</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  The examples below show the kinds of support a guest may explore at DOD5Star. Your personalized plan is created when you arrive and refined around your personality, condition, goals, and daily experience.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <article className="glass-panel rounded-2xl p-7 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="rounded-xl bg-primary/10 p-3">
                      <Activity className="w-7 h-7 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-2">Example only</p>
                      <h3 className="text-2xl font-bold">Internal & External Therapies</h3>
                    </div>
                  </div>
                  <div className="space-y-5">
                    {externalTherapyExamples.map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                        <div>
                          <h4 className="font-bold mb-1">{item.title}</h4>
                          <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="glass-panel rounded-2xl p-7 md:p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="rounded-xl bg-primary/10 p-3">
                      <Leaf className="w-7 h-7 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-2">Example only</p>
                      <h3 className="text-2xl font-bold">Personalized Internal Support</h3>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    {internalSupportExamples.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 rounded-xl border border-primary/20 bg-primary/5 p-5">
                    <h4 className="font-bold mb-2">Nutrition & diet guidance</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      A separate nutrition resource will provide more detail about the broader Perfect Day approach. We will link to that information here when the resource is ready.
                    </p>
                    <span className="mt-4 inline-flex rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      More information coming soon
                    </span>
                  </div>
                </article>
              </div>

              <div className="mt-8 flex gap-4 rounded-2xl border border-border/60 bg-background/20 p-5 md:p-6">
                <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  These are examples for orientation, not a guaranteed itinerary or medical, nutrition, or treatment prescription. Your DOD5Star team will build the appropriate protocol with you after you arrive and will adjust it as needed.
                </p>
              </div>
            </div>
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
              Your day-by-day treatment schedule is personalized with your team after arrival.
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
