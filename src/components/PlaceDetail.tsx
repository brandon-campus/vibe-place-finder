
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Clock, 
  Phone, 
  Globe, 
  MapPin, 
  Heart, 
  ArrowLeft, 
  Star,
  Volume,
  DollarSign,
  Tag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Place } from '@/data/places';
import { useFavorites } from '@/hooks/useFavorites';
import { Separator } from '@/components/ui/separator';

interface PlaceDetailProps {
  place: Place;
}

const PlaceDetail: React.FC<PlaceDetailProps> = ({ place }) => {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  return (
    <div className="bg-background">
      <div className="relative h-[30vh] md:h-[50vh] w-full overflow-hidden">
        <Button 
          variant="outline"
          size="icon" 
          className="absolute top-4 left-4 z-10 bg-white/70 backdrop-blur-sm hover:bg-white/90"
          onClick={() => navigate('/places')}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        
        <Button 
          variant="outline" 
          size="icon" 
          className={`absolute top-4 right-4 z-10 bg-white/70 backdrop-blur-sm hover:bg-white/90 ${
            isFavorite(place.id) ? 'text-red-500' : 'text-gray-500'
          }`}
          onClick={() => toggleFavorite(place)}
        >
          <Heart className="h-5 w-5" fill={isFavorite(place.id) ? "currentColor" : "none"} />
        </Button>
        
        <img 
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h1 className="text-white text-2xl md:text-3xl font-bold">{place.name}</h1>
          <div className="flex items-center mt-2">
            <div className="flex items-center mr-3">
              <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
              <span className="text-white">{place.rating}</span>
            </div>
            <span className="text-white/80 mr-3">•</span>
            <div className="flex items-center mr-3">
              <Volume className="h-4 w-4 text-white/80 mr-1" />
              <span className="text-white/80">{place.noiseLevel}</span>
            </div>
            <span className="text-white/80 mr-3">•</span>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-white/80 mr-1" />
              <span className="text-white/80">{place.priceRange}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Descripción</h2>
              <p className="text-muted-foreground">{place.description}</p>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-xl font-semibold mb-3">Etiquetas</h2>
              <div className="flex flex-wrap gap-2">
                {place.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-xl font-semibold mb-3">Ambiente ideal para</h2>
              <div className="flex flex-wrap gap-2">
                {place.mood.map((mood, index) => (
                  <Badge key={index} variant="outline" className="px-3 py-1">
                    {mood}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold mb-4">Información</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-sm text-muted-foreground">{place.location} ({place.distance} km)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-muted-foreground mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Horario</p>
                    <p className="text-sm text-muted-foreground">{place.openingHours}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-sm text-muted-foreground">{place.phoneNumber}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="h-5 w-5 text-muted-foreground mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Sitio web</p>
                    <a 
                      href={`https://${place.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-jama-primary hover:underline"
                    >
                      {place.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold mb-4">¿Necesitas ayuda?</h3>
              <p className="text-sm text-muted-foreground mb-4">Si necesitas recomendaciones personalizadas, habla con nuestro asistente Jamito.</p>
              <Button 
                className="w-full bg-jama-primary hover:bg-jama-primary/90"
                onClick={() => navigate('/chat')}
              >
                Hablar con Jamito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
