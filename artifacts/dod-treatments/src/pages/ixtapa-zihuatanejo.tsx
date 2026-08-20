import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Dod5StarNav } from '@/components/Dod5StarNav';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MapPin, BedDouble, Sparkles, Users } from 'lucide-react';

export default function IxtapaZihuatanejo() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'Doc of Detox 5-Star Healing & Training Retreat',
       description: 'DOD5Star is a 5-star healing retreat in Ixtapa-Zihuatanejo, México offering personalized treatments, practitioner support, and restorative stays.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ixtapa-Zihuatanejo',
        addressCountry: 'MX',
      },
      telephone: '+1-469-861-8884',
      url: 'https://docofdetoxtreatments.com/clinics/ixtapa-zihuatanejo',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
       name: 'DOD5Star Healing Retreat in Ixtapa-Zihuatanejo, México',
       description: 'Take control of your healing at DOD5Star, a 5-star retreat in Ixtapa-Zihuatanejo, México with personalized treatments and restorative stays.',
      lastReviewed: '2025-01-15',
      reviewedBy: {
        '@type': 'Person',
        name: 'Dr. Darrell Wolfe',
        honorificSuffix: 'N.D.',
        jobTitle: 'Doctor of Naturopathic Medicine',
      },
    },
  ];

  return (
    <>
      <Seo
         title="DOD5Star Healing Retreat in Ixtapa-Zihuatanejo, Mexico"
         description="Take control of your healing at DOD5Star, a 5-star retreat in Ixtapa-Zihuatanejo, Mexico with personalized treatments, support, and restorative stays."
        path="/clinics/ixtapa-zihuatanejo"
        structuredData={structuredData}
      />
      <Dod5StarNav />

      {/* Hero */}
      <section className="relative isolate flex min-h-[34rem] items-center overflow-hidden md:min-h-[40rem]">
        <img
          src={`${import.meta.env.BASE_URL}images/ixtapa-aerial.jpg`}
          alt="Aerial view of Ixtapa-Zihuatanejo, México — jungle, marina, and Pacific coastline"
          className="absolute inset-0 -z-30 h-full w-full scale-[1.03] object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(5,18,29,0.9)_0%,rgba(5,18,29,0.63)_43%,rgba(5,18,29,0.16)_100%)]" aria-hidden="true" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#071421]/95 via-[#071421]/20 to-[#071421]/55" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 -z-10 h-36 bg-gradient-to-b from-background/45 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" aria-hidden="true" />

        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 md:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-8 flex items-center justify-center gap-3 text-primary">
              <span className="h-px w-9 bg-primary/70" aria-hidden="true" />
              <MapPin className="h-5 w-5" strokeWidth={1.75} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">Ixtapa-Zihuatanejo, México</span>
              <span className="h-px w-9 bg-primary/70" aria-hidden="true" />
            </div>
            <h1 className="gold-gradient gold-glow mx-auto max-w-5xl text-5xl font-bold leading-[1.04] tracking-[-0.045em] drop-shadow-[0_16px_36px_rgba(2,12,21,0.62)] md:text-7xl lg:text-8xl">
              5-Star Healing & Training Retreat
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-foreground/95 md:mt-10 md:text-2xl">
              A winning strategy for taking control of your healing
            </p>
            <div className="mx-auto mt-9 grid max-w-4xl grid-cols-[2.5rem_minmax(0,1fr)_2.5rem] items-center gap-4 text-foreground/80 md:mt-11 md:grid-cols-[3.5rem_minmax(0,1fr)_3.5rem]">
              <span className="h-px w-full bg-primary/65" aria-hidden="true" />
              <p className="text-center text-sm leading-relaxed md:text-base">
                Created by Dr. Darrell Wolfe — hosted by Master Practitioners Dr. Sage Wolfe & Jesse Malcolm
              </p>
              <span className="h-px w-full bg-primary/65" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Explore the Retreat */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gold-gradient">Explore the Retreat</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/clinics/ixtapa-zihuatanejo/residence">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <BedDouble className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">The Residence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Private suites, a salt-water pool, wellness technology, airport support, and more in a luxury jungle estate.
                </p>
                <div className="flex items-center text-primary text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                  Explore the Residence <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/clinics/ixtapa-zihuatanejo/treatments">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <Sparkles className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Treatments</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Daily Wolfe Non-Surgical, CellSonic, Cardio MedBed, and personalized healing protocols.
                </p>
                <div className="flex items-center text-primary text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                  See the Treatments <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
            <Link href="/clinics/ixtapa-zihuatanejo/team">
              <div className="glass-panel rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group h-full">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Your Team</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Hosts Dr. Sage Wolfe and Jesse Malcolm, house manager Cinthia, and founder Dr. Darrell Wolfe.
                </p>
                <div className="flex items-center text-primary text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                  Meet the Team <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-6 md:p-8">
            <div className="grid md:grid-cols-[minmax(13rem,0.72fr)_1.8fr] gap-8 md:gap-10 items-center">
              <div className="min-h-[20rem] md:min-h-0 self-stretch">
                <img
                  src={`${import.meta.env.BASE_URL}images/dr-darrell-wolfe.png`}
                  alt="Dr. Darrell Wolfe, founder of the DOD5Star Healing Retreat"
                  width={4068}
                  height={3421}
                  className="w-full h-full rounded-2xl object-cover object-center shadow-xl"
                />
              </div>
              <div>
                <div className="mb-7">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">A founder&apos;s message</p>
                  <h2 className="text-3xl md:text-[2.6rem] font-bold leading-[1.08] tracking-tight">
                    <span className="block">Take Back Your</span>
                    <span className="block gold-gradient">Personal Power to Heal</span>
                  </h2>
                  <div className="mt-5 h-px w-16 bg-primary/70" aria-hidden="true" />
                </div>
                <blockquote>
                  <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                    DOD5Star is a winning strategy for people ready to take control of their healing journey for the first time in their lives. It is designed to help you reclaim the personal power to heal that may have been taken from you without your knowledge or consent. From the moment you arrive until the moment you leave, get ready for what can become the most amazing holiday healing experience of your life.
                  </p>
                  <p className="text-lg text-foreground/90 leading-relaxed">
                    For those who have taken life to the edge of the cliff and need more support, this is where you come to bring the thunder down. Your personalized experience is built on 40 years of Dr. Darrell Wolfe's clinical and in-the-trenches work, with care and guidance from our team.
                  </p>
                  <footer className="mt-6 flex items-center gap-3 text-primary font-semibold">
                    <span className="w-8 h-px bg-primary/70" aria-hidden="true" />
                    Dr. Darrell Wolfe
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The setting */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-4">Mexico&apos;s peaceful hidden gem</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gold-gradient">A Restorative Setting in Ixtapa-Zihuatanejo</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At the end of a cobblestone street beside a 5-star golf course, the retreat is surrounded by beautiful jungle and moments from the coastal calm of Ixtapa-Zihuatanejo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 md:py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Retreat</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Call Dr. Darrell Wolfe directly for your 30-minute consultation. It will be an honor for him to help you create your Health & Healing Experience.
            </p>
            <div className="glass-panel rounded-2xl p-6 inline-block">
              <div className="space-y-3">
                <a href="tel:1-469-861-8884" className="flex items-center gap-3 text-lg group">
                  <Phone className="w-6 h-6 text-primary" />
                  <div className="text-left">
                    <div className="font-medium group-hover:text-primary">USA Direct or WhatsApp</div>
                    <div className="text-primary">1-469-861-8884</div>
                  </div>
                </a>
                <a href="tel:1-855-900-4544" className="flex items-center gap-3 text-lg group">
                  <Phone className="w-6 h-6 text-primary" />
                  <div className="text-left">
                    <div className="font-medium group-hover:text-primary">Worldwide Toll-Free</div>
                    <div className="text-primary">1-855-900-4544 ext. 5</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Your Stay CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/clinics/ixtapa-zihuatanejo/inquire">
            <Button size="lg" className="gold-glow">Plan Your Stay <ArrowRight className="ml-2 w-5 h-5" /></Button>
          </Link>
        </div>
      </section>
    </>
  );
}
