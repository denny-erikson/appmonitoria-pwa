import { AuthProvider } from './contexts/AuthContext';
import { EventProvider } from './contexts/EventContext';
import { AppRoutes } from './routes';
import { GlobalStyle } from './styles/global';
import { ApolloProvider } from '@apollo/client';
import { client } from './services/api';

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <EventProvider>
          <GlobalStyle />
          <AppRoutes />
        </EventProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App; 