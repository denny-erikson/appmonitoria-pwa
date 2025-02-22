import { createContext, useState, useContext, useEffect } from 'react';
import { client, LOGIN_MUTATION } from '../services/api';
import { jwtDecode } from 'jwt-decode'; // Correção na importação
import { Loading } from '../components/Loading';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStorageData = () => {
      const token = localStorage.getItem('@App:token');
      
      if (token) {
        try {
          // Decodifica o token para obter as informações do usuário
          const decoded = jwtDecode(token); // Correção no uso
          
          // Verifica se o token não está expirado
          if (decoded.exp * 1000 > Date.now()) {
            setUser({ username: decoded.username });
          } else {
            // Se o token estiver expirado, faz logout
            localStorage.removeItem('@App:token');
          }
        } catch (error) {
          console.error('Erro ao decodificar token:', error);
          localStorage.removeItem('@App:token');
        }
      }
      
      setLoading(false);
    };

    loadStorageData();
  }, []);

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
      
      // Decodifica o token para obter as informações do usuário
      const decoded = jwtDecode(token); // Correção no uso
      setUser({ username: decoded.username });
      
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

  if (loading) {
    return <Loading />;
  }

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