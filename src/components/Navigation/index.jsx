import React from 'react';
import { NavContainer, NavLink } from './styles';

const Navigation = () => {
  return (
    <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/events/1/teams/create">Criar Time</NavLink>
      {/* Você pode adicionar mais links aqui */}
    </NavContainer>
  );
};

export default Navigation; 