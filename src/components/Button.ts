import styled from 'styled-components';

export const BorderedButton = styled.button`
  background-color: white;
  padding: ${({ theme }) => theme.space.M}px;
  margin: ${({ theme }) => theme.space.M}px;
  width: 200px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 700;
  border-radius: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const FilledButton = styled(BorderedButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: white;
`;

export default BorderedButton;
