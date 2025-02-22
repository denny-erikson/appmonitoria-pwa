import { useEvents } from '../../contexts/EventContext';
import {
  EventsContainer,
  EventCard,
  EventTitle,
  EventDate,
  EventDaily,
  LoadingMessage,
  ErrorMessage
} from './styles';

export function EventList() {
  const { events, loading, error } = useEvents();

  if (loading) {
    return <LoadingMessage>Carregando eventos...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <EventsContainer>
      {events.map(event => (
        <EventCard key={event.id}>
          <EventTitle>{event.name}</EventTitle>
          <EventDate>
            De {formatDate(event.startDate)} até {formatDate(event.endDate)}
          </EventDate>
          <EventDaily daily={event.daily}>
            {event.daily ? 'Diário' : 'Não Diário'}
          </EventDaily>
        </EventCard>
      ))}
      {events.length === 0 && (
        <LoadingMessage>Nenhum evento encontrado.</LoadingMessage>
      )}
    </EventsContainer>
  );
} 