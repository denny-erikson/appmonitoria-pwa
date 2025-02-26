import { createContext, useContext, useState, useEffect } from 'react';
import { client, GET_EVENTS } from '../services/api';

const EventContext = createContext({});

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  
  // Filtros e paginação
  const [filters, setFilters] = useState({
    name: '',
    startDate: '',
    endDate: '',
    orderBy: '',
  });
  const [page, setPage] = useState(0);
  const LIMIT = 10;

  const fetchEvents = async (newPage = 0, newFilters = filters) => {
    try {
      setLoading(true);
      const { data } = await client.query({
        query: GET_EVENTS,
        variables: {
          offset: newPage * LIMIT,
          limit: LIMIT,
          ...newFilters,
        },
        fetchPolicy: 'network-only',
      });
      
      const { items, totalCount, hasNextPage } = data.allEvents;
      setEvents(items); // Sempre substituir os itens ao mudar de página
      setTotalCount(totalCount);
      setHasNextPage(hasNextPage);
      setPage(newPage);
      setError(null);
    } catch (err) {
      console.error('Erro ao buscar eventos:', err);
      setError('Não foi possível carregar os eventos.');
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (!loading && hasNextPage) {
      fetchEvents(page + 1);
    }
  };

  const loadPrevious = () => {
    if (!loading && page > 0) {
      fetchEvents(page - 1);
    }
  };

  const updateFilters = (newFilters) => {
    setFilters(prev => ({
      ...prev,
      ...newFilters
    }));
    setPage(0);
    fetchEvents(0, { ...filters, ...newFilters });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <EventContext.Provider 
      value={{ 
        events, 
        loading, 
        error, 
        hasNextPage,
        page,
        loadMore,
        loadPrevious,
        totalCount,
        filters,
        updateFilters,
        refetchEvents: () => fetchEvents(0)
      }}
    >
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