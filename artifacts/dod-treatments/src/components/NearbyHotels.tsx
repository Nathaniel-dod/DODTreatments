import { ExternalLink } from 'lucide-react';

const hotels = [
  {
    name: 'IXZI Plus Hotel & Villas',
    location: 'Paseo de las Golondrinas · Palma Real area',
    description: 'The closest hotel to the retreat house. A peaceful setting with tropical vegetation and hotel and villa accommodation.',
    href: 'https://www.ixziplushotel.com/en',
    label: 'Visit Hotel Website',
    badge: 'Closest to the retreat house',
  },
  {
    name: 'Coral Ixtapa',
    location: 'Paseo de las Golondrinas · Palma Real area',
    description: 'Another option on the same street as IXZI, in the Palma Real golf-course neighborhood.',
    href: 'https://www.google.com/maps/search/?api=1&query=Hotel+Coral+Ixtapa+Paseo+de+las+Golondrinas',
    label: 'View Hotel on Maps',
  },
  {
    name: 'Las Brisas Ixtapa',
    location: 'Southern Ixtapa · coastal hillside',
    description: 'A nearby resort alternative with ocean-view rooms and private terraces, for guests who prefer a larger hotel setting.',
    href: 'https://www.lasbrisashotels.com.mx/en/ixtapa',
    label: 'Visit Hotel Website',
  },
];

export function NearbyHotels() {
  return (
    <section id="nearby-hotels" className="scroll-mt-32 bg-card/30 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">More ways to visit</p>
          <h2 className="mb-4 text-3xl font-bold gold-gradient md:text-4xl">Stay Nearby. Come to Us for Treatments.</h2>
          <p className="leading-relaxed text-muted-foreground">
            You don’t have to stay at the DOD5Star Residence to receive treatments. You’re welcome to book a nearby hotel and visit us for scheduled appointments. Contact our team to coordinate your treatments before finalizing your travel plans.
          </p>
        </div>
        <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-primary/30 bg-primary/10 p-6">
          <h3 className="mb-3 text-lg font-semibold text-primary">What to know when staying elsewhere</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>The additional wellness devices included for retreat-house guests are not included when you stay elsewhere.</li>
            <li>Treatment rates are slightly higher for guests staying outside the retreat house. Our team will confirm your applicable rates before booking.</li>
          </ul>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {hotels.map(hotel => (
            <article key={hotel.name} className="flex flex-col rounded-2xl border border-primary/20 bg-card p-6">
              {hotel.badge && <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">{hotel.badge}</p>}
              <h3 className="text-xl font-bold">{hotel.name}</h3>
              <p className="mt-2 text-xs text-primary">{hotel.location}</p>
              <p className="mt-4 mb-6 text-sm leading-relaxed text-muted-foreground">{hotel.description}</p>
              <a href={hotel.href} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline">
                {hotel.label}<ExternalLink className="h-4 w-4" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          Hotel bookings are made independently, directly with your chosen hotel. Confirm current rates, availability, and cancellation terms with the hotel. Ask our team about travel arrangements between your hotel and the retreat house.
        </p>
      </div>
    </section>
  );
}