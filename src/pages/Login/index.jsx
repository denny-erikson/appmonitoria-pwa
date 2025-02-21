import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Container, FormContainer, Input, Button } from './styles';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (!username || !password) {
        throw new Error('Por favor, preencha todos os campos');
      }

      await login(username, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.error('Erro no login:', error);
    }
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuário"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required
        />
        <Button type="submit">Entrar</Button>
      </FormContainer>
    </Container>
  );
} 