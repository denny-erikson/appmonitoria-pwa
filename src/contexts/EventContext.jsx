import { createContext, useContext, useState, useEffect } from 'react';
import { client, GET_EVENTS } from '../services/api';

const EventContext = createContext({});

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const { data } = await client.query({
        query: GET_EVENTS,
        fetchPolicy: 'network-only', // Garante dados atualizados
      });
      
      setEvents(data.allEvents);
      setError(null);
    } catch (err) {
      console.error('Erro ao buscar eventos:', err);
      setError('Não foi possível carregar os eventos.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <EventContext.Provider value={{ events, loading, error, refetchEvents: fetchEvents }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvents deve ser usado dentro de um EventProvider');
  }
  return context;
} 