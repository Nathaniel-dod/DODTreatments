import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';

interface TreatmentHeroCtasProps {
  className?: string;
  dod5StarLabel?: string;
}

export function TreatmentHeroCtas({
  className = '',
  dod5StarLabel = 'Available at DOD5Star',
}: TreatmentHeroCtasProps) {
  const [location] = useLocation();
  const isDod5StarJourney = location.startsWith('/clinics/ixtapa-zihuatanejo/treatments/');

  if (isDod5StarJourney) {
    return (
      <div className={`mt-8 flex justify-center ${className}`}>
        <Button size="lg" className="gold-glow" asChild>
          <Link href="/clinics/ixtapa-zihuatanejo/inquire">Plan Your DOD5Star Stay</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className={`mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center ${className}`}>
      <Button size="lg" className="gold-glow" asChild>
        <Link href="/clinics/ixtapa-zihuatanejo">{dod5StarLabel}</Link>
      </Button>
      <Button size="lg" variant="outline" asChild>
        <Link href="/clinics">Find a Practitioner / Clinic</Link>
      </Button>
    </div>
  );
}