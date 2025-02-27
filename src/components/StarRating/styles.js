import styled from 'styled-components';

export const StarContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0 0.5rem;
`;

export const Star = styled.span`
  color: ${props => props.$filled ? '#FFD700' : '#D3D3D3'};
  font-size: 1.2rem;
`; 