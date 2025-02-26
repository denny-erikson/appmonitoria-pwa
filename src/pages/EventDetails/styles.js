import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const EventCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const EventHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

export const EventTitle = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

export const EventStatus = styled.span`
  background: ${props => props.status === 'active' ? '#4CAF50' : '#FF9800'};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

export const EventInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const InfoItem = styled.div`
  h3 {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #333;
    font-size: 1.1rem;
  }
`;

export const BackButton = styled.button`
  background: #666;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 1rem;

  &:hover {
    background: #444;
  }
`; 