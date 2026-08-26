import { Seo } from '@/components/Seo';
import { Dod5StarNav } from '@/components/Dod5StarNav';
import { InquiryForm } from '@/components/InquiryForm';
import { Phone } from 'lucide-react';

export default function Dod5StarInquire() {
  return (
    <>
      <Seo
        title="Plan Your Stay | DOD5Star Retreat, Ixtapa-Zihuatanejo"
        description="Book your stay at the DOD5Star healing retreat in Ixtapa-Zihuatanejo, México. Call Dr. Darrell Wolfe at 1-469-861-8884 or send an inquiry today."
        path="/clinics/ixtapa-zihuatanejo/inquire"
      />
      <Dod5StarNav />

      <section className="pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 gold-gradient gold-glow">Plan Your Stay</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Call Dr. Darrell Wolfe directly for your 30-minute consultation. It will be an honor for him to help you create your Health & Healing Experience.
            </p>
            <div className="glass-panel rounded-2xl p-6 inline-block text-left">
              <div className="space-y-3">
                <a href="tel:1-469-861-8884" className="flex items-center gap-3 text-lg group">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-medium group-hover:text-primary">USA Direct or WhatsApp</div>
                    <div className="text-primary">1-469-861-8884</div>
                  </div>
                </a>
                <a href="tel:1-855-900-4544" className="flex items-center gap-3 text-lg group">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <div className="font-medium group-hover:text-primary">Worldwide Toll-Free</div>
                    <div className="text-primary">1-855-900-4544 ext. 5</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-10 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">DOD5Star Exclusive</span>
            <p className="mt-2 text-lg font-semibold">Book a Cardio MedBed treatment during your retreat and receive a complimentary DOD Core Restore session.</p>
          </div>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Request Information</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll reach out personally within 24 hours.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <InquiryForm defaultType="clinic" defaultLocation="Ixtapa-Zihuatanejo, México" />
          </div>
        </div>
      </section>
    </>
  );
}
