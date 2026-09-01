import type { ReactNode } from 'react';
import { Seo } from '@/components/Seo';

interface LegalPageProps {
  title: string;
  description: string;
  path: string;
  updated: string;
  children: ReactNode;
}

export function LegalPage({ title, description, path, updated, children }: LegalPageProps) {
  return (
    <>
      <Seo title={`${title} | Doc of Detox Treatments`} description={description} path={path} />
      <section className="pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="glass-panel mx-auto max-w-4xl rounded-3xl p-6 shadow-2xl sm:p-10 md:p-14">
            <header className="mb-10 border-b border-white/10 pb-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">Legal information</p>
              <h1 className="gold-gradient text-4xl font-bold sm:text-5xl">{title}</h1>
              <p className="mt-4 text-sm text-muted-foreground">Last updated: {updated}</p>
            </header>
            <div className="prose prose-invert max-w-none prose-headings:scroll-mt-28 prose-headings:text-foreground prose-h2:mt-10 prose-h2:text-2xl prose-p:leading-relaxed prose-a:text-primary prose-a:underline prose-a:underline-offset-4 prose-li:leading-relaxed">
              {children}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}