import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './routes';
import { GlobalStyle } from './styles/global';
import { ApolloProvider } from '@apollo/client';
import { client } from './services/api';

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <GlobalStyle />
        <AppRoutes />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App; 