
import { useState, useEffect } from 'react';
import { Place } from '@/data/places';
import { useToast } from '@/hooks/use-toast';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Place[]>([]);
  const { toast } = useToast();
  
  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('jama-favorites');
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        console.error('Error parsing favorites:', error);
      }
    }
  }, []);
  
  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('jama-favorites', JSON.stringify(favorites));
  }, [favorites]);
  
  const addFavorite = (place: Place) => {
    setFavorites(prev => [...prev, place]);
    toast({
      title: "Añadido a favoritos",
      description: `${place.name} ha sido añadido a tus favoritos`,
    });
  };
  
  const removeFavorite = (placeId: number) => {
    const placeToRemove = favorites.find(fav => fav.id === placeId);
    setFavorites(prev => prev.filter(place => place.id !== placeId));
    if (placeToRemove) {
      toast({
        title: "Eliminado de favoritos",
        description: `${placeToRemove.name} ha sido eliminado de tus favoritos`,
      });
    }
  };
  
  const toggleFavorite = (place: Place) => {
    if (isFavorite(place.id)) {
      removeFavorite(place.id);
    } else {
      addFavorite(place);
    }
  };
  
  const isFavorite = (placeId: number) => {
    return favorites.some(place => place.id === placeId);
  };
  
  return { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite };
};
