
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PlaceDetail from '@/components/PlaceDetail';
import { places, Place } from '@/data/places';
import NotFound from './NotFound';

const PlaceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [place, setPlace] = useState<Place | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API fetch with a small delay
    const timer = setTimeout(() => {
      if (id) {
        const foundPlace = places.find(p => p.id === parseInt(id));
        setPlace(foundPlace || null);
      }
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-pulse-slow">Cargando...</div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!place) {
    return <NotFound />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PlaceDetail place={place} />
      </main>
      <Footer />
    </div>
  );
};

export default PlaceDetailPage;
