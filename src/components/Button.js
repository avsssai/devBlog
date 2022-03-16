import styled from 'styled-components';
import useDarkMode from '../hooks/useDarkMode';

export default function Button({ children }) {
  const [, toggleThemeFunction] = useDarkMode();
  function toggleTheme() {
    toggleThemeFunction();
  }
  return <ButtonComponent onClick={toggleTheme}>{children}</ButtonComponent>;
}

const ButtonComponent = styled.button`
  padding: 10px;
  font-size: 1.25rem;
  color: var(--color-textPrimary);
  background: var(--color-background);
`;
