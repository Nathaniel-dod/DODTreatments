import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { Practitioner } from '@/data/practitioners';

interface PractitionerMapProps {
  practitioners: Practitioner[];
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}

export function PractitionerMap({ practitioners, selectedId, onSelect }: PractitionerMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const clusterGroupRef = useRef<L.MarkerClusterGroup | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const onSelectRef = useRef(onSelect);

  // Keep ref in sync so we don't trigger effects on every onSelect change
  useEffect(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  // Initialize Leaflet
  useEffect(() => {
    if (!mapContainer.current) return;
    if (mapRef.current) return; // Only initialize once

    const map = L.map(mapContainer.current, {
      center: [40, -95], // North America
      zoom: 4,
      zoomControl: false, // We'll add it in the bottom-right
      maxBounds: [
        [-90, -180],
        [90, 180]
      ],
      maxBoundsViscosity: 1.0
    });

    map.attributionControl.setPrefix(false);
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      className: 'navy-osm-tiles',
      maxZoom: 19
    }).addTo(map);

    const clusterGroup = L.markerClusterGroup({
      iconCreateFunction: (cluster) => {
        const count = cluster.getChildCount();
        return L.divIcon({
          html: `<div class="bg-primary text-primary-foreground font-bold rounded-full w-10 h-10 flex items-center justify-center border-2 border-[#0d1624] shadow-lg"><span>${count}</span></div>`,
          className: 'custom-cluster bg-transparent',
          iconSize: L.point(40, 40)
        });
      },
      maxClusterRadius: 40,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true
    });

    map.addLayer(clusterGroup);
    mapRef.current = map;
    clusterGroupRef.current = clusterGroup;

    return () => {
      map.remove();
      mapRef.current = null;
      clusterGroupRef.current = null;
    };
  }, []);

  // Update GeoJSON source when practitioners prop changes
  useEffect(() => {
    if (!mapRef.current || !clusterGroupRef.current) return;
    const map = mapRef.current;
    const clusterGroup = clusterGroupRef.current;

    clusterGroup.clearLayers();
    markersRef.current = {};

    practitioners.forEach(p => {
      const marker = L.marker([p.lat, p.lng], {
        icon: L.divIcon({
          html: `<div class="w-4 h-4 bg-primary rounded-full border-2 border-[#0d1624] shadow-md transition-transform hover:scale-125"></div>`,
          className: 'custom-marker bg-transparent',
          iconSize: L.point(16, 16),
          iconAnchor: [8, 8]
        })
      });

      marker.on('click', () => {
        onSelectRef.current(p.id);
      });

      markersRef.current[p.id] = marker;
      clusterGroup.addLayer(marker);
    });

    // Fit bounds on first big load if we have items and no selection
    if (practitioners.length > 0 && !selectedId) {
      const group = new L.FeatureGroup(Object.values(markersRef.current));
      map.fitBounds(group.getBounds(), { padding: [40, 40], maxZoom: 5 });
    }
  }, [practitioners]); // Exclude selectedId so we don't rebuild all markers on select

  // Handle selectedId visually and fly to point
  useEffect(() => {
    if (!mapRef.current || !clusterGroupRef.current) return;
    const map = mapRef.current;
    const clusterGroup = clusterGroupRef.current;
    const markers = markersRef.current;

    // Reset old state and apply selected styles
    practitioners.forEach(p => {
      const marker = markers[p.id];
      if (marker) {
        const isSelected = p.id === selectedId;
        marker.setIcon(L.divIcon({
          html: isSelected 
            ? `<div class="w-6 h-6 bg-[#fff7c6] rounded-full border-4 border-[#0d1624] shadow-[0_0_15px_rgba(244,190,69,0.8)] relative -top-1 -left-1 flex items-center justify-center z-50"><div class="w-2 h-2 bg-primary rounded-full"></div></div>`
            : `<div class="w-4 h-4 bg-primary rounded-full border-2 border-[#0d1624] shadow-md transition-transform hover:scale-125"></div>`,
          className: isSelected ? 'custom-marker-selected bg-transparent z-50' : 'custom-marker bg-transparent',
          iconSize: isSelected ? L.point(24, 24) : L.point(16, 16),
          iconAnchor: isSelected ? [12, 12] : [8, 8]
        }));
        
        if (isSelected) {
          marker.setZIndexOffset(1000);
        } else {
          marker.setZIndexOffset(0);
        }
      }
    });

    if (selectedId && markers[selectedId]) {
      const targetMarker = markers[selectedId];
      // zoomToShowLayer will spiderfy if clustered, then callback
      clusterGroup.zoomToShowLayer(targetMarker, () => {
        map.flyTo(targetMarker.getLatLng(), Math.max(map.getZoom(), 12), {
          animate: true,
          duration: 1
        });
      });
    }
  }, [selectedId, practitioners]);

  // Handle resizing so the canvas stays tight
  useEffect(() => {
    const el = mapContainer.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      if (mapRef.current) {
        mapRef.current.invalidateSize();
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="relative w-full h-full bg-[#0d1624] overflow-hidden rounded-2xl border border-white/10">
      <style>{`
        .navy-osm-tiles {
          filter: invert(1) hue-rotate(180deg) brightness(0.8) contrast(1.2) saturate(1.2);
        }
        .leaflet-container {
          background: #0d1624 !important;
          font-family: inherit;
        }
        .leaflet-control-zoom a {
          background-color: rgba(13, 22, 36, 0.8) !important;
          color: white !important;
          border-color: rgba(255,255,255,0.1) !important;
          backdrop-filter: blur(4px);
        }
        .leaflet-control-zoom a:hover {
          background-color: rgba(255,255,255,0.1) !important;
        }
        .leaflet-control-attribution {
          background-color: rgba(13, 22, 36, 0.7) !important;
          color: rgba(255,255,255,0.5) !important;
        }
        .leaflet-control-attribution a {
          color: rgba(255,255,255,0.8) !important;
        }
        .custom-cluster, .custom-marker, .custom-marker-selected {
          background: transparent;
          border: none;
        }
      `}</style>
      <div 
        ref={mapContainer} 
        className="absolute inset-0"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
