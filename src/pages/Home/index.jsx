import { useAuth } from '../../contexts/AuthContext';

export function Home() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Bem-vindo, {user?.name}!</h1>
      <button onClick={logout}>Sair</button>
    </div>
  );
} 