import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Dod5StarNav } from '@/components/Dod5StarNav';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import { dod5StarTeam } from '@/data/dod5starTeam';

export default function Dod5StarTeam() {
  return (
    <>
      <Seo
        title="Your Team | DOD5Star Retreat, Ixtapa-Zihuatanejo"
        description="Meet founder Dr. Darrell Wolfe, hosts Dr. Sage Wolfe and Jesse Malcolm, and house manager Cinthia at the DOD5Star retreat in Ixtapa-Zihuatanejo, México."
        path="/clinics/ixtapa-zihuatanejo/team"
      />
      <Dod5StarNav />

      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 gold-gradient gold-glow">Your Team</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The doctors, consultants, and practitioners dedicated to your transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {dod5StarTeam.map((member) => (
              <div key={member.name} className="glass-panel rounded-2xl p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-6">
                  <User className="w-10 h-10 text-primary/60" />
                </div>
                <h2 className="text-xl font-bold mb-1">{member.name}</h2>
                <p className="text-sm text-primary font-medium mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10">
            Consultant and practitioner profiles with photos are coming soon.
          </p>
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
