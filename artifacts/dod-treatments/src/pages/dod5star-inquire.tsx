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
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/10">
                  <User className="h-7 w-7 text-primary/70" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="mb-3 mt-1 text-sm font-medium text-primary">{member.role}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                {member.name === 'Dr. Darrell Wolfe' && (
                  <div className="mt-5 space-y-3 border-t border-white/10 pt-5 text-left">
                    <a href="tel:1-469-861-8884" className="group flex items-center gap-3">
                      <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span>
                        <span className="block text-sm font-medium group-hover:text-primary">USA Direct or WhatsApp</span>
                        <span className="block text-sm text-primary">1-469-861-8884</span>
                      </span>
                    </a>
                    <a href="tel:1-855-900-4544" className="group flex items-center gap-3">
                      <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span>
                        <span className="block text-sm font-medium group-hover:text-primary">Worldwide Toll-Free</span>
                        <span className="block text-sm text-primary">1-855-900-4544 ext. 5</span>
                      </span>
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
