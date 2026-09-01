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
  Activity,
  ArrowRight,
  CalendarDays,
  Check,
  CircleDot,
  Clock3,
  Moon,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Sunrise,
  Sun,
  Sunset,
  Utensils,
} from 'lucide-react';

const therapies = [
  { name: 'Wolfe Non-Surgical', href: '/treatments/wolfe-non-surgical', note: 'A powerful approach to focused bodywork' },
  { name: 'CellSonic Regeneration ESWT', href: '/treatments/cellsonic-regeneration', note: 'Cell & tissue regeneration' },
  { name: 'Cardio MedBed EECP', href: '/treatments/cardio-medbed', note: 'Heart & circulatory regeneration' },
  { name: 'Health Consultations', href: '/treatments/consultations', note: 'Your personalized roadmap' },
  { name: 'DOD Core Restore', href: '/treatments/dod-core-restore', note: 'Pelvic floor, incontinence, sexual wellness & deep core — for women and men' },
  { name: 'DOD Advanced Bone Density Scanner', href: '/treatments/bone-density-scanner', note: 'Radiation-free skeletal health tracking' },
];

const includedWellnessDevices = [
  {
    icon: Sun,
    name: 'Bioptron Light',
    description: 'Full-spectrum light technology with a fullerene lens, available at the Residence.',
    href: '/treatments/bioptron-light',
  },
  {
    icon: CircleDot,
    name: 'Avacen',
    description: 'A microcirculation-support device available for resident use.',
    href: '/treatments/avacen',
  },
  {
    icon: Sun,
    name: 'Vitamin D Crystal Panel',
    description: 'Vitamin D light with a crystal panel, included as part of your stay.',
    href: '/treatments/vitamin-d-light',
  },
  {
    icon: Sunrise,
    name: 'RX Infrared Light Healing',
    description: 'RX infrared light technology available for residents to use at the Residence.',
    href: '/treatments/infrared-light-healing',
  },
  {
    icon: Activity,
    name: 'Vibration Plate',
    description: 'A movement and recovery device available for resident use throughout your stay.',
  },
  {
    icon: RadioTower,
    name: 'Sentient Element PEMF',
    description: 'PEMF technology with an extensive range of frequencies available during your stay.',
  },
];

const protocolBlocks = [
  {
    period: 'Morning',
    timing: 'Assess & prepare',
    title: 'Build the right treatment mix',
    items: [
      { label: 'Practitioner assessment', description: 'Review your goals, current condition, and response to shape the day’s therapy mix.' },
      { label: 'Wolfe Non-Surgical bodywork', description: 'Begin with focused bodywork selected around your comfort and practitioner plan.' },
      { label: 'Movement & restoration', description: 'Use breath, mobility, and recovery practices to prepare for and integrate sessions.' },
    ],
    icon: Sunrise,
  },
  {
    period: 'Midday',
    timing: 'Focused external therapies',
    title: 'Receive the sessions selected for you',
    items: [
      { label: 'CellSonic Regeneration ESWT', description: 'Explore a focused CellSonic ESWT session when selected by your team.' },
      { label: 'Cardio MedBed EECP', description: 'Make space for Cardio MedBed EECP when it fits your goals and daily plan.' },
      { label: 'DOD Core Restore', description: 'Include a Core Restore session when selected by your practitioners.' },
    ],
    icon: Sun,
  },
  {
    period: 'Afternoon',
    timing: 'Light, energy & recovery',
    title: 'Support your response between sessions',
    items: [
      { label: 'RX Infrared Light Healing', description: 'Consider light-based support as part of the broader therapy experience.' },
      { label: 'Vitamin D Light', description: 'Explore Vitamin D Light when appropriate for your personalized plan.' },
      { label: 'Recovery & integration', description: 'Leave room for movement, restoration, and comfort at your own pace.' },
    ],
    icon: Sunset,
  },
  {
    period: 'Evening',
    timing: 'Review & integrate',
    title: 'Let the next step respond to you',
    items: [
      { label: 'Practitioner check-in', description: 'Review how you responded to the day’s therapies and what you noticed.' },
      { label: 'Quiet recovery', description: 'Allow time for rest and integration between treatment experiences.' },
      { label: 'Next-session planning', description: 'Use the day’s response to inform an evolving plan for tomorrow.' },
    ],
    icon: Moon,
  },
];

const personalizationFactors = ['Your personality', 'Your condition', 'Your goals', 'Your daily response'];

const nutraceuticalStages = [
  {
    number: '01',
    title: 'Before you arrive',
    label: 'Set the starting protocol',
    description: 'A practitioner discusses your goals, history, preferences, and expectations to establish a personalized starting point before your retreat begins.',
  },
  {
    number: '02',
    title: 'During your stay',
    label: 'Review and refine',
    description: 'Your practitioner reviews how you are responding and can refine the protocol around your experience, comfort, and evolving goals.',
  },
  {
    number: '03',
    title: 'At the end of your stay',
    label: 'Adjust for what comes next',
    description: 'Depending on your progress and the conversations throughout your stay, your practitioner may recommend an updated direction for your next steps.',
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

      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sanitized therapy framework */}
          <Dialog>
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-card/70 to-accent/10 p-6 text-center shadow-[0_18px_55px_rgba(0,0,0,0.2)] md:flex-row md:p-8 md:text-left">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-card/70 text-primary">
                    <CalendarDays className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Internal / External Therapies</p>
                    <h2 className="mt-2 text-2xl font-bold gold-gradient">Personalized Therapies, Shaped Around You</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      Explore the external therapies and internal support that may be considered throughout your retreat.
                    </p>
                  </div>
                </div>
                <DialogTrigger asChild>
                  <Button size="lg" className="gold-glow flex-shrink-0" data-testid="button-view-sample-protocol">
                    Explore What Your Day Might Look Like
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
                    Internal / External Therapies
                  </div>
                  <DialogTitle className="mt-5 text-3xl font-bold md:text-4xl gold-gradient">Internal / External Therapies</DialogTitle>
                  <DialogDescription className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                     Explore the types of external therapies and internal support that may be considered during your retreat. Your plan is built before your arrival, then adjusted throughout your stay to your goals, condition, and daily response.
                  </DialogDescription>
                </DialogHeader>

                <div className="p-5 sm:p-8 md:p-10">
                   <Tabs defaultValue="therapies" className="w-full">
                     <div className="mb-8 flex justify-center">
                       <TabsList className="grid h-auto w-full max-w-3xl grid-cols-3 gap-1 rounded-xl border border-primary/20 bg-background/60 p-1.5 shadow-inner">
                         <TabsTrigger
                           value="therapies"
                           className="min-h-12 whitespace-normal rounded-lg px-2.5 py-3 text-center text-sm font-semibold leading-tight sm:px-4 sm:text-base data-[state=active]:bg-primary/15 data-[state=active]:text-primary data-[state=active]:shadow-md"
                         >
                           Internal / External Therapies
                         </TabsTrigger>
                         <TabsTrigger
                           value="nutraceutical-support"
                           className="min-h-12 whitespace-normal rounded-lg px-2.5 py-3 text-center text-sm font-semibold leading-tight sm:px-4 sm:text-base data-[state=active]:bg-primary/15 data-[state=active]:text-primary data-[state=active]:shadow-md"
                         >
                           Nutraceutical Support
                         </TabsTrigger>
                         <TabsTrigger
                           value="diet-nutrition"
                           className="min-h-12 whitespace-normal rounded-lg px-2.5 py-3 text-center text-sm font-semibold leading-tight sm:px-4 sm:text-base data-[state=active]:bg-primary/15 data-[state=active]:text-primary data-[state=active]:shadow-md"
                         >
                           Diet &amp; Nutrition
                         </TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent value="therapies" className="mt-0">
                      <div className="mb-7 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Therapies at a glance</p>
                          <h3 className="mt-2 text-2xl font-bold">A focused rhythm, never a prescription</h3>
                        </div>
                        <div className="hidden rounded-full border border-border/70 px-3 py-1.5 text-xs font-medium text-muted-foreground sm:inline-flex sm:items-center sm:gap-2">
                          <Clock3 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                          Timing varies by guest
                        </div>
                      </div>
                      <ProtocolTimeline blocks={protocolBlocks} testIdPrefix="therapy" />
                    </TabsContent>

                    <TabsContent value="nutraceutical-support" className="mt-0">
                      <div className="mb-7 flex items-center justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Personalized internal support</p>
                          <h3 className="mt-2 text-2xl font-bold">A protocol that evolves with you</h3>
                        </div>
                        <div className="hidden rounded-full border border-border/70 px-3 py-1.5 text-xs font-medium text-muted-foreground sm:inline-flex sm:items-center sm:gap-2">
                          <Clock3 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                          Reviewed as you progress
                        </div>
                      </div>
                      <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                        Before you arrive, a practitioner discusses a starting protocol with you. During your stay, it is reviewed and refined; at the end, your progress can help guide any appropriate adjustment for what comes next.
                      </p>
                      <div className="grid gap-4 md:grid-cols-3">
                        {nutraceuticalStages.map((stage) => (
                          <article key={stage.number} className="glass-panel rounded-2xl p-5">
                            <div className="mb-5 flex items-center justify-between">
                              <span className="text-2xl font-bold gold-gradient">{stage.number}</span>
                              <Sparkles className="h-5 w-5 text-primary" aria-hidden="true" />
                            </div>
                            <h4 className="text-lg font-bold">{stage.title}</h4>
                            <p className="mt-2 text-sm font-semibold text-primary">{stage.label}</p>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.description}</p>
                          </article>
                        ))}
                      </div>
                    </TabsContent>

                     <TabsContent value="diet-nutrition" className="mt-0">
                       <div className="mb-7 flex items-center justify-between gap-4">
                         <div>
                           <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Personalized nourishment</p>
                           <h3 className="mt-2 text-2xl font-bold">DOD Diet &amp; Nutrition Options</h3>
                         </div>
                         <div className="hidden rounded-full border border-border/70 px-3 py-1.5 text-xs font-medium text-muted-foreground sm:inline-flex sm:items-center sm:gap-2">
                           <Utensils className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                           Guided around your stay
                         </div>
                       </div>
                       <p className="mb-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                         During your stay at DOD5Star, you are encouraged to explore the DOD Watermelon Cleanse, DOD Grape Cure, DOD Advanced Juice Fast, Whole Plant Based Keto Lifestyle, or the DOD Baking Soda Miracle with guidance from your practitioner.
                       </p>
                       <div className="rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 p-5 sm:p-6">
                         <div className="flex items-start gap-4">
                           <Utensils className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                           <div>
                             <h4 className="font-bold">Explore the DOD 4 Pillar approach</h4>
                             <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                               See more details in the DOD 4 Pillar Ultimate Healing Masterclass at Braveheart Nation Library.
                             </p>
                             <a
                               href="https://braveheartnationlibrary.com"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary/80"
                             >
                               Open the DOD 4 Pillar Ultimate Healing Masterclass
                               <ArrowRight className="h-4 w-4" aria-hidden="true" />
                             </a>
                           </div>
                         </div>
                       </div>
                       <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                         Dietary changes, fasting, and any baking soda practice should be reviewed with your practitioner to ensure they are appropriate for you.
                       </p>
                     </TabsContent>
                  </Tabs>

                  <div className="mt-8 grid gap-6 rounded-2xl border border-border/60 bg-background/20 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
                    <div className="flex gap-4">
                      <ShieldCheck className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" />
                      <div>
                        <h3 className="mb-2 font-bold">The framework changes with you</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          This information is for orientation only—not a guaranteed itinerary, treatment prescription, or medical advice. Your DOD5Star team builds the appropriate plan with you and refines it as your stay unfolds.
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
                    <p className="mt-2 text-lg font-semibold">Ready to talk through your own therapy plan?</p>
                    </div>
                    <Button asChild size="lg" className="gold-glow" data-testid="button-discuss-protocol">
                      <Link href="/clinics/ixtapa-zihuatanejo/inquire" data-testid="link-discuss-protocol">
                        Discuss Your Therapy Plan
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

           <div className="mx-auto mb-12 max-w-5xl">
             <div className="mx-auto mb-9 max-w-3xl text-center">
               <span className="inline-flex rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                 Included With Your Stay
               </span>
               <h2 className="mt-5 text-2xl font-bold md:text-3xl gold-gradient">Wellness &amp; Energy Medicine Devices</h2>
               <p className="mt-4 leading-relaxed text-muted-foreground">
                 In addition to your personalized therapy plan, DOD5Star residents have access to selected wellness and energy medicine devices at the Residence with no additional treatment fee.
               </p>
             </div>
             <div className="mx-auto max-w-3xl space-y-3">
                {includedWellnessDevices.map((device) => {
                  const content = (
                    <div className="flex items-center justify-between gap-5">
                      <div className="min-w-0">
                        <h3 className="font-bold transition-colors group-hover:text-primary">{device.name}</h3>
                        <p className="mt-0.5 text-sm text-muted-foreground">{device.description}</p>
                      </div>
                      <div className="flex flex-shrink-0 items-center gap-3">
                        <span className="hidden text-right text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary sm:block">
                          Included with<br />your stay
                        </span>
                        {device.href ? (
                           <span className="flex h-8 w-8 items-center justify-center text-primary transition-transform group-hover:translate-x-1">
                            <ArrowRight className="h-5 w-5" aria-hidden="true" />
                           </span>
                        ) : (
                          <device.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                        )}
                      </div>
                    </div>
                  );

                  return device.href ? (
                    <a
                      key={device.name}
                      href={`${import.meta.env.BASE_URL.replace(/\/$/, '')}${device.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${device.name}`}
                      className="glass-panel group block rounded-xl px-6 py-4 transition-all hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {content}
                    </a>
                  ) : (
                    <article key={device.name} className="glass-panel group rounded-xl px-6 py-4 transition-all hover:border-primary/30">
                      {content}
                    </article>
                  );
                })}
             </div>
             <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
               Availability and recommended use may vary. The DOD5Star team can provide setup and usage guidance during your stay.
             </p>
           </div>

          <div className="max-w-3xl mx-auto">
             <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-primary">Practitioner-delivered care</p>
             <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Therapies Available On-Site</h2>
            <div className="space-y-3">
              {therapies.map((t) => (
                 <a
                  key={t.href}
                   href={`${import.meta.env.BASE_URL.replace(/\/$/, '')}${t.href}`}
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
               Your treatment plan is built with your team before your arrival, then refined throughout your stay according to your goals, condition, and daily response.
            </p>
          </div>

           <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card/85 to-accent/10 p-8 text-center shadow-[0_18px_55px_rgba(0,0,0,0.2)] md:p-10">
             <span className="inline-flex rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
               DOD5Star Exclusive
             </span>
             <h2 className="mt-5 text-2xl font-bold md:text-3xl gold-gradient">Receive a Complimentary Core Restore Treatment</h2>
             <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
               Book a Cardio MedBed treatment during your retreat and receive a DOD Core Restore session at no additional cost.
             </p>
           </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/clinics/ixtapa-zihuatanejo/inquire">
            <Button size="lg" className="gold-glow">Plan Your Stay</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
