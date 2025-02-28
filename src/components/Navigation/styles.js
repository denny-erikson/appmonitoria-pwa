import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled(Link)`
  color: #2E7D32;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    background: #98D8A0;
  }
`; 