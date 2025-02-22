import { useAuth } from '../../contexts/AuthContext';
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
        <Logo>Monitoria App</Logo>
        <UserInfo>
          <UserName>Olá, {user?.username || 'Usuário'}!</UserName>
          <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
        </UserInfo>
      </Header>

      <Content>
        <WelcomeCard>
          <h2>Bem-vindo ao Monitoria App</h2>
          <h4>Dashboard</h4>
          <p>
            Este é seu painel de controle. Aqui você pode gerenciar todas as suas
            informações e acessar as funcionalidades do sistema.
          </p>
        </WelcomeCard>

        {/* Aqui você pode adicionar mais conteúdo, como cards, tabelas, etc. */}
      </Content>
    </Container>
  );
} 