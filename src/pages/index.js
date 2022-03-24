import styled from 'styled-components';
import Blog from '../components/Blog/Blog';
import Header from '../components/Header';
import LandingPage from '../components/LandingPage';

const ApplicationWrapper = styled.main`
  max-width: 1600px;
  margin: 0 auto;
`;

export default function Home() {
  return (
    <>
      <ApplicationWrapper>
        <Header />
        <LandingPage />
        <Blog />
      </ApplicationWrapper>
    </>
  );
}
