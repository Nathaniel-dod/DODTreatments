import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Dod5StarNav } from '@/components/Dod5StarNav';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  Moon,
  ShieldCheck,
  Sparkles,
  Sunrise,
  Sun,
  Sunset,
} from 'lucide-react';

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

const protocolBlocks = [
  {
    period: 'Morning',
    timing: 'Begin with intention',
    title: 'Arrive & align',
    items: [
      { label: 'Arrival check-in', description: 'Orient the day with your practitioner and your personal goals.' },
      { label: 'Breath & gentle movement', description: 'Begin with comfortable practices that help you settle into the day.' },
      { label: 'Internal support discussion', description: 'Talk through nutrition, hydration, and internal support for your plan.' },
    ],
    icon: Sunrise,
  },
  {
    period: 'Midday',
    timing: 'Personalized treatment window',
    title: 'Explore & receive',
    items: [
      { label: 'Focused treatment', description: 'Make space for the session selected around your goals and response.' },
      { label: 'Light & energy therapies', description: 'Explore available light-based and restorative modalities with your team.' },
      { label: 'Hydration & nourishment', description: 'Pause for hydration and personalized nourishment throughout the day.' },
    ],
    icon: Sun,
  },
  {
    period: 'Afternoon',
    timing: 'Restore & respond',
    title: 'Make space for response',
    items: [
      { label: 'Movement & restoration', description: 'Support gentle activity, recovery, and comfort at your own pace.' },
      { label: 'Practitioner check-in', description: 'Review how you are responding and refine the plan when needed.' },
      { label: 'Quiet recovery', description: 'Leave room for rest, reflection, and integration between sessions.' },
    ],
    icon: Sunset,
  },
  {
    period: 'Evening',
    timing: 'Integrate & rest',
    title: 'Close the day gently',
    items: [
      { label: 'Wind-down practices', description: 'Transition into a slower evening rhythm that feels right for you.' },
      { label: 'Nutrition conversation', description: 'Reflect on the day’s nourishment and any helpful next steps.' },
      { label: 'Rest & reflection', description: 'Close the day gently and reset for tomorrow’s evolving plan.' },
    ],
    icon: Moon,
  },
];

const personalizationFactors = ['Your personality', 'Your condition', 'Your goals', 'Your daily response'];

const nutraceuticalBlocks = [
  {
    period: 'Morning',
    timing: 'Establish your foundation',
    title: 'Personalized internal support',
    items: [
      { label: 'Hydration & nourishment', description: 'Begin with supportive hydration and nourishment suited to your goals.' },
      { label: 'Personalized review', description: 'Discuss your history, preferences, and what your body needs from the day.' },
      { label: 'Foundational support', description: 'Explore appropriate internal support with your practitioner after arrival.' },
    ],
    icon: Sunrise,
  },
  {
    period: 'Midday',
    timing: 'Support the treatment window',
    title: 'Adjust around your response',
    items: [
      { label: 'Treatment-aware support', description: 'Consider nourishment and internal support alongside the day’s selected sessions.' },
      { label: 'Energy & comfort check', description: 'Notice how you are feeling and share your response with the team.' },
      { label: 'Pause & replenish', description: 'Make room for fluids, nourishment, and a comfortable pace between sessions.' },
    ],
    icon: Sun,
  },
  {
    period: 'Afternoon',
    timing: 'Check and recalibrate',
    title: 'Make space for response',
    items: [
      { label: 'Practitioner check-in', description: 'Review what is working for you and what may need to change.' },
      { label: 'Refined support', description: 'Adjust the broader plan around your response, comfort, and daily goals.' },
      { label: 'Recovery nourishment', description: 'Support your afternoon rhythm with personalized nourishment and rest.' },
    ],
    icon: Sunset,
  },
  {
    period: 'Evening',
    timing: 'Reflect and prepare',
    title: 'Close the day thoughtfully',
    items: [
      { label: 'Daily reflection', description: 'Share observations about your energy, comfort, and overall response.' },
      { label: 'Nourishment conversation', description: 'Reflect on the day and discuss helpful next steps with your team.' },
      { label: 'Tomorrow’s direction', description: 'Use the day’s learnings to inform an evolving plan for tomorrow.' },
    ],
    icon: Moon,
  },
];

function ProtocolTimeline({
  blocks,
  testIdPrefix,
}: {
  blocks: typeof protocolBlocks;
  testIdPrefix: string;
}) {
  return (
    <div className="relative space-y-4 before:absolute before:bottom-8 before:left-[1.25rem] before:top-8 before:w-px before:bg-primary/25 md:before:left-[1.65rem]">
      {blocks.map((block) => (
        <article
          key={block.period}
          data-testid={`card-${testIdPrefix}-${block.period.toLowerCase()}`}
          className="glass-panel relative grid gap-5 rounded-2xl p-5 transition-colors hover:border-primary/30 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-6 md:p-6"
        >
          <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-card text-primary shadow-[0_0_0_6px_hsl(var(--card))]">
            <block.icon className="h-5 w-5" aria-hidden="true" />
          </div>

          <div>
            <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h4 className="text-xl font-bold">{block.period}</h4>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{block.timing}</span>
            </div>
            <p className="mb-3 font-medium">{block.title}</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {block.items.map((item) => (
                <div key={item.label} className="rounded-xl border border-primary/15 bg-primary/5 p-3">
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                    <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                    {item.label}
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

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
          <div className="max-w-4xl mx-auto mb-16 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card/85 to-accent/10 p-8 md:p-10 text-center shadow-[0_18px_55px_rgba(0,0,0,0.2)]">
            <span className="inline-flex rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              DOD5Star Exclusive
            </span>
            <h2 className="mt-5 text-2xl font-bold md:text-3xl gold-gradient">Receive a Complimentary Core Restore Treatment</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Book a Cardio MedBed treatment during your retreat and receive a DOD Core Restore session at no additional cost.
            </p>
          </div>

          {/* Sanitized protocol template */}
          <Dialog>
            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-card/70 to-accent/10 p-6 text-center shadow-[0_18px_55px_rgba(0,0,0,0.2)] md:flex-row md:p-8 md:text-left">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-card/70 text-primary">
                    <CalendarDays className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Illustrative guest protocol</p>
                    <h2 className="mt-2 text-2xl font-bold gold-gradient">A Day Shaped Around You</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      See the shape of a personalized retreat day—without a fixed itinerary or prescription.
                    </p>
                  </div>
                </div>
                <DialogTrigger asChild>
                  <Button size="lg" className="gold-glow flex-shrink-0" data-testid="button-view-sample-protocol">
                    View Sample Protocol
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </DialogTrigger>
              </div>
            </div>

            <DialogContent className="w-[calc(100%-2rem)] max-w-5xl border-primary/30 bg-card p-0">
              <div className="overflow-hidden rounded-[inherit]">
                <DialogHeader className="border-b border-primary/20 bg-gradient-to-r from-primary/15 via-card/70 to-accent/10 p-6 text-center sm:p-10">
                  <div className="mx-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    Illustrative guest protocol
                  </div>
                  <DialogTitle className="mt-5 text-3xl font-bold md:text-4xl gold-gradient">A Day Shaped Around You</DialogTitle>
                  <DialogDescription className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    This sample framework shows the shape of a guest plan—not a fixed itinerary. Your personalized protocol is built after arrival and adjusted to your personality, condition, goals, and daily response.
                  </DialogDescription>
                </DialogHeader>

                <div className="p-5 sm:p-8 md:p-10">
                  <Tabs defaultValue="day-shape" className="w-full">
                    <div className="mb-8 flex justify-center">
                      <TabsList className="grid h-auto w-full max-w-md grid-cols-2 bg-background/40 p-1">
                        <TabsTrigger value="day-shape" className="py-2.5">Day Shape</TabsTrigger>
                        <TabsTrigger value="nutraceutical-support" className="py-2.5">Nutraceutical Support</TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent value="day-shape" className="mt-0">
                      <div className="mb-7 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Sample day at a glance</p>
                          <h3 className="mt-2 text-2xl font-bold">A flexible rhythm, never a prescription</h3>
                        </div>
                        <div className="hidden rounded-full border border-border/70 px-3 py-1.5 text-xs font-medium text-muted-foreground sm:inline-flex sm:items-center sm:gap-2">
                          <Clock3 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                          Timing varies by guest
                        </div>
                      </div>
                      <ProtocolTimeline blocks={protocolBlocks} testIdPrefix="protocol" />
                    </TabsContent>

                    <TabsContent value="nutraceutical-support" className="mt-0">
                      <div className="mb-7 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Personalized internal support</p>
                          <h3 className="mt-2 text-2xl font-bold">A support rhythm that evolves with you</h3>
                        </div>
                        <div className="hidden rounded-full border border-border/70 px-3 py-1.5 text-xs font-medium text-muted-foreground sm:inline-flex sm:items-center sm:gap-2">
                          <Clock3 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                          Reviewed daily
                        </div>
                      </div>
                      <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                        Nutraceutical and nutritional support is discussed after arrival, guided by your goals, preferences, history, and daily response—not selected from a fixed public formula.
                      </p>
                      <ProtocolTimeline blocks={nutraceuticalBlocks} testIdPrefix="nutraceutical" />
                    </TabsContent>
                  </Tabs>

                  <div className="mt-8 grid gap-6 rounded-2xl border border-border/60 bg-background/20 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
                    <div className="flex gap-4">
                      <ShieldCheck className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" />
                      <div>
                        <h3 className="mb-2 font-bold">The framework changes with you</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          These are broad planning blocks for orientation only—not a guaranteed itinerary, treatment prescription, or medical advice. Your DOD5Star team builds the appropriate plan with you after arrival and refines it as your stay unfolds.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 md:max-w-[19rem] md:justify-end">
                      {personalizationFactors.map((factor) => (
                        <span key={factor} className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80">
                          <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                          {factor}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 p-6 text-center sm:flex-row sm:text-left">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Make it personal</p>
                      <p className="mt-2 text-lg font-semibold">Ready to talk through your own retreat rhythm?</p>
                    </div>
                    <Button asChild size="lg" className="gold-glow" data-testid="button-discuss-protocol">
                      <Link href="/clinics/ixtapa-zihuatanejo/inquire" data-testid="link-discuss-protocol">
                        Discuss Your Protocol
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

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
