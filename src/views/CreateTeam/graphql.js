import { gql } from '@apollo/client';

export const CREATE_TEAM = gql`
  mutation CreateTeam($eventId: ID!, $name: String!, $maxAvailabilities: Int) {
    createTeam(eventId: $eventId, name: $name, maxAvailabilities: $maxAvailabilities) {
      team {
        id
        name
      }
      success
      message
    }
  }
`; 