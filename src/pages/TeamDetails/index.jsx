import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { gql } from '@apollo/client';
import { Container, TeamHeader, TeamInfo, MembersList, MemberItem } from './styles';

const GET_TEAM = gql`
  query GetTeamByEventId($eventId: ID!) {
    allTeams(eventId: $eventId) {
      id
      name
      status
      membersCount
      event {
        id
        name
      }
      availabilities {
        id
        profile {
          id
          name
        }
        status
        summoned
      }
    }
  }
`;

const TeamDetails = () => {
  const { eventId } = useParams();
  const { loading, error, data } = useQuery(GET_TEAM, {
    variables: { eventId },
  });

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  const team = data.allTeams[0];

  return (
    <Container>
      <TeamHeader>
        <h1>{team.name}</h1>
      </TeamHeader>

      <TeamInfo>
        <h2>Detalhes do Time</h2>
        <p>
          <span>Status:</span> 
          <span className="status">{team.status}</span>
        </p>
        <p>
          <span>Número de Membros:</span> 
          <span>{team.membersCount}</span>
        </p>
        <p>
          <span>Evento:</span> 
          <span>{team.event.name}</span>
        </p>
      </TeamInfo>

      <TeamInfo>
        <h2>Membros Disponíveis</h2>
        <MembersList>
          {team.availabilities.map((availability) => (
            <MemberItem 
              key={availability.id}
              status={availability.status}
              summoned={availability.summoned}
            >
              <p>{availability.profile.name}</p>
              <p>
                Status: 
                <span className="status">{availability.status}</span>
              </p>
              <p>
                Convocado: 
                <span className="summoned">
                  {availability.summoned ? 'Sim' : 'Não'}
                </span>
              </p>
            </MemberItem>
          ))}
        </MembersList>
      </TeamInfo>
    </Container>
  );
};

export default TeamDetails; 