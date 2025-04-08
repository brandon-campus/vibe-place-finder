import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlidersHorizontal, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PlaceCard from '@/components/PlaceCard';
import PlaceFilters, { FilterState } from '@/components/PlaceFilters';
import { getPlaces, Place } from '@/lib/supabase';
import { useQuery } from '@tanstack/react-query';

const PlacesPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    noiseLevel: [],
    priceRange: [],
    maxDistance: 10,
    foodTypes: [],
    mood: [],
  });

  const { data: places = [], isLoading } = useQuery({
    queryKey: ['places'],
    queryFn: getPlaces
  });

  console.log('Places in component:', places);

  const filteredPlaces = places.filter(place => {
    // Apply search filter
    if (searchQuery && !place.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !place.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Apply price range filter
    if (filters.priceRange.length > 0 && !filters.priceRange.includes(place.price_range)) {
      return false;
    }
    
    return true;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background pb-12">
        <div className="bg-gradient-to-r from-jama-primary/20 to-jama-secondary/20 p-6">
          <div className="container">
            <Button 
              variant="ghost" 
              className="mb-4"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
            
            <h1 className="text-2xl font-bold mb-6">Explorar lugares</h1>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-10 bg-white/90 border-none"
                placeholder="Buscar lugares, tags, descripciones..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-muted-foreground">
                {isLoading 
                  ? 'Cargando lugares...'
                  : `Encontrados ${filteredPlaces.length} lugares`
                }
              </p>
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filtros
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <PlaceFilters filters={filters} setFilters={setFilters} />
              </SheetContent>
            </Sheet>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="bg-card animate-pulse rounded-xl h-[300px]" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlaces.length > 0 ? (
                filteredPlaces.map(place => (
                  <PlaceCard key={place.id} place={place} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg font-medium mb-2">No se encontraron lugares</p>
                  <p className="text-muted-foreground">Intenta con otros filtros o términos de búsqueda</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PlacesPage;
