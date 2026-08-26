import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface TreatmentHeroCtasProps {
  className?: string;
  dod5StarLabel?: string;
}

export function TreatmentHeroCtas({
  className = '',
  dod5StarLabel = 'Available at DOD5Star',
}: TreatmentHeroCtasProps) {
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