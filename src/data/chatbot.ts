
interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface QuickReply {
  id: string;
  text: string;
  response: string;
}

export const initialMessages: Message[] = [
  {
    id: "1",
    role: "bot",
    content: "¡Hola! Soy Jamito, tu asistente para encontrar el lugar perfecto. ¿Cómo puedo ayudarte hoy?",
    timestamp: new Date()
  }
];

export const quickReplies: QuickReply[] = [
  {
    id: "1",
    text: "Quiero encontrar un lugar tranquilo para trabajar",
    response: "¡Genial! Si buscas un lugar tranquilo para trabajar, te recomendaría 'Café Tranquilo' o 'Parque Digital'. Ambos tienen buen WiFi y enchufes disponibles. ¿Prefieres un ambiente más silencioso o estás bien con un ruido de fondo moderado?"
  },
  {
    id: "2",
    text: "Busco un restaurante para una cita",
    response: "¡Perfecto para una cita! Te sugeriría 'Bistro Romántico' o 'La Terraza'. El primero es más íntimo con iluminación tenue, mientras que 'La Terraza' ofrece vistas espectaculares de la ciudad. ¿Prefieres un ambiente más íntimo o con vistas?"
  },
  {
    id: "3",
    text: "Necesito un lugar para ir con niños",
    response: "Para una salida con niños, 'Rincón Familiar' es una excelente opción. Tienen una zona de juegos para niños y menús infantiles especiales. ¿Te gustaría saber más detalles sobre sus instalaciones para niños o quieres ver otras opciones?"
  },
  {
    id: "4",
    text: "Solo quiero tomar un café",
    response: "¡Un buen café siempre es una gran idea! Te recomendaría 'Café Tranquilo' que se especializa en café de origen, o 'Café del Arte' donde puedes disfrutar de exposiciones mientras tomas tu café. ¿Prefieres un ambiente más tranquilo o cultural?"
  }
];

// Más respuestas generales para cuando el usuario escribe
export const generalResponses: Array<{keyword: string; response: string}> = [
  {
    keyword: "hola",
    response: "¡Hola! ¿Cómo puedo ayudarte a encontrar el lugar perfecto hoy?"
  },
  {
    keyword: "gracias",
    response: "¡De nada! Estoy aquí para ayudarte. ¿Hay algo más en lo que pueda asistirte?"
  },
  {
    keyword: "restaurante",
    response: "Tengo varias recomendaciones de restaurantes dependiendo de lo que estés buscando. ¿Prefieres algo romántico, familiar, o tal vez con una vista especial?"
  },
  {
    keyword: "barato",
    response: "Si buscas opciones más económicas, puedo recomendarte lugares con buena relación calidad-precio. ¿Qué tipo de comida o ambiente te interesa?"
  },
  {
    keyword: "wifi",
    response: "Para lugares con buen WiFi, 'Café Tranquilo' y 'Parque Digital' son excelentes opciones. Ambos están diseñados pensando en personas que necesitan conectividad."
  }
];

export function getResponseForMessage(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Buscar en las respuestas generales
  for (const item of generalResponses) {
    if (lowerMessage.includes(item.keyword)) {
      return item.response;
    }
  }
  
  // Respuesta por defecto si no se encuentra coincidencia
  return "Entiendo lo que buscas. Puedo recomendarte varios lugares en función de tus preferencias. ¿Podrías darme más detalles sobre el tipo de lugar que estás buscando?";
}
