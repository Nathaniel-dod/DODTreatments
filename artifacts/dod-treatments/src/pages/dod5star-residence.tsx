import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Dod5StarNav } from '@/components/Dod5StarNav';
import { Button } from '@/components/ui/button';
import { MapPin, Waves, UtensilsCrossed, BedDouble, TreePalm, Sparkles, Dumbbell } from 'lucide-react';

const amenities = [
  {
    icon: BedDouble,
    title: 'Elegant Private Suites',
    description: 'Elegantly designed suites with jungle and ocean vistas — details and photos coming soon.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Nourishing Cuisine',
    description: 'Chef-prepared meals aligned with your personalized nutrition protocol.',
  },
  {
    icon: Waves,
    title: 'Pool & Outdoor Living',
    description: 'Resort-style outdoor spaces for rest and recovery between treatments.',
  },
  {
    icon: Sparkles,
    title: 'Dedicated Treatment Rooms',
    description: 'Purpose-built spaces for Wolfe Non-Surgical, CellSonic, and energy-medicine sessions.',
  },
  {
    icon: Dumbbell,
    title: 'Movement & Training Areas',
    description: 'Space for guided movement, breathwork, and practitioner training.',
  },
  {
    icon: TreePalm,
    title: 'Jungle & Ocean Setting',
    description: 'A picturesque jungle backdrop minutes from the Pacific coast of Ixtapa-Zihuatanejo.',
  },
];

export default function Dod5StarResidence() {
  return (
    <>
      <Seo
        title="The Residence | DOD5Star Retreat, Ixtapa-Zihuatanejo"
        description="Explore the DOD5Star retreat residence in Ixtapa-Zihuatanejo, México — private suites, chef-prepared cuisine, pools, and dedicated treatment rooms."
        path="/clinics/ixtapa-zihuatanejo/residence"
      />
      <Dod5StarNav />

      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
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

      <section className="pb-12 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((a) => (
              <div key={a.title} className="glass-panel rounded-2xl p-8">
                <a.icon className="w-8 h-8 text-primary mb-4" />
                <h2 className="text-xl font-bold mb-2">{a.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10">
            Full photo gallery and room-by-room details coming soon.
          </p>
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
