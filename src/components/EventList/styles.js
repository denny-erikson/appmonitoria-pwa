import styled from 'styled-components';

export const EventsContainer = styled.div`
  margin-top: 2rem;
`;

export const EventCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const EventTitle = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
`;

export const EventDate = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

export const EventDaily = styled.span`
  background: ${props => props.daily ? '#4CAF50' : '#FF9800'};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

export const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #f44336;
`; 