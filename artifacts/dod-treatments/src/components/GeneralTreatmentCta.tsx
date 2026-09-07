import type { ReactNode } from 'react';
import { useLocation } from 'wouter';

interface GeneralTreatmentCtaProps {
  children: ReactNode;
  className?: string;
}

export function GeneralTreatmentCta({
  children,
  className,
}: GeneralTreatmentCtaProps) {
  const [location] = useLocation();
  const isDod5StarJourney = location.startsWith(
    '/clinics/ixtapa-zihuatanejo/treatments/',
  );

  if (isDod5StarJourney) {
    return null;
  }

  return (
    <section className={className} data-general-treatment-cta>
      {children}
    </section>
  );
}