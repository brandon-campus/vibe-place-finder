
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Place } from '@/data/places';
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
          src={place.image} 
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
          <span className="text-jama-secondary font-medium">{place.priceRange}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {place.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
          {place.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">+{place.tags.length - 3}</Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-muted-foreground">
            {place.location} • {place.distance} km
          </span>
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
