import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
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