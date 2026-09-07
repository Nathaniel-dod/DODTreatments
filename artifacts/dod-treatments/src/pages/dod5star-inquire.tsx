import { Seo } from '@/components/Seo';
import { Dod5StarNav } from '@/components/Dod5StarNav';
import { InquiryForm } from '@/components/InquiryForm';
import { dod5StarTeam } from '@/data/dod5starTeam';
import { Phone, User } from 'lucide-react';

export default function Dod5StarInquire() {
  return (
    <>
      <Seo
        title="Plan Your Stay | DOD5Star Retreat, Ixtapa-Zihuatanejo"
        description="Book your stay at the DOD5Star healing retreat in Ixtapa-Zihuatanejo, México. Call Dr. Darrell Wolfe at 1-469-861-8884 or send an inquiry today."
        path="/clinics/ixtapa-zihuatanejo/inquire"
      />
      <Dod5StarNav />

      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-10 text-center md:mb-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight gold-gradient gold-glow">Plan Your Stay</h1>
            <div className="glass-panel mt-8 rounded-3xl p-6 text-left md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Your Health Matters</p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">Start with a Personalized Strategy</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                You matter, and your health matters. To make your retreat experience as powerful and personal as possible, we encourage you to call Dr. Wolfe directly. Strategy is everything, and a conversation gives him the opportunity to understand your needs and help shape the very best approach for you. You are also welcome to fill out the form below.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:1-469-861-9454"
                  className="flex items-center gap-3 rounded-2xl border border-primary/25 bg-primary/5 p-4 transition-colors hover:border-primary/50 hover:bg-primary/10"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-primary">Direct / WhatsApp</span>
                    <span className="mt-1 block font-bold">1-469-861-9454</span>
                  </span>
                </a>
                <a
                  href="tel:1-855-900-4544"
                  className="flex items-center gap-3 rounded-2xl border border-primary/25 bg-primary/5 p-4 transition-colors hover:border-primary/50 hover:bg-primary/10"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-primary">Toll-Free · Extension 5</span>
                    <span className="mt-1 block font-bold">1-855-900-4544</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <InquiryForm
              defaultType="clinic"
              defaultInterest="DOD5Star Retreat"
              defaultLocation="Ixtapa-Zihuatanejo, México"
              includeStayPlanning
            />
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-32 pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Your Hosts &amp; Support</p>
            <h2 className="gold-gradient text-3xl font-bold md:text-4xl">Meet Your DOD5Star Team</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The doctors, practitioners, and residence support dedicated to your treatment experience and stay.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {dod5StarTeam.map((member) => (
              <article key={member.name} className="glass-panel rounded-2xl p-7 text-center">
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-accent/10 ring-2 ring-primary/25">
                  {member.image ? (
                    <img
                      src={`${import.meta.env.BASE_URL}${member.image}`}
                      alt={member.imageAlt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <User className="h-9 w-9 text-primary/70" aria-hidden="true" />
                  )}
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="mb-3 mt-1 text-sm font-medium text-primary">{member.role}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
