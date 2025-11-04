'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface StateData {
  name: string;
  ngos: number;
  beneficiaries: string;
  programs: string[];
  coordinates: [number, number];
}

interface IndiaMapProps {
  statesData: StateData[];
  onStateClick: (state: StateData) => void;
  selectedState: StateData | null;
}

// Custom marker icon
const createCustomIcon = (isSelected: boolean) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="relative">
        <div class="w-8 h-8 rounded-full ${isSelected ? 'bg-primary-600 scale-125' : 'bg-primary-500'} shadow-lg flex items-center justify-center text-white font-bold text-sm border-2 border-white">
          <div class="absolute inset-0 rounded-full bg-primary-400 animate-ping opacity-75"></div>
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
};

function MapBounds() {
  const map = useMap();
  
  useEffect(() => {
    // Set bounds to focus on India
    const indiaBounds: L.LatLngBoundsExpression = [
      [8.0, 68.0], // Southwest coordinates
      [35.0, 97.0], // Northeast coordinates
    ];
    map.fitBounds(indiaBounds);
  }, [map]);
  
  return null;
}

export default function IndiaMap({ statesData, onStateClick, selectedState }: IndiaMapProps) {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={[20.5937, 78.9629]} // Center of India
        zoom={5}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        zoomControl={true}
      >
        <MapBounds />
        
        {/* OpenStreetMap Tiles */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* State Markers */}
        {statesData.map((state) => (
          <Marker
            key={state.name}
            position={state.coordinates}
            icon={createCustomIcon(selectedState?.name === state.name)}
            eventHandlers={{
              click: () => onStateClick(state),
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg mb-2">{state.name}</h3>
                <div className="space-y-1 text-sm">
                  <p><strong>{state.ngos}</strong> NGOs</p>
                  <p><strong>{state.beneficiaries}</strong> beneficiaries</p>
                  <div className="mt-2">
                    <p className="font-semibold mb-1">Focus Areas:</p>
                    <div className="flex flex-wrap gap-1">
                      {state.programs.map((program) => (
                        <span
                          key={program}
                          className="bg-primary-100 text-primary-700 px-2 py-0.5 rounded text-xs"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
