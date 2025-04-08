import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import { Button } from "@/components/ui/button"

const TestSupabase = () => {
  const [places, setPlaces] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const { data, error } = await supabase
      .from("places")
      .select(`
        *,
        categories(name)
      `)

      if (error) {
      console.error("Error trayendo los datos:", error)
      } else {
        setPlaces(data)
    }
  }

  async function insertTestData() {
    setLoading(true)
    const { error } = await supabase.from("places").insert([
      {
        name: "Lugar de Prueba",
        description: "Este es un lugar de prueba",
        address: "Dirección de prueba",
        hours: "9:00-18:00",
        rating: 4.5,
        tags: "prueba,test",
        category_id: "bd62eae6-5763-4d27-9db5-b38e341390f8", // ID de la categoría "Citas"
        image_url: "https://picsum.photos/200"
      }
    ])

    if (error) {
      console.error("Error insertando datos:", error)
    } else {
      console.log("Datos insertados correctamente")
      fetchData() // Recargar los datos
    }
      setLoading(false)
    }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lugares guardados en Supabase</h2>
      <Button 
        onClick={insertTestData} 
        disabled={loading}
        className="mb-4"
      >
        {loading ? "Insertando..." : "Insertar Dato de Prueba"}
      </Button>
      <ul className="space-y-2">
          {places.map((place, index) => (
          <li key={index} className="p-2 border rounded">
              <strong>{place.name}</strong> - {place.description}
            <br />
            <small>Categoría: {place.categories?.name}</small>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TestSupabase
