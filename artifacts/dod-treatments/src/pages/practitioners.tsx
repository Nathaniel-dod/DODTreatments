import React, { useState, useMemo, useEffect } from 'react';
import { Seo } from '@/components/Seo';
import { Smartphone, ExternalLink, Search, Phone, Mail, Globe, MapPin, Award, Stethoscope, ChevronRight, GraduationCap, ChevronDown, Quote } from 'lucide-react';
import { practitioners } from '@/data/practitioners';
import { practitionerTestimonials } from '@/data/practitionerTestimonials';
import { PractitionerMap } from '@/components/PractitionerMap';

const locationNames: Record<string, string> = {
  AB: 'Alberta',
  BC: 'British Columbia',
  CA: 'California',
  FL: 'Florida',
  KY: 'Kentucky',
  MO: 'Missouri',
  MT: 'Montana',
  NY: 'New York',
  QC: 'Quebec',
  SK: 'Saskatchewan',
  TX: 'Texas',
  UT: 'Utah',
  WA: 'Washington',
  WI: 'Wisconsin',
};

function getSearchableLocation(location: string) {
  const regionCode = location.split(',').map(part => part.trim())[1];
  const regionName = regionCode ? locationNames[regionCode] : '';
  const countryName = location.includes('USA') ? 'United States' : '';
  return `${location} ${regionName} ${countryName}`.toLowerCase();
}

export default function Practitioners() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: 'Find a Doc of Detox Practitioner Near You',
      description: 'Search the directory to find certified Doc of Detox practitioners offering Wolfe Non Surgical, CellSonic, and advanced energy medicine worldwide.',
      lastReviewed: '2025-01-15',
      reviewedBy: {
        '@type': 'Person',
        name: 'Dr. Darrell Wolfe',
        honorificSuffix: 'N.D.',
        jobTitle: 'Doctor of Naturopathic Medicine',
      },
    },
  ];

  useEffect(() => {
    if (selectedId) {
      const el = document.getElementById(`practitioner-${selectedId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [selectedId]);

  const filteredPractitioners = useMemo(() => {
    if (!searchQuery.trim()) return practitioners;
    const q = searchQuery.toLowerCase();
    return practitioners.filter(p => 
      p.fullName.toLowerCase().includes(q) ||
      p.clinicName.toLowerCase().includes(q) ||
      getSearchableLocation(p.cityStateCountry).includes(q) ||
      p.treatments.some(t => t.toLowerCase().includes(q)) ||
      p.devices.some(d => d.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <>
      <Seo
        title="Find Practitioners | Doc of Detox Network"
        description="Find certified Doc of Detox practitioners near you. Wolfe Non Surgical, CellSonic, and advanced energy medicine worldwide."
        path="/practitioners"
        structuredData={structuredData}
      />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 gold-gradient gold-glow">
              Find a Practitioner
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              Search our global network of certified practitioners offering Wolfe Non Surgical and advanced therapies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Directory Area */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row h-[85vh] min-h-[600px] max-h-[900px]">
            
            {/* Left/Top: Map */}
            <div className="w-full lg:w-3/5 h-1/2 lg:h-full relative border-b lg:border-b-0 lg:border-r border-white/10 bg-[#070d16] shrink-0">
              <PractitionerMap 
                practitioners={filteredPractitioners} 
                selectedId={selectedId} 
                onSelect={setSelectedId} 
              />
            </div>
            
            {/* Right/Bottom: List & Search */}
            <div className="w-full lg:w-2/5 flex flex-col h-1/2 lg:h-full bg-card/40 backdrop-blur-md">
              
              {/* Search Bar */}
              <div className="p-4 border-b border-white/10 bg-background/50 backdrop-blur-xl z-10 shrink-0">
                <div className="relative">
                  <label htmlFor="practitioner-search" className="sr-only">Search practitioners by name, city, or treatment</label>
                  <Search aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input 
                    id="practitioner-search"
                    type="text"
                    placeholder="Search by name, city, treatment..."
                    className="w-full rounded-xl border border-white/20 bg-black/20 py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="mt-3 flex justify-between items-center text-sm text-muted-foreground px-1">
                  <span>{filteredPractitioners.length} {filteredPractitioners.length === 1 ? 'practitioner' : 'practitioners'} found</span>
                  {selectedId && (
                    <button 
                      onClick={() => setSelectedId(null)}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Clear Selection
                    </button>
                  )}
                </div>
              </div>
              
              {/* List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth pb-12">
                {filteredPractitioners.length === 0 ? (
                  <div className="text-center py-12 px-4 text-muted-foreground">
                    <p className="mb-2">No practitioners found matching your search.</p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="text-primary hover:underline"
                    >
                      Clear search
                    </button>
                  </div>
                ) : (
                  filteredPractitioners.map(p => (
                    <div 
                      key={p.id}
                      id={`practitioner-${p.id}`}
                      className={`relative group bg-background/40 backdrop-blur border rounded-2xl p-5 transition-all duration-300 ${
                        selectedId === p.id 
                          ? 'border-primary shadow-[0_0_15px_rgba(244,190,69,0.15)] ring-1 ring-primary/50' 
                          : 'border-white/5 hover:border-white/20 hover:bg-background/60'
                      }`}
                    >
                      {/* Name & Clinic */}
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {p.fullName}
                        </h3>
                        {p.clinicName && p.clinicName !== p.fullName && (
                          <p className="text-muted-foreground text-sm font-medium">{p.clinicName}</p>
                        )}
                      </div>
                      
                      {/* Location */}
                      <div className="flex items-start gap-2 text-sm text-foreground/80 mb-4">
                        <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{p.cityStateCountry}</span>
                      </div>
                      
                      {/* Contact */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-sm">
                        {p.phone && (
                          <a href={`tel:${p.phone.replace(/[^0-9+]/g, '')}`} onClick={e => e.stopPropagation()} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit truncate">
                            <Phone className="w-3.5 h-3.5" /> 
                            {p.phone}
                          </a>
                        )}
                        {p.email && p.email.includes('@') && (
                          <a href={`mailto:${p.email}`} onClick={e => e.stopPropagation()} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit truncate">
                            <Mail className="w-3.5 h-3.5" /> 
                            Email
                          </a>
                        )}
                        {p.website && (
                          <a href={p.website.startsWith('http') ? p.website : `https://${p.website}`} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit truncate sm:col-span-2">
                            <Globe className="w-3.5 h-3.5" /> 
                            {p.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                          </a>
                        )}
                      </div>
                      
                      <hr className="border-white/5 my-4" />
                      
                      {/* Treatments preview (only if collapsed) */}
                      {selectedId !== p.id && (
                        <div className="text-xs text-muted-foreground mb-4 truncate">
                          {p.treatments.slice(0, 2).join(', ')}
                          {p.treatments.length > 2 && ' + more'}
                        </div>
                      )}

                      {/* Expanded content */}
                      {selectedId === p.id && (
                        <div id={`practitioner-details-${p.id}`} className="space-y-4 animate-fade-in mb-4">
                          {p.treatments.length > 0 && (
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                                <Stethoscope className="w-3.5 h-3.5" /> Treatments
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {p.treatments.map((t, i) => (
                                  <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-foreground/80">{t}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {p.devices.length > 0 && (
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Devices</h4>
                              <div className="flex flex-wrap gap-1.5">
                                {p.devices.map((d, i) => (
                                  <span key={i} className="px-2 py-1 bg-primary/10 border border-primary/20 text-primary rounded text-xs">{d}</span>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {p.certifications.length > 0 && (
                            <div>
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                                <Award className="w-3.5 h-3.5" /> Certifications
                              </h4>
                              <ul className="text-xs text-foreground/70 space-y-1">
                                {p.certifications.map((c, i) => (
                                  <li key={i}>• {c}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {p.trainingInfo && (
                            <div className="mt-4">
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                                <GraduationCap className="w-3.5 h-3.5" /> Training Details
                              </h4>
                              <div className="bg-black/20 p-3 rounded-lg border border-white/5 text-xs text-foreground/80 leading-relaxed">
                                {p.trainingInfo}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Action Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedId(selectedId === p.id ? null : p.id);
                        }}
                        aria-expanded={selectedId === p.id}
                        aria-controls={`practitioner-details-${p.id}`}
                        aria-label={`${selectedId === p.id ? 'Hide' : 'View'} details for ${p.fullName}`}
                        className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border transition-colors text-sm font-medium ${
                          selectedId === p.id 
                            ? 'bg-white/5 border-white/10 hover:bg-white/10 text-foreground'
                            : 'bg-primary/10 border-primary/20 hover:bg-primary/20 text-primary'
                        }`}
                      >
                        {selectedId === p.id ? (
                          <>Hide details <ChevronDown className="w-4 h-4" /></>
                        ) : (
                          <>View details <ChevronRight className="w-4 h-4" /></>
                        )}
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Practitioner testimonials */}
      <section className="border-t border-white/5 bg-card/20 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">Individual Experiences</p>
            <h2 className="gold-gradient text-3xl font-bold md:text-4xl">What Clients Have Shared</h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            {practitionerTestimonials.map((testimonial) => (
              <article key={`${testimonial.practitionerId}-${testimonial.author}`} className="glass-panel rounded-3xl p-7 md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Quote className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.practitionerName}</h3>
                    <p className="text-sm text-muted-foreground">Practitioner testimonial</p>
                  </div>
                </div>
                <blockquote className="space-y-4 text-base leading-relaxed text-foreground/85">
                  {testimonial.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <footer className="pt-2 font-semibold text-primary">— {testimonial.author}</footer>
                </blockquote>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            This testimonial reflects one individual&apos;s personal experience. Results vary, and no particular treatment or outcome is guaranteed. Testimonials are not a substitute for professional medical advice.
          </p>
        </div>
      </section>

      {/* App Downloads */}
      <section className="py-12 border-t border-white/5 bg-background/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">BraveHeartNation App</h3>
                <p className="text-sm text-muted-foreground">Access the directory on the go</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://apps.apple.com/in/app/braveheartnation/id6468676025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition-all flex items-center gap-2"
              >
                App Store <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.app.braveheartnation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-sm font-medium transition-all flex items-center gap-2"
              >
                Google Play <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
