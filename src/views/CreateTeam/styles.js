import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f5f5;
`;

export const FormWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 500px;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #98D8A0;
  }
`;

export const Button = styled.button`
  background: #98D8A0;
  color: #2E7D32;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #7BC17F;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const SuccessMessage = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #98D8A0;
  color: #2E7D32;
  border-radius: 4px;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background: #FFB6B6;
  color: #C62828;
  border-radius: 4px;
  text-align: center;
`; 