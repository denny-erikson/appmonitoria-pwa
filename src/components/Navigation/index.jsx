import React from 'react';
import { NavContainer, NavLink } from './styles';

const Navigation = () => {
  return (
    <NavContainer>
      <NavLink to="/events/4/teams/create">Criar Time</NavLink>
      
      {/* Você pode adicionar mais links aqui */}
    </NavContainer>
  );
};

export default Navigation; 