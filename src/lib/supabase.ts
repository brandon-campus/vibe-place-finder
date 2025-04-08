import { createClient } from '@supabase/supabase-js'

// Trae las claves que pusiste en el archivo .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!

// Crea la conexión a tu base de datos
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Category {
  id: number;
  name: string;
  icon: string;
  created_at: string;
}

export interface Place {
  id: number;
  created_at: string;
  name: string;
  description: string;
  address: string;
  hours: string;
  rating: number;
  price_range: string;
  website: string;
  phone: string;
  category_id: number;
  image?: string;
  categories?: Category;
}

export async function getPlaces() {
  console.log('Fetching places...');
  const { data, error } = await supabase
    .from('places')
    .select(`
      *,
      categories (
        id,
        name,
        icon
      )
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching places:', error);
    return [];
  }

  console.log('Places fetched:', data);
  return data;
}
