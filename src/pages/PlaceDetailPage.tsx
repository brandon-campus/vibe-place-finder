import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PlaceDetail from '@/components/PlaceDetail';
import { supabase, Place } from '@/lib/supabase';
import NotFound from './NotFound';
import { useQuery } from '@tanstack/react-query';

const PlaceDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: place, isLoading } = useQuery({
    queryKey: ['place', id],
    queryFn: async () => {
      if (!id) return null;
      const { data, error } = await supabase
        .from('places')
        .select(`
          *,
          categories (
            name,
            icon
          )
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      return data as Place;
    }
  });
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="animate-pulse">Cargando...</div>
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
