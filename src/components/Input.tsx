import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export const StyledInput = styled.input`
  background-color: white;
  padding: ${({ theme }) => theme.space.S}px ${({ theme }) => theme.space.L}px;
  margin: ${({ theme }) => theme.space.M}px;
  width: 200px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  border-radius: 20px;
  outline: none;
`;

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => <StyledInput {...props} />;

export default Input;
