
import React from 'react';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

export interface FilterState {
  noiseLevel: string[];
  priceRange: string[];
  maxDistance: number;
  foodTypes: string[];
  mood: string[];
}

interface PlaceFiltersProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const PlaceFilters: React.FC<PlaceFiltersProps> = ({ filters, setFilters }) => {
  const toggleNoiseLevel = (level: string) => {
    setFilters(prev => {
      if (prev.noiseLevel.includes(level)) {
        return { ...prev, noiseLevel: prev.noiseLevel.filter(l => l !== level) };
      } else {
        return { ...prev, noiseLevel: [...prev.noiseLevel, level] };
      }
    });
  };

  const togglePriceRange = (range: string) => {
    setFilters(prev => {
      if (prev.priceRange.includes(range)) {
        return { ...prev, priceRange: prev.priceRange.filter(r => r !== range) };
      } else {
        return { ...prev, priceRange: [...prev.priceRange, range] };
      }
    });
  };

  const setMood = (value: string) => {
    setFilters(prev => ({ ...prev, mood: [value] }));
  };

  const setFoodType = (value: string) => {
    setFilters(prev => ({ ...prev, foodTypes: [value] }));
  };

  return (
    <div className="space-y-6 p-4 bg-card rounded-lg shadow">
      <div>
        <h3 className="text-lg font-medium mb-3">Filtros</h3>
        <p className="text-sm text-muted-foreground mb-6">Encuentra el lugar perfecto según tus preferencias</p>
      </div>
      
      {/* Nivel de ruido */}
      <div className="space-y-3">
        <h4 className="font-medium">Nivel de ruido</h4>
        <div className="flex flex-wrap gap-3">
          {['Bajo', 'Medio', 'Alto'].map((level) => (
            <div key={level} className="flex items-center gap-2">
              <Switch 
                checked={filters.noiseLevel.includes(level)} 
                onCheckedChange={() => toggleNoiseLevel(level)}
              />
              <Label>{level}</Label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Rango de precio */}
      <div className="space-y-3">
        <h4 className="font-medium">Rango de precio</h4>
        <div className="flex flex-wrap gap-3">
          {['$', '$$', '$$$'].map((range) => (
            <div key={range} className="flex items-center gap-2">
              <Switch 
                checked={filters.priceRange.includes(range)} 
                onCheckedChange={() => togglePriceRange(range)}
              />
              <Label>{range}</Label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Distancia */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h4 className="font-medium">Distancia máxima</h4>
          <span className="text-sm text-muted-foreground">{filters.maxDistance} km</span>
        </div>
        <Slider 
          value={[filters.maxDistance]} 
          min={1} 
          max={10} 
          step={0.5} 
          onValueChange={(value) => setFilters(prev => ({ ...prev, maxDistance: value[0] }))}
        />
      </div>
      
      {/* Tipo de comida */}
      <div className="space-y-3">
        <h4 className="font-medium">Tipo de comida</h4>
        <Select onValueChange={setFoodType} value={filters.foodTypes[0] || ''}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Todos</SelectItem>
            <SelectItem value="Café y pasteles">Café y pasteles</SelectItem>
            <SelectItem value="Mediterránea">Mediterránea</SelectItem>
            <SelectItem value="Saludable y Café">Saludable y Café</SelectItem>
            <SelectItem value="Casera Internacional">Casera Internacional</SelectItem>
            <SelectItem value="Tapas y Cócteles">Tapas y Cócteles</SelectItem>
            <SelectItem value="Café y Repostería">Café y Repostería</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Estado de ánimo */}
      <div className="space-y-3">
        <h4 className="font-medium">Estado de ánimo</h4>
        <Select onValueChange={setMood} value={filters.mood[0] || ''}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Todos</SelectItem>
            <SelectItem value="trabajo">Trabajo</SelectItem>
            <SelectItem value="citas">Citas</SelectItem>
            <SelectItem value="salidas familiares">Salidas familiares</SelectItem>
            <SelectItem value="café solo">Café solo</SelectItem>
            <SelectItem value="salidas con amigos">Salidas con amigos</SelectItem>
            <SelectItem value="cultural">Cultural</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default PlaceFilters;
