import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { client, GET_EVENT_DETAILS } from '../../services/api';
import { Header } from '../../components/Header'; // Você precisará criar este componente
import {
  Container,
  Content,
  EventCard,
  EventHeader,
  EventTitle,
  EventStatus,
  EventInfo,
  InfoItem,
  BackButton,
} from './styles';

export function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        setLoading(true);
        const { data } = await client.query({
          query: GET_EVENT_DETAILS,
          variables: { id },
        });
        
        // Aqui está a correção: usando eventById em vez de event
        setEvent(data.eventById);
      } catch (err) {
        console.error('Erro ao buscar detalhes do evento:', err);
        setError('Não foi possível carregar os detalhes do evento.');
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const formatDaily = (daily) => {
    // Converte o valor da diária para número e formata como moeda
    return Number(daily).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  if (loading) {
    return (
      <Container>
        <Header />
        <Content>
          <BackButton onClick={() => navigate(-1)}>Voltar</BackButton>
          <div>Carregando...</div>
        </Content>
      </Container>
    );
  }

  if (error || !event) {
    return (
      <Container>
        <Header />
        <Content>
          <BackButton onClick={() => navigate(-1)}>Voltar</BackButton>
          <div>{error || 'Evento não encontrado.'}</div>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <Content>
        <BackButton onClick={() => navigate(-1)}>Voltar</BackButton>
        
        <EventCard>
          <EventHeader>
            <div>
              <EventTitle>{event.name}</EventTitle>
              <EventStatus status={event.status}>
                {event.status === 'active' ? 'Ativo' : 'Inativo'}
              </EventStatus>
            </div>
          </EventHeader>

          <EventInfo>
            <InfoItem>
              <h3>Data de Início</h3>
              <p>{formatDate(event.startDate)}</p>
            </InfoItem>
            <InfoItem>
              <h3>Data de Término</h3>
              <p>{formatDate(event.endDate)}</p>
            </InfoItem>
            <InfoItem>
              <h3>Valor da Diária</h3>
              <p>{formatDaily(event.daily)}</p>
            </InfoItem>
            <InfoItem>
              <h3>Local</h3>
              <p>{event.location || 'Não especificado'}</p>
            </InfoItem>
          </EventInfo>

          {event.description && (
            <InfoItem>
              <h3>Descrição</h3>
              <p>{event.description}</p>
            </InfoItem>
          )}
        </EventCard>
      </Content>
    </Container>
  );
} 