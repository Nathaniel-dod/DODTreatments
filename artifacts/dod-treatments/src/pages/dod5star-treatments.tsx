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
  ScanLine,
  ShieldCheck,
  Sparkles,
  Sunrise,
  Sun,
  Sunset,
  ThermometerSun,
  Utensils,
} from 'lucide-react';

const therapies = [
  {
    name: 'Wolfe Non Surgical',
    category: 'Focused Bodywork',
    href: '/clinics/ixtapa-zihuatanejo/treatments/wolfe-non-surgical',
    note: 'A powerful approach to focused bodywork, selected around your comfort and retreat plan.',
    image: 'images/wns-hero.jpg',
    imageAlt: "Wolfe Non Surgical practitioner treating a patient's neck and shoulder",
    imagePosition: 'object-[center_35%]',
  },
  {
    name: 'CellSonic Regeneration ESWT',
    category: 'Shock Wave Therapy',
    href: '/clinics/ixtapa-zihuatanejo/treatments/cellsonic-regeneration',
    note: 'Focused acoustic-wave technology designed to support tissue renewal and natural recovery.',
    image: 'images/cellsonic-ankle-treatment.webp',
    imageAlt: 'CellSonic Regeneration treatment being applied to an ankle',
  },
  {
    name: 'Cardio MedBed EECP',
    category: 'Cardiovascular Therapy',
    href: '/clinics/ixtapa-zihuatanejo/treatments/cardio-medbed',
    note: 'A guided treatment experience designed to support healthy blood flow and circulation.',
    image: 'images/cardio-medbed-lifestyle.webp',
    imageAlt: 'Guest receiving Cardio MedBed EECP therapy',
  },
  {
    name: 'Health Consultations',
    category: 'Personalized Guidance',
    href: '/clinics/ixtapa-zihuatanejo/treatments/consultations',
    note: 'One-on-one guidance to help shape a personalized roadmap before and during your stay.',
    image: 'images/perfect-day-consultation.jpg',
    imageAlt: 'Woman taking part in a personal health consultation',
  },
  {
    name: 'DOD Core Restore',
    category: 'Core & Pelvic Wellness',
    href: '/clinics/ixtapa-zihuatanejo/treatments/dod-core-restore',
    note: 'Focused support for pelvic-floor wellness, deep core strength, and personal comfort.',
    image: 'images/dod-core-restore-lifestyle.webp',
    imageAlt: 'Guest receiving a DOD Core Restore session',
  },
  {
    name: 'DOD Advanced Bone Density Scanner',
    category: 'Wellness Assessment',
    href: '/clinics/ixtapa-zihuatanejo/treatments/bone-density-scanner',
    note: 'A radiation-free way to establish and track a skeletal-health baseline during your journey.',
    image: 'images/bone-density-scanner-lifestyle.webp',
    imageAlt: 'Practitioner performing a DOD Advanced Bone Density Scanner assessment',
  },
  {
    name: 'Oligo Heavy Metal Scan',
    category: 'Wellness Assessment',
    href: '/clinics/ixtapa-zihuatanejo/treatments/oligo-heavy-metal-scan',
    note: 'A quick, non-invasive optical scan that estimates selected mineral, trace-element, and metal patterns.',
    icon: ScanLine,
  },
  {
    name: 'Whole Body Thermography',
    category: 'Thermal Assessment',
    href: '/clinics/ixtapa-zihuatanejo/treatments/whole-body-thermography',
    note: 'Radiation-free infrared imaging that maps relative skin-surface temperature patterns and asymmetries.',
    icon: ThermometerSun,
  },
];

const includedWellnessDevices = [
  {
    icon: Sun,
    name: 'Bioptron Light',
    category: 'Polarized Light',
    description: 'Full-spectrum light technology with a fullerene lens, available at the Residence.',
    href: '/clinics/ixtapa-zihuatanejo/treatments/bioptron-light',
    image: 'images/bioptron-light.webp',
    imageAlt: 'Bioptron polarized light therapy device',
  },
  {
    icon: CircleDot,
    name: 'Avacen',
    category: 'Thermal Wellness',
    description: 'A microcirculation-support device available for resident use.',
    href: '/clinics/ixtapa-zihuatanejo/treatments/avacen',
    image: 'images/avacen.webp',
    imageAlt: 'Avacen thermal microcirculation device',
  },
  {
    icon: Sun,
    name: 'Vitamin D Crystal Panel',
    category: 'Light Therapy',
    description: 'Vitamin D light with a crystal panel, included as part of your stay.',
    href: '/clinics/ixtapa-zihuatanejo/treatments/vitamin-d-light',
    image: 'images/solrx-e-series.webp',
    imageAlt: 'Vitamin D light panel available at the Residence',
  },
  {
    icon: Sunrise,
    name: 'RX Infrared Light Healing',
    category: 'Infrared Light',
    description: 'RX infrared light technology available for residents to use at the Residence.',
    href: '/clinics/ixtapa-zihuatanejo/treatments/infrared-light-healing',
    image: 'images/rx-infrared-seat.webp',
    imageAlt: 'RX infrared light device available at the Residence',
  },
  {
    icon: Activity,
    name: 'Vibration Plate',
    category: 'Movement & Recovery',
    description: 'A movement and recovery device available for resident use throughout your stay.',
  },
  {
    icon: RadioTower,
    name: 'Sentient Element PEMF',
    category: 'Energy Medicine',
    description: 'An adjustable PEMF system offering frequencies from 7 Hz to 10,000 Hz, with options ranging from longer, lower-intensity sessions to shorter, higher-intensity sessions.',
    href: '/clinics/ixtapa-zihuatanejo/treatments/sentient-element-pemf',
    image: 'images/sentient-element-pemf.png',
    imageAlt: 'Sentient Element PEMF system with padded coil accessories',
  },
];

const protocolBlocks = [
  {
    period: 'Morning',
    timing: 'Assess & prepare',
    title: 'Build the right treatment mix',
    items: [
      { label: 'Practitioner assessment', description: 'Review your goals, current condition, and response to shape the day’s therapy mix.' },
      { label: 'Wolfe Non Surgical bodywork', description: 'Begin with focused bodywork selected around your comfort and practitioner plan.' },
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
        description="Daily Wolfe Non Surgical bodywork, CellSonic ESWT, Cardio MedBed EECP, and personalized protocols at the DOD5Star retreat in Ixtapa-Zihuatanejo, México."
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
                <div className="min-w-0 flex items-start gap-4">
                  <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-primary/40 bg-card/70 text-primary">
                    <CalendarDays className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Internal / External Therapies</p>
                    <h2 className="mt-2 text-2xl font-bold gold-gradient">Personalized Therapies, Shaped Around You</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      Explore the external therapies and internal support that may be considered throughout your retreat.
                    </p>
                  </div>
                </div>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="gold-glow h-auto min-h-10 w-full max-w-full flex-shrink whitespace-normal text-center md:w-auto"
                    data-testid="button-view-sample-protocol"
                  >
                    Explore What Your Day Might Look Like
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </DialogTrigger>
              </div>
            </div>

            <DialogContent
              className="w-[calc(100%-2rem)] max-w-5xl border-primary/30 bg-card p-0"
              data-testid="therapy-planner-dialog"
            >
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
                        <TabsList
                           tabIndex={-1}
                          className="grid h-auto w-full min-w-0 max-w-3xl grid-cols-[repeat(3,minmax(0,1fr))] gap-1 rounded-xl border border-primary/20 bg-background/60 p-1.5 shadow-inner"
                          data-testid="therapy-planner-tabs"
                        >
                         <TabsTrigger
                           value="therapies"
                            className="min-h-12 min-w-0 whitespace-normal break-words rounded-lg px-1 py-3 text-center text-xs font-semibold leading-tight sm:px-4 sm:text-base data-[state=active]:bg-primary/15 data-[state=active]:text-primary data-[state=active]:shadow-md"
                            data-testid="therapy-tab-therapies"
                         >
                           Internal / External Therapies
                         </TabsTrigger>
                         <TabsTrigger
                           value="nutraceutical-support"
                            className="min-h-12 min-w-0 whitespace-normal break-words rounded-lg px-1 py-3 text-center text-xs font-semibold leading-tight sm:px-4 sm:text-base data-[state=active]:bg-primary/15 data-[state=active]:text-primary data-[state=active]:shadow-md"
                            data-testid="therapy-tab-nutraceutical-support"
                         >
                           Nutraceutical Support
                         </TabsTrigger>
                         <TabsTrigger
                           value="diet-nutrition"
                            className="min-h-12 min-w-0 whitespace-normal break-words rounded-lg px-1 py-3 text-center text-xs font-semibold leading-tight sm:px-4 sm:text-base data-[state=active]:bg-primary/15 data-[state=active]:text-primary data-[state=active]:shadow-md"
                            data-testid="therapy-tab-diet-nutrition"
                         >
                           Diet &amp; Nutrition
                         </TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent value="therapies" className="mt-0" data-testid="therapy-panel-therapies">
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

                    <TabsContent value="nutraceutical-support" className="mt-0" data-testid="therapy-panel-nutraceutical-support">
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

                     <TabsContent value="diet-nutrition" className="mt-0" data-testid="therapy-panel-diet-nutrition">
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
                                data-testid="link-dod-4-pillar"
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
                    <Button
                      asChild
                      size="lg"
                      className="gold-glow h-auto min-h-10 w-full max-w-full whitespace-normal text-center sm:w-auto"
                      data-testid="button-discuss-protocol"
                    >
                      <Link href="/clinics/ixtapa-zihuatanejo/inquire" data-testid="link-discuss-protocol">
                        Discuss Your Therapy Plan
                        <ArrowRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

           <div className="mx-auto mb-12 max-w-5xl">
             <div className="mx-auto mb-9 max-w-3xl text-center">
               <span className="inline-flex rounded-full border border-primary/70 bg-primary px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-foreground shadow-[0_10px_32px_rgba(244,190,69,0.3)] ring-4 ring-primary/10">
                 Included Free With Your Stay
               </span>
               <h2 className="mt-5 text-2xl font-bold md:text-3xl gold-gradient">Wellness &amp; Energy Medicine Devices</h2>
               <p className="mt-4 leading-relaxed text-muted-foreground">
                 In addition to your personalized therapy plan, DOD5Star residents have access to selected wellness and energy medicine devices at the Residence with no additional treatment fee.
               </p>
             </div>
             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {includedWellnessDevices.map((device) => {
                  const content = (
                     <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/30 transition-all duration-300 hover:border-primary/40">
                       <div className="relative h-36 overflow-hidden bg-gradient-to-br from-primary/15 via-card to-accent/10">
                         {'image' in device && device.image ? (
                           <img
                             src={`${import.meta.env.BASE_URL}${device.image}`}
                             alt={device.imageAlt}
                             className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                             loading="lazy"
                           />
                         ) : (
                           <div className="flex h-full items-center justify-center">
                             <device.icon className="h-12 w-12 text-primary/80" aria-hidden="true" />
                           </div>
                         )}
                         <span className="absolute left-3 top-3 rounded-full border border-primary/20 bg-background/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-primary">
                           Included
                         </span>
                      </div>
                       <div className="flex flex-1 flex-col p-5">
                         <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary">Included With Your Stay</p>
                         <h3 className="mt-2 font-bold transition-colors group-hover:text-primary">{device.name}</h3>
                         <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{device.description}</p>
                        {device.href ? (
                            <span className="mt-5 flex items-center justify-end gap-1 text-sm font-medium text-primary">
                              Explore
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                           </span>
                        ) : (
                           <span className="mt-5 text-right text-xs font-semibold uppercase tracking-[0.1em] text-primary">Available on-site</span>
                        )}
                      </div>
                     </article>
                  );

                  return device.href ? (
                    <Link
                      key={device.name}
                      href={device.href}
                      aria-label={`View ${device.name}`}
                      className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div key={device.name} className="h-full">
                      {content}
                    </div>
                  );
                })}
             </div>
             <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
               Availability and recommended use may vary. The DOD5Star team can provide setup and usage guidance during your stay.
             </p>
           </div>

          <div className="mx-auto max-w-6xl">
             <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-primary">Practitioner-delivered care</p>
             <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Therapies Available On-Site</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {therapies.map((t) => {
                const Icon = 'icon' in t && t.icon ? t.icon : Activity;
                return (
                  <Link
                  key={t.href}
                    href={t.href}
                    className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-background/30 transition-all duration-300 hover:border-primary/40">
                      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10">
                        {'image' in t ? (
                          <img
                            src={`${import.meta.env.BASE_URL}${t.image}`}
                            alt={t.imageAlt}
                            className={`absolute inset-0 h-full w-full object-cover ${t.imagePosition ?? 'object-top'} transition-transform duration-500 group-hover:scale-105`}
                            loading="lazy"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-primary/30 bg-background/35 shadow-[0_0_55px_hsl(var(--primary)/0.2)] transition-transform duration-500 group-hover:scale-110">
                              <Icon className="h-11 w-11 text-primary" strokeWidth={1.35} aria-hidden="true" />
                            </div>
                          </div>
                        )}
                       <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                       <span className="absolute left-3 top-3 rounded-full border border-primary/20 bg-background/90 px-3 py-1 text-xs font-medium text-primary">
                         {t.category}
                       </span>
                    </div>
                     <div className="flex flex-1 flex-col p-6">
                       <h3 className="text-xl font-bold transition-colors group-hover:text-primary">{t.name}</h3>
                       <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{t.note}</p>
                       <span className="mt-5 flex items-center justify-end gap-1 text-sm font-medium text-primary">
                         Explore at DOD5Star
                         <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                       </span>
                     </div>
                   </article>
                  </Link>
                );
              })}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">
               Your treatment plan is built with your team before your arrival, then refined throughout your stay according to your goals, condition, and daily response.
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
