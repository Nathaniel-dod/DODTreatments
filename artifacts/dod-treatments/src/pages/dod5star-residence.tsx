import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Dod5StarNav } from '@/components/Dod5StarNav';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Bike,
  Car,
  ChefHat,
  Dumbbell,
  GlassWater,
  ImageIcon,
  MapPin,
  Plane,
  RadioTower,
  Sparkles,
  Table2,
  UtensilsCrossed,
  Users,
  Waves,
  Wifi,
} from 'lucide-react';

const movementAmenities = [
  {
    icon: Dumbbell,
    title: 'Professional Rebounder',
    description: 'A professional-grade rebounder for movement and daily wellness routines.',
  },
  {
    icon: Waves,
    title: 'Structured Ionized Salt-Water Pool',
    description: 'A beautiful pool for restorative time and gentle movement outdoors.',
  },
];

const homeAndLifestyleAmenities = [
  {
    icon: Table2,
    title: 'Upstairs Ping Pong Table',
    description: 'A fun, easy way to unwind between sessions or at the end of the day.',
  },
  {
    icon: Sparkles,
    title: 'Beautiful Lounging Areas',
    description: 'Comfortable indoor and outdoor spaces to rest, read, connect, and recharge.',
  },
  {
    icon: Bike,
    title: 'Two Bicycles',
    description: 'Explore the neighborhood and nearby surroundings at your own pace.',
  },
  {
    icon: ChefHat,
    title: 'Fully Furnished Chef’s Kitchen',
    description: 'A complete kitchen for preparing food that fits your personal preferences.',
  },
  {
    icon: GlassWater,
    title: 'Professional Juicer',
    description: 'A high-quality juicer for fresh juice whenever you choose to make it.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Professional Blender',
    description: 'A professional blender ready for smoothies, soups, sauces, and more.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi',
    description: 'Stay connected throughout the Residence with reliable high-speed Wi-Fi.',
  },
  {
    icon: RadioTower,
    title: 'Power Perfect Energy Management System',
    description: 'A whole-property system designed to neutralize negative frequencies within the house and across the property.',
  },
];

export default function Dod5StarResidence() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: 'DOD5Star Residence',
      description: 'A private wellness retreat residence in Ixtapa-Zihuatanejo, México with wellness amenities, a salt-water pool, and guest support services.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ixtapa-Zihuatanejo',
        addressCountry: 'MX',
      },
      telephone: '+1-469-861-8884',
      url: 'https://docofdetoxtreatments.com/clinics/ixtapa-zihuatanejo/residence',
    },
  ];

  return (
    <>
      <Seo
        title="DOD5Star Residence in Ixtapa-Zihuatanejo, Mexico"
        description="Tour the DOD5Star Residence in Ixtapa-Zihuatanejo, Mexico, with private suites, wellness amenities, a salt-water pool, complimentary airport service, and more."
        path="/clinics/ixtapa-zihuatanejo/residence"
        structuredData={structuredData}
      />
      <Dod5StarNav />

      <section className="pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Ixtapa-Zihuatanejo, México</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 gold-gradient gold-glow">The Residence</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A luxury jungle estate designed for healing — every amenity in service of your transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-4">A look inside</p>
              <h2 className="text-3xl md:text-4xl font-bold gold-gradient mb-4">Residence Photo Gallery</h2>
              <p className="text-muted-foreground leading-relaxed">
                Step inside the suites, shared spaces, jungle surroundings, and retreat amenities. Property photos will be added here soon.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {['The Residence', 'Suites & Living', 'Jungle & Pool'].map((label, index) => (
                <div
                  key={label}
                  className={`glass-panel rounded-2xl min-h-52 p-6 flex flex-col justify-between border-dashed ${
                    index === 0 ? 'sm:col-span-2 lg:col-span-2 lg:min-h-72' : ''
                  }`}
                >
                  <ImageIcon className="w-9 h-9 text-primary/70" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] uppercase text-primary/80 mb-2">Photo gallery</p>
                    <h3 className="text-xl font-bold">{label}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Included amenities */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-4">Included with your stay</p>
            <h2 className="text-3xl md:text-4xl font-bold gold-gradient mb-4">Amenities for Your Stay</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every DOD5Star stay includes access to thoughtfully selected wellness, movement, and home amenities designed to make your time here easy and restorative.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-14">
             <div>
               <div className="flex items-center gap-3 mb-6">
                 <Dumbbell className="w-6 h-6 text-primary" />
                 <h3 className="text-2xl font-bold">Movement &amp; Recovery</h3>
               </div>
               <div className="grid gap-5 sm:grid-cols-2">
                 {movementAmenities.map((amenity) => (
                   <article key={amenity.title} className="glass-panel h-full rounded-2xl p-6">
                     <amenity.icon className="mb-5 h-7 w-7 text-primary" aria-hidden="true" />
                     <h4 className="mb-2 text-lg font-bold">{amenity.title}</h4>
                     <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{amenity.description}</p>
                     <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Included with your stay</span>
                   </article>
                 ))}
               </div>
             </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <ChefHat className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Home & Lifestyle</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {homeAndLifestyleAmenities.map((amenity) => (
                  <article key={amenity.title} className="glass-panel rounded-2xl p-6 h-full">
                    <amenity.icon className="w-7 h-7 text-primary mb-5" aria-hidden="true" />
                    <h4 className="text-lg font-bold mb-2">{amenity.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{amenity.description}</p>
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Included with your stay</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="pb-12 md:pb-16">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="mx-auto max-w-6xl">
           <div className="mb-6 flex items-center gap-3">
             <Sparkles className="h-6 w-6 text-primary" />
             <h2 className="text-2xl font-bold">Wellness &amp; Treatments</h2>
           </div>
           <div className="grid gap-5 md:grid-cols-2">
             <article className="glass-panel flex h-full flex-col rounded-2xl p-7">
               <Sparkles className="mb-5 h-8 w-8 text-primary" aria-hidden="true" />
               <span className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Included with your stay</span>
               <h3 className="text-xl font-bold">Wellness &amp; Energy Medicine Devices</h3>
               <p className="mb-5 mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                 Explore the wellness and energy medicine devices available for residents to use at the Residence with no additional treatment fee.
               </p>
               <Link
                 href="/clinics/ixtapa-zihuatanejo/treatments"
                 className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
               >
                 See All
                 <ArrowRight className="h-4 w-4" aria-hidden="true" />
               </Link>
             </article>

             <article className="glass-panel flex h-full flex-col rounded-2xl border-primary/25 p-7">
               <Users className="mb-5 h-8 w-8 text-primary" aria-hidden="true" />
               <span className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Available by appointment</span>
               <h3 className="text-xl font-bold">On-Site Practitioners for Specialized Treatments</h3>
               <p className="mb-5 mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                 On-site practitioners are available to deliver specialized treatments. Practitioner-delivered therapies are not included in the residence rental and are charged separately.
               </p>
               <Link
                 href="/clinics/ixtapa-zihuatanejo/treatments"
                 className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
               >
                 Explore Specialized Treatments
                 <ArrowRight className="h-4 w-4" aria-hidden="true" />
               </Link>
             </article>
           </div>
         </div>
       </div>
     </section>

      {/* Guest support */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-8">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-4">Arrival & local support</p>
              <h2 className="text-3xl md:text-4xl font-bold gold-gradient mb-4">Care Begins Before You Arrive</h2>
              <p className="text-muted-foreground leading-relaxed">
                We make arriving in Ixtapa-Zihuatanejo simple, then give you flexible support to make the most of your time in town.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="glass-panel rounded-2xl p-7">
                <Plane className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
                <h3 className="text-xl font-bold mb-3">Airport Pickup & Drop-Off</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Complimentary pickup and drop-off at the friendly Ixtapa-Zihuatanejo International Airport (ZIH).
                </p>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Included with your stay</span>
              </article>
              <article className="glass-panel rounded-2xl p-7">
                <UtensilsCrossed className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
                <h3 className="text-xl font-bold mb-3">Arrival Grocery Stop</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  We will take you grocery shopping after you land, so you can have what you need for your stay.
                </p>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Included with your stay</span>
              </article>
              <article className="glass-panel rounded-2xl p-7">
                <Car className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
                <h3 className="text-xl font-bold mb-3">Ixtapa Chauffeur Service</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Get chauffeured around Ixtapa, be dropped off and picked up later, or have the driver stay with you.
                </p>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">Optional paid service · $25 per hour</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Optional meal service */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 md:items-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <UtensilsCrossed className="w-7 h-7 text-primary" aria-hidden="true" />
            </div>
            <div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-2">
                <span>Available on request</span>
                <span>Additional cost</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">Fresh Juices & Meals Prepared for You</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you would like your juices and meals prepared for you, this service is available upon request for an additional cost.
              </p>
            </div>
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
