import styled from 'styled-components';
import Button from '../components/Button';

const Title = styled.h1`
  font-size: 50px;
  color: 'black';
`;

const Wrapper = styled.div``;

export default function Home() {
  return (
    <Wrapper>
      <Title>My page</Title>
      <Button>toggle</Button>
    </Wrapper>
  );
}
