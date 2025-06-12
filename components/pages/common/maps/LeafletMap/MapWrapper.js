'use client';
// src/components/maps/LeafletMap/MapWrapper.js
import dynamic from 'next/dynamic';

const Map = dynamic(
  () => import('./MapComponent'),
  { 
    ssr: false,
    loading: () => <div style={{ height: '400px', background: '#eee' }} />
  }
);

export default function MapWrapper(props) {
  return <Map {...props} />;
}