import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const Header = styled.header`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  color: #0066cc;
  font-size: 1.5rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserName = styled.span`
  color: #333;
  font-weight: 500;
`;

export const LogoutButton = styled.button`
  background-color: #ff4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #cc0000;
  }
`;

export const Content = styled.main`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
`;

export const WelcomeCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2 {
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`; 