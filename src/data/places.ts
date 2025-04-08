
export interface Place {
  id: number;
  name: string;
  description: string;
  image: string;
  tags: string[];
  priceRange: '$' | '$$' | '$$$';
  noiseLevel: 'Bajo' | 'Medio' | 'Alto';
  location: string;
  distance: number; // in km
  foodType: string;
  mood: string[];
  rating: number;
  openingHours: string;
  phoneNumber: string;
  website: string;
}

export const places: Place[] = [
  {
    id: 1,
    name: "Café Tranquilo",
    description: "Un acogedor café con ambiente tranquilo para trabajar o leer. Especializado en café de origen y pasteles caseros.",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["tranquilo", "buen wifi", "enchufes", "café de especialidad"],
    priceRange: "$$",
    noiseLevel: "Bajo",
    location: "Centro",
    distance: 1.2,
    foodType: "Café y pasteles",
    mood: ["trabajo", "café solo"],
    rating: 4.7,
    openingHours: "7:00 - 20:00",
    phoneNumber: "+34 123 456 789",
    website: "www.cafetranquilo.es"
  },
  {
    id: 2,
    name: "Bistro Romántico",
    description: "Restaurante íntimo con iluminación tenue y música suave. Perfecto para cenas románticas y ocasiones especiales.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["romántico", "íntimo", "elegante", "premium"],
    priceRange: "$$$",
    noiseLevel: "Bajo",
    location: "Barrio Antiguo",
    distance: 2.5,
    foodType: "Mediterránea",
    mood: ["citas", "ocasiones especiales"],
    rating: 4.9,
    openingHours: "19:00 - 23:30",
    phoneNumber: "+34 987 654 321",
    website: "www.bistromantico.com"
  },
  {
    id: 3,
    name: "Parque Digital",
    description: "Espacioso local con zona de co-working, café gourmet y comida saludable. Ideal para trabajar o reuniones informales.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["buen wifi", "coworking", "enchufes", "saludable"],
    priceRange: "$$",
    noiseLevel: "Medio",
    location: "Distrito Tecnológico",
    distance: 3.1,
    foodType: "Saludable y Café",
    mood: ["trabajo", "reuniones"],
    rating: 4.5,
    openingHours: "8:00 - 21:00",
    phoneNumber: "+34 234 567 890",
    website: "www.parquedigital.com"
  },
  {
    id: 4,
    name: "Rincón Familiar",
    description: "Restaurante familiar con zona de juegos para niños y menú especial infantil. Ambiente alegre y acogedor.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFtaWx5JTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["familiar", "zona infantil", "menú niños", "acogedor"],
    priceRange: "$$",
    noiseLevel: "Alto",
    location: "Zona Residencial",
    distance: 4.2,
    foodType: "Casera Internacional",
    mood: ["salidas familiares"],
    rating: 4.3,
    openingHours: "12:00 - 22:00",
    phoneNumber: "+34 345 678 901",
    website: "www.rincofamiliar.es"
  },
  {
    id: 5,
    name: "La Terraza",
    description: "Espacio al aire libre con vistas a la ciudad. Especializados en tapas y cócteles creativos.",
    image: "https://images.unsplash.com/photo-1590846083693-f23fcf4d7aba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvb2Z0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["terraza", "vistas", "cócteles", "tapas"],
    priceRange: "$$$",
    noiseLevel: "Medio",
    location: "Azotea Central",
    distance: 2.0,
    foodType: "Tapas y Cócteles",
    mood: ["citas", "salidas con amigos"],
    rating: 4.6,
    openingHours: "18:00 - 02:00",
    phoneNumber: "+34 456 789 012",
    website: "www.laterraza.com"
  },
  {
    id: 6,
    name: "Café del Arte",
    description: "Cafetería con exposiciones de arte local, eventos culturales y una gran selección de tés y cafés.",
    image: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFydCUyMGNhZmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["arte", "eventos", "té de especialidad", "tranquilo"],
    priceRange: "$$",
    noiseLevel: "Bajo",
    location: "Barrio Artístico",
    distance: 1.8,
    foodType: "Café y Repostería",
    mood: ["café solo", "cultural"],
    rating: 4.4,
    openingHours: "10:00 - 22:00",
    phoneNumber: "+34 567 890 123",
    website: "www.cafedelarte.es"
  }
];
