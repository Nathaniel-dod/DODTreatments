import type { LucideIcon } from 'lucide-react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'wouter';
import { Seo } from '@/components/Seo';
import { Button } from '@/components/ui/button';

type AssessmentDetailPageProps = {
  title: string;
  eyebrow: string;
  subtitle: string;
  introduction: string;
  seoDescription: string;
  path: string;
  icon: LucideIcon;
  processTitle: string;
  processDescription: string;
  steps: Array<{ title: string; description: string }>;
  highlights: Array<{ title: string; description: string }>;
  limitations: string[];
};

export function AssessmentDetailPage({
  title,
  eyebrow,
  subtitle,
  introduction,
  seoDescription,
  path,
  icon: Icon,
  processTitle,
  processDescription,
  steps,
  highlights,
  limitations,
}: AssessmentDetailPageProps) {
  const structuredData = [{
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: title,
    description: seoDescription,
    lastReviewed: '2026-09-09',
  }];

  return (
    <>
      <Seo title={`${title} | DOD5Star`} description={seoDescription} path={path} structuredData={structuredData} />

      <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Icon className="h-4 w-4" aria-hidden="true" />
                {eyebrow}
              </div>
              <h1 className="gold-glow gold-gradient text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">{title}</h1>
              <p className="mt-6 text-2xl font-medium text-foreground/80 md:text-3xl">{subtitle}</p>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{introduction}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="gold-glow">
                  <Link href="/clinics/ixtapa-zihuatanejo/inquire">Plan Your Stay</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/clinics/ixtapa-zihuatanejo/treatments">Back to Treatments</Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto flex aspect-square w-full max-w-lg items-center justify-center overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 via-card/80 to-accent/10 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.22),transparent_52%)]" />
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full border border-primary/30 bg-background/45 shadow-[0_0_80px_hsl(var(--primary)/0.18)]">
                <Icon className="h-20 w-20 text-primary" strokeWidth={1.25} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">The assessment experience</p>
            <h2 className="gold-gradient text-3xl font-bold md:text-4xl">{processTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{processDescription}</p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="glass-panel rounded-2xl p-7">
                <span className="text-sm font-bold text-primary">0{index + 1}</span>
                <h3 className="mb-3 mt-4 text-xl font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Useful wellness context</p>
            <h2 className="gold-gradient text-3xl font-bold md:text-4xl">What the Assessment Can Add</h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <article key={highlight.title} className="glass-panel rounded-2xl p-7">
                <CheckCircle2 className="mb-4 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mb-3 text-xl font-bold">{highlight.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card/30 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <aside className="mx-auto max-w-5xl rounded-3xl border border-primary/25 bg-primary/5 p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row">
              <ShieldCheck className="h-10 w-10 flex-shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Important limitations</p>
                <h2 className="mt-3 text-3xl font-bold">An Informational Tool, Not a Diagnosis</h2>
                <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
                  {limitations.map((limitation) => <p key={limitation}>{limitation}</p>)}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}