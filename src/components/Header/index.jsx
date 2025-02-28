import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  HeaderContainer,
  Logo,
  UserInfo,
  UserName,
  LogoutButton
} from './styles';
import Navigation from '../Navigation';
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
      <Logo onClick={handleLogoClick}>MonitoriaApp</Logo>
      <Navigation />
      <UserInfo>
        <UserName>Olá, {user?.username || 'Usuário'}!</UserName>
        <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
      </UserInfo>
    </HeaderContainer>
  );
} 