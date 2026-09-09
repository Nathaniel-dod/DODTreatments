import { useLocation } from 'wouter';
import { BadgeDollarSign, Check } from 'lucide-react';

type PriceOption = {
  name: string;
  price: string;
  note?: string;
  highlight?: string;
};

type PricingDetails = {
  title: string;
  options: PriceOption[];
};

const pricingByRoute: Record<string, PricingDetails> = {
  '/clinics/ixtapa-zihuatanejo/treatments/wolfe-non-surgical': {
    title: 'Wolfe Non Surgical Pricing',
    options: [
      { name: 'Wolfe Non Surgical with Dr. Sage', price: 'From $250/hour USD' },
      { name: 'Wolfe Non Surgical', price: 'From $175/hour USD' },
    ],
  },
  '/clinics/ixtapa-zihuatanejo/treatments/cardio-medbed': {
    title: 'Cardio MedBed EECP Pricing',
    options: [
      { name: 'Single Session', price: 'From $175/session USD' },
      { name: '10-Session Bundle', price: 'From $1,250 USD', note: 'Equivalent to $125 per session.' },
    ],
  },
  '/clinics/ixtapa-zihuatanejo/treatments/cellsonic-regeneration': {
    title: 'CellSonic Pricing',
    options: [
      { name: 'Individual Treatment', price: 'From $0.50/pulse USD' },
      {
        name: 'With a Wolfe Non Surgical Treatment',
        price: 'From $0.25/pulse USD',
        highlight: 'The first 250 pulses are included free with a Wolfe Non Surgical treatment.',
      },
    ],
  },
  '/clinics/ixtapa-zihuatanejo/treatments/consultations': {
    title: 'Consultation Pricing',
    options: [
      { name: 'Consultation with Dr. Darrell Wolfe', price: 'From $450 USD' },
    ],
  },
  '/clinics/ixtapa-zihuatanejo/treatments/bone-density-scanner': {
    title: 'Bone Density Scan Pricing',
    options: [
      { name: 'DOD Advanced Bone Density Scan', price: 'From $75 USD' },
    ],
  },
  '/clinics/ixtapa-zihuatanejo/treatments/dod-core-restore': {
    title: 'Core Restore Pricing',
    options: [
      { name: 'Individual Session', price: 'From $75/session USD' },
      { name: 'Same-Day Cardio MedBed Add-On', price: 'From $45 USD', note: 'Available when you use the Cardio MedBed on the same day.' },
    ],
  },
  '/clinics/ixtapa-zihuatanejo/treatments/whole-body-thermography': {
    title: 'Thermography Pricing',
    options: [
      { name: 'Whole Body Thermography', price: 'From $325 USD' },
      { name: 'Thermography with OligoScan & Workup', price: 'From $500 USD' },
    ],
  },
  '/clinics/ixtapa-zihuatanejo/treatments/oligo-heavy-metal-scan': {
    title: 'OligoScan Pricing',
    options: [
      { name: 'Oligo Heavy Metal Scan', price: 'From $250 USD' },
      { name: 'Thermography with OligoScan & Workup', price: 'From $500 USD' },
    ],
  },
};

export function Dod5StarPricing({ variant = 'detail' }: { variant?: 'hero' | 'detail' }) {
  const [location] = useLocation();
  const pricing = pricingByRoute[location];

  if (!pricing) return null;

  if (variant === 'hero') {
    return (
      <div className="mt-8 rounded-2xl border border-primary/25 bg-primary/5 p-5 text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Starting Investment</p>
        <div className="mt-3 space-y-2">
          {pricing.options.map((option) => (
            <div key={option.name} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <span className="text-sm font-medium text-foreground/85">{option.name}</span>
              <span className="flex-shrink-0 font-bold text-primary">{option.price}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Starting Investment</p>
            <h2 className="gold-gradient mt-3 text-3xl font-bold md:text-4xl">{pricing.title}</h2>
          </div>
          <div className={`grid gap-5 ${pricing.options.length > 1 ? 'md:grid-cols-2' : 'mx-auto max-w-2xl'}`}>
            {pricing.options.map((option) => (
              <article key={option.name} className="glass-panel rounded-2xl p-7">
                <div className="flex items-start gap-4">
                  <BadgeDollarSign className="mt-0.5 h-7 w-7 flex-shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg font-bold">{option.name}</h3>
                    <p className="mt-2 text-2xl font-bold text-primary">{option.price}</p>
                    {option.note ? <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{option.note}</p> : null}
                    {option.highlight ? (
                      <p className="mt-4 flex gap-2 rounded-xl border border-primary/25 bg-primary/5 p-3 text-sm font-medium leading-relaxed">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                        {option.highlight}
                      </p>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            Prices are listed in USD and represent starting rates. Final pricing depends on session length, practitioner, treatment plan, and any combined services. Availability and pricing are subject to confirmation.
          </p>
        </div>
      </div>
    </section>
  );
}