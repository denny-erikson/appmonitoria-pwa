import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  HeaderContainer,
  Logo,
  UserInfo,
  UserName,
  LogoutButton
} from './styles';

export function Header() {  // Certifique-se que está sendo exportado
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm('Deseja realmente sair?')) {
      logout();
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Logo onClick={handleLogoClick}>Meu App</Logo>
      <UserInfo>
        <UserName>Olá, {user?.username || 'Usuário'}!</UserName>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </UserInfo>
    </HeaderContainer>
  );
} 