
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PlaceCard from '@/components/PlaceCard';
import { useFavorites } from '@/hooks/useFavorites';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const { favorites } = useFavorites();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background pb-12">
        <div className="bg-gradient-to-r from-jama-secondary/20 to-jama-secondary/10 p-6">
          <div className="container">
            <Button 
              variant="ghost" 
              className="mb-4"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
            
            <div className="flex items-center gap-2 mb-2">
              <Heart className="h-5 w-5 text-jama-secondary" fill="currentColor" />
              <h1 className="text-2xl font-bold">Mis favoritos</h1>
            </div>
            <p className="text-muted-foreground">Lugares que has guardado para visitar</p>
          </div>
        </div>
        
        <div className="container mt-6">
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map(place => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">No tienes favoritos</h2>
              <p className="text-muted-foreground mb-6">
                Guarda tus lugares favoritos para acceder rápidamente a ellos
              </p>
              <Button 
                onClick={() => navigate('/places')}
                className="bg-jama-secondary hover:bg-jama-secondary/90"
              >
                Explorar lugares
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
