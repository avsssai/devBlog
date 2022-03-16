import React from 'react';
import styled from 'styled-components';
import { ArrowDown, MapPin } from 'react-feather';
const HomePage = () => {
  return (
    <Wrapper>
      <Name>
        <Row>
          <Intro>Hi, I'm</Intro>
          Siva
        </Row>

        <Row
          style={{
            color: 'var(--color-accentPink)'
          }}
        >
          Sesha
        </Row>
        <Row
          style={{
            color: 'var(--color-accentYellow)'
          }}
        >
          Sai
        </Row>
      </Name>
      <Work>
        Full-stack developer mastering the art of building{' '}
        <HighlightPink>visually stunning</HighlightPink> and{' '}
        <HighlightYellow>accessible</HighlightYellow> websites.
      </Work>
      <Location>
        <MapPin /> <Text>Hyderabad</Text>
      </Location>
      <HomeButtons>
        <Button>gitHub</Button>
        <Button>twitter</Button>
      </HomeButtons>
      {/* <BottomNavContent>
        <ArrowDown size={48} />
        <Navs>
          <Nav>about</Nav>
          <Nav>contact</Nav>
          <Nav>work</Nav>
        </Navs>
      </BottomNavContent> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem 0;
  color: var(--color-textPrimary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  font-size: 5rem;
  font-weight: 900;
  line-height: 4rem;
  letter-spacing: 0.1rem;
  justify-content: flex-end;
`;
const Intro = styled.span`
  font-size: 1rem;
  margin-right: 1rem;
  font-weight: 600;
  line-height: 4rem;
  color: var(--color-textSecondary);
`;

const Name = styled.div`
  width: fit-content;
`;

const Work = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-textSecondary);
  text-align: center;
  padding: 8px;
  margin: 2rem 0;
`;

const HomeButtons = styled.div`
  display: flex;
  gap: 2rem;

  justify-content: space-evenly;
`;
const Button = styled.div`
  border: 2px solid var(--color-textPrimary);
  padding: 0.75rem;
  background: var(--color-background);
  color: var(--color-textPrimary);
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
`;

const HighlightYellow = styled.span`
  color: var(--color-accentYellowDark);
`;
const HighlightPink = styled.span`
  color: var(--color-accentPink);
`;
const BottomNavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Navs = styled.ul`
  list-style: none;
`;
const Nav = styled.li`
  font-size: 1.25rem;
  font-weight: 600;
`;
const Location = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  font-weight: 900;
`;
const Text = styled.span``;
export default HomePage;
