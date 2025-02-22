import { useAuth } from '../../contexts/AuthContext';
import { EventList } from '../../components/EventList';
import {
  Container,
  Header,
  Logo,
  UserInfo,
  UserName,
  LogoutButton,
  Content,
  WelcomeCard
} from './styles';

export function Home() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    if (window.confirm('Deseja realmente sair?')) {
      logout();
    }
  };

  return (
    <Container>
      <Header>
        <Logo>Meu App</Logo>
        <UserInfo>
          <UserName>Olá, {user?.username || 'Usuário'}!</UserName>
          <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
        </UserInfo>
      </Header>

      <Content>
        <WelcomeCard>
          <h2>Seus Eventos</h2>
          <p>
            Aqui está a lista de todos os seus eventos cadastrados no sistema.
          </p>
        </WelcomeCard>

        <EventList />
      </Content>
    </Container>
  );
} 