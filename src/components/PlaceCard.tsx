import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Place } from '@/lib/supabase';
import { useFavorites } from '@/hooks/useFavorites';

interface PlaceCardProps {
  place: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={place.image || 'https://placehold.co/600x400/png'} 
          alt={place.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className={`absolute top-2 right-2 bg-white/70 backdrop-blur-sm hover:bg-white/90 ${
            isFavorite(place.id) ? 'text-red-500' : 'text-gray-500'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(place);
          }}
        >
          <Heart className="h-5 w-5" fill={isFavorite(place.id) ? "currentColor" : "none"} />
        </Button>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg">{place.name}</h3>
          <span className="text-jama-secondary font-medium">{place.price_range}</span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {place.description}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="truncate">{place.address}</span>
          </div>
          <Button 
            variant="ghost" 
            className="text-jama-primary font-medium"
            onClick={() => navigate(`/places/${place.id}`)}
          >
            Ver más
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
