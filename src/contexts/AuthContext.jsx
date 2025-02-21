import { createContext, useState, useContext } from 'react';
import { client, LOGIN_MUTATION } from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    try {
      const { data } = await client.mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          username,
          password,
        },
      });

      if (!data || !data.tokenAuth || !data.tokenAuth.token) {
        throw new Error('Token não recebido');
      }

      const { token } = data.tokenAuth;
      
      localStorage.setItem('@App:token', token);
      setUser({ username });
      
      return data;
    } catch (error) {
      console.error('Erro detalhado:', error);
      if (error.graphQLErrors) {
        const message = error.graphQLErrors[0]?.message || 'Erro na autenticação';
        throw new Error(message);
      }
      throw new Error('Erro ao fazer login. Por favor, verifique suas credenciais.');
    }
  };

  const logout = () => {
    localStorage.removeItem('@App:token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
} 