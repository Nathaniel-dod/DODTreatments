import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Practitioner } from '@/data/practitioners';
import { MapPin, Search, ChevronRight, X, Phone, Mail, Globe, Map as MapIcon, GraduationCap, Award, Stethoscope } from 'lucide-react';

interface PractitionerMapProps {
  practitioners: Practitioner[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}

// Convert lat/lng to x/y percentages on the map.
// The SVG is roughly standard Web Mercator but cropped.
// I'll define an offset and scale that aligns North America well.
function latLngToXY(lat: number, lng: number) {
  // Empirical linear calibration based on the map SVG for North America:
  // Longitude: -125 (West coast) -> ~8% X.
  // Longitude: -80 (Florida) -> ~18% X.
  // 1 degree lng = ~0.00222 X
  const x = (lng + 125) * 0.00222 + 0.08;

  // Latitude: 50 (BC) -> ~20% Y.
  // Latitude: 28 (Florida) -> ~35% Y.
  // 1 degree lat = ~-0.00681 Y
  const y = (lat - 50) * -0.00681 + 0.20;
  
  return { x, y };
}

export function PractitionerMap({ practitioners, selectedId, onSelect }: PractitionerMapProps) {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [activeCluster, setActiveCluster] = useState<Practitioner[] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Group practitioners by rough location (to handle Ballwin/Manchester, etc)
  const groupedPins = useMemo(() => {
    const groups: { x: number, y: number, practitioners: Practitioner[] }[] = [];
    
    practitioners.forEach(p => {
      const { x, y } = latLngToXY(p.lat, p.lng);
      // find if there's a group within ~1.2% distance to cluster dense areas like Florida/BC
      const existing = groups.find(g => Math.abs(g.x - x) < 0.012 && Math.abs(g.y - y) < 0.012);
      if (existing) {
        existing.practitioners.push(p);
      } else {
        groups.push({ x, y, practitioners: [p] });
      }
    });
    
    return groups;
  }, [practitioners]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomDelta = e.deltaY > 0 ? 0.9 : 1.1;
    let newZoom = zoom * zoomDelta;
    newZoom = Math.max(1, Math.min(newZoom, 8)); // clamp zoom between 1x and 8x
    setZoom(newZoom);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  // Center map on resize
  const stateRef = useRef({ zoom, selectedId });
  useEffect(() => {
    stateRef.current = { zoom, selectedId };
  }, [zoom, selectedId]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width === 0 || height === 0) continue;
        
        const current = stateRef.current;
        
        if (current.selectedId) {
          const p = practitioners.find(p => p.id === current.selectedId);
          if (p) {
            const { x, y } = latLngToXY(p.lat, p.lng);
            setPan({
              x: width / 2 - (x * width * current.zoom),
              y: height / 2 - (y * height * current.zoom),
            });
            continue;
          }
        }
        
        const z = current.zoom === 1 ? 3.5 : current.zoom;
        if (current.zoom === 1) setZoom(z);

        setPan({
          x: width / 2 - (0.15 * width * z),
          y: height / 2 - (0.25 * height * z)
        });
      }
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, [practitioners]);

  useEffect(() => {
    if (!activeCluster) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveCluster(null);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeCluster]);

  // When a practitioner is selected from list, pan to them
  useEffect(() => {
    if (selectedId && containerRef.current) {
      const p = practitioners.find(p => p.id === selectedId);
      if (p) {
        const { x, y } = latLngToXY(p.lat, p.lng);
        const rect = containerRef.current.getBoundingClientRect();
        setZoom(5);
        setPan({
          x: rect.width / 2 - (x * rect.width * 5),
          y: rect.height / 2 - (y * rect.height * 5),
        });
      }
    }
  }, [selectedId, practitioners]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full bg-[#0d1624] overflow-hidden rounded-2xl border border-white/10 select-none touch-none"
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div 
        className="absolute inset-0"
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transformOrigin: '0 0',
          transition: isDragging ? 'none' : 'transform 0.3s ease-out'
        }}
      >
        <img 
          src={`${import.meta.env.BASE_URL}images/world-map.svg`} 
          alt="World Map" 
          className="w-full h-full object-cover pointer-events-none opacity-40 mix-blend-screen"
        />
        
        {groupedPins.map((group, idx) => {
          const isSelected = group.practitioners.some(p => p.id === selectedId);
          const pinSize = 24 / zoom; // scale down pin at high zooms
          
          const labelText = group.practitioners.length > 1
            ? `Cluster of ${group.practitioners.length} practitioners. Click to view list.`
            : `View ${group.practitioners[0].fullName} in ${group.practitioners[0].cityStateCountry}`;
          
          return (
            <button
              key={idx}
              aria-label={labelText}
              className={`absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all ${isSelected ? 'z-20 text-primary-foreground' : 'z-10 text-primary hover:text-primary-foreground'}`}
              style={{
                left: `${group.x * 100}%`,
                top: `${group.y * 100}%`,
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (group.practitioners.length === 1) {
                  onSelect(group.practitioners[0].id);
                } else {
                  setActiveCluster(group.practitioners);
                }
              }}
            >
              <MapPin 
                className={`transition-all drop-shadow-md ${isSelected ? 'fill-primary' : 'fill-primary/20'}`}
                style={{ width: `${Math.max(20, pinSize)}px`, height: `${Math.max(20, pinSize)}px` }}
              />
              {group.practitioners.length > 1 && (
                <span 
                  className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-[#0d1624]"
                  style={{ transform: `scale(${1/zoom}) translate(50%, -50%)`, transformOrigin: 'bottom left' }}
                >
                  {group.practitioners.length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Cluster Chooser Popover */}
      {activeCluster && (
        <div 
          className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onPointerDown={e => e.stopPropagation()}
          onWheel={e => e.stopPropagation()}
          onClick={() => setActiveCluster(null)}
        >
          <div 
            role="dialog"
            aria-modal="true"
            aria-label="Select a practitioner"
            className="bg-[#0d1624] border border-white/10 shadow-2xl rounded-2xl p-4 max-w-sm w-full mx-4 max-h-[80%] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-foreground">Select Practitioner</h3>
              <button 
                onClick={() => setActiveCluster(null)}
                aria-label="Close"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {activeCluster.map(p => (
                <button
                  key={p.id}
                  className="flex flex-col text-left p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-primary/10 hover:border-primary/30 transition-colors group"
                  onClick={() => {
                    onSelect(p.id);
                    setActiveCluster(null);
                  }}
                >
                  <span className="font-bold text-primary group-hover:text-primary-foreground transition-colors">{p.fullName}</span>
                  <span className="text-xs text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">{p.cityStateCountry}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-30">
        <button 
          aria-label="Zoom in"
          className="w-10 h-10 bg-card/80 backdrop-blur border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors shadow-lg"
          onClick={() => setZoom(z => Math.min(z * 1.5, 8))}
        >
          +
        </button>
        <button 
          aria-label="Zoom out"
          className="w-10 h-10 bg-card/80 backdrop-blur border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors shadow-lg"
          onClick={() => setZoom(z => Math.max(z / 1.5, 1))}
        >
          -
        </button>
      </div>
      
      {/* Zoom hint */}
      <div className="absolute top-4 left-4 z-30 pointer-events-none bg-background/50 backdrop-blur px-3 py-1.5 rounded-md border border-white/5 text-xs text-muted-foreground">
        Scroll to zoom, drag to pan
      </div>
    </div>
  );
}
