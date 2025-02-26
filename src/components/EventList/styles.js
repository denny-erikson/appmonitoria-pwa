import styled from 'styled-components';

export const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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

export const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
`;

export const FilterActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const ClearFiltersButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d32f2f;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  margin-top: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PaginationInfo = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

export const PaginationControls = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PaginationButton = styled.button`
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  min-width: 100px;
  text-align: center;

  &:hover:not(:disabled) {
    background-color: #0052a3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:first-child {
    background-color: ${props => props.disabled ? '#ccc' : '#666'};
    
    &:hover:not(:disabled) {
      background-color: #444;
    }
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

export const ListContainer = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const VirtualizedListContainer = styled.div`
  flex: 1;
  min-height: 0;
`; 