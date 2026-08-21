import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

interface TreatmentHeroCtasProps {
  className?: string;
}

export function TreatmentHeroCtas({ className = '' }: TreatmentHeroCtasProps) {
  return (
    <div className={`mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center ${className}`}>
      <Button size="lg" className="gold-glow" asChild>
        <Link href="/clinics/ixtapa-zihuatanejo">Available at DOD5Star</Link>
      </Button>
      <Button size="lg" variant="outline" asChild>
        <Link href="/clinics">Find a Practitioner / Clinic</Link>
      </Button>
    </div>
  );
}