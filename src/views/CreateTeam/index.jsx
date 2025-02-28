import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { CREATE_TEAM } from './graphql';
import { 
  Container, 
  FormWrapper, 
  Title, 
  Form, 
  Input, 
  Button,
  SuccessMessage,
  ErrorMessage 
} from './styles';

const CreateTeamView = () => {
  const { eventId } = useParams();
  const [teamName, setTeamName] = useState('');
  const [maxAvailabilities, setMaxAvailabilities] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });

  const [createTeam, { loading }] = useMutation(CREATE_TEAM, {
    onCompleted: (data) => {
      if (data.createTeam.success) {
        setMessage({ type: 'success', text: 'Time criado com sucesso!' });
        setTeamName('');
        setMaxAvailabilities('');
      } else {
        setMessage({ type: 'error', text: data.createTeam.message });
      }
    },
    onError: (error) => {
      setMessage({ type: 'error', text: error.message });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTeam({
      variables: {
        eventId: eventId,
        name: teamName,
        maxAvailabilities: parseInt(maxAvailabilities) || null
      }
    });
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Criar Novo Time</Title>
        
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome do Time"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
          
          <Input
            type="number"
            placeholder="Máximo de Disponibilidades"
            value={maxAvailabilities}
            onChange={(e) => setMaxAvailabilities(e.target.value)}
            min="0"
          />
          
          <Button type="submit" disabled={loading}>
            {loading ? 'Criando...' : 'Criar Time'}
          </Button>
        </Form>

        {message.type === 'success' && (
          <SuccessMessage>{message.text}</SuccessMessage>
        )}
        
        {message.type === 'error' && (
          <ErrorMessage>{message.text}</ErrorMessage>
        )}
      </FormWrapper>
    </Container>
  );
};

export default CreateTeamView; 