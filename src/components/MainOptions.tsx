
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, MapPin } from 'lucide-react';

const MainOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
      <button
        onClick={() => navigate('/chat')}
        className="bg-gradient-to-br from-jama-primary to-jama-primary/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-white flex flex-col items-center justify-center min-h-[240px]"
      >
        <MessageSquare size={64} className="mb-4" />
        <h2 className="text-2xl font-bold">Habla con Jamito</h2>
        <p className="mt-2 text-white/80">Encuentra el lugar perfecto con ayuda de IA</p>
      </button>

      <button
        onClick={() => navigate('/places')}
        className="bg-gradient-to-br from-jama-secondary to-jama-secondary/80 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-white flex flex-col items-center justify-center min-h-[240px]"
      >
        <MapPin size={64} className="mb-4" />
        <h2 className="text-2xl font-bold">Explorar lugares</h2>
        <p className="mt-2 text-white/80">Descubre recomendaciones por categoría</p>
      </button>
    </div>
  );
};

export default MainOptions;
