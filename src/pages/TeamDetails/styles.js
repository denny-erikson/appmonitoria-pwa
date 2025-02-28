import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TeamHeader = styled.div`
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e1e1e1;

  h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 8px;
  }
`;

export const TeamInfo = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 32px;

  h2 {
    color: #34495e;
    margin-bottom: 16px;
    font-size: 1.5rem;
  }

  p {
    color: #576574;
    margin-bottom: 12px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const MembersList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;

export const MemberItem = styled.li`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  p {
    margin: 8px 0;
    color: #576574;
  }

  p:first-child {
    font-weight: bold;
    color: #2c3e50;
    font-size: 1.1rem;
  }

  .status {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    background: ${props => props.status === 'AVAILABLE' ? '#e1f6e1' : '#ffe5e5'};
    color: ${props => props.status === 'AVAILABLE' ? '#2ecc71' : '#e74c3c'};
  }

  .summoned {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 4px;
    background: ${props => props.summoned ? '#e1f6e1' : '#f5f6fa'};
    color: ${props => props.summoned ? '#2ecc71' : '#7f8c8d'};
  }
`; 