import { Seo } from '@/components/Seo';
import { ExternalLink, Smartphone } from 'lucide-react';

export default function Practitioners() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Find a Doc of Detox Practitioner Near You',
      description: 'Search the BraveHeartNation directory to find certified Doc of Detox practitioners offering Wolfe Non-Surgical, CellSonic, and advanced energy medicine worldwide.',
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
        title="Find Practitioners | Doc of Detox Network"
        description="Find certified Doc of Detox practitioners near you through the BraveHeartNation directory. Wolfe Non-Surgical, CellSonic, and advanced energy medicine worldwide."
        path="/practitioners"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              Find a Practitioner
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Search our global network of certified practitioners through BraveHeartNation
            </p>
          </div>
        </div>
      </section>

      {/* App Downloads */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-primary" />
                <span className="font-medium">Get the BraveHeartNation App:</span>
              </div>
              <div className="flex gap-3">
                <a 
                  href="https://apps.apple.com/in/app/braveheartnation/id6468676025" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                >
                  App Store <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.app.braveheartnation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                >
                  Google Play <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finder Iframe */}
      <section className="py-12 md:py-20 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-3xl p-6 md:p-8 max-w-6xl mx-auto">
            <div className="mb-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">BraveHeartNation Practitioner Directory</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Search by location to find certified practitioners offering Wolfe Non-Surgical, CellSonic Regeneration, Cardio MedBed, and other advanced energy medicine treatments.
              </p>
              <a 
                href="https://app.braveheartnation.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                Open in new tab <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            
            {/* Iframe with fallback */}
            <div className="bg-background/50 rounded-2xl overflow-hidden" style={{ minHeight: '600px' }}>
              <iframe
                src="https://app.braveheartnation.com"
                title="BraveHeartNation Practitioner Finder"
                className="w-full border-0"
                style={{ height: '600px', minHeight: '600px' }}
                sandbox="allow-same-origin allow-scripts allow-forms"
              />
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                Can't see the directory? <a href="https://app.braveheartnation.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Visit BraveHeartNation directly</a> or download the mobile app.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
