import { Header } from '../../components/Header';
import { EventList } from '../../components/EventList';
import { Container, Content } from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <EventList />
      </Content>
    </Container>
  );
} 