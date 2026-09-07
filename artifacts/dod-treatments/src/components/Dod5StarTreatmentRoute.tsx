import type { ReactNode } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { Dod5StarNav } from '@/components/Dod5StarNav';
import { Button } from '@/components/ui/button';

export function Dod5StarTreatmentRoute({ children }: { children: ReactNode }) {
  return (
    <>
      <Dod5StarNav />
      <div className="dod5star-treatment-context">{children}</div>
      <section className="pb-16 pt-4 md:pb-24">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <div className="glass-panel mx-auto max-w-4xl rounded-3xl p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Your DOD5Star Experience</p>
            <h2 className="mt-3 text-3xl font-bold gold-gradient">Explore This Treatment During Your Stay</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Talk with the DOD5Star team about how this treatment may fit your personalized retreat plan.
            </p>
            <Button asChild size="lg" className="mt-8 gold-glow">
              <Link href="/clinics/ixtapa-zihuatanejo/inquire">
                Plan Your Stay
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}