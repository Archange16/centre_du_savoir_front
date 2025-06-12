'use client';
// src/components/maps/LeafletMap/MapComponent.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Configuration des icônes
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/assets/markers/marker-icon-2x.png',
  iconUrl: '/assets/markers/marker-icon.png',
  shadowUrl: '/assets/markers/marker-shadow.png',
});

export default function MapComponent({ center = [48.8566, 2.3522], zoom = 13 }) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '400px', width: '100%' }}
      key={`map-${center.join('-')}`}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center}>
        <Popup>Localisation</Popup>
      </Marker>
    </MapContainer>
  );
}