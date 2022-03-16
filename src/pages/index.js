import styled from 'styled-components';
import Header from '../components/Header';
import HomePage from '../components/HomePage';

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  margin: 0 1rem;
`;

export default function Home() {
  return (
    <>
      <Wrapper>
        <Header />
        <HomePage />
      </Wrapper>
    </>
  );
}
