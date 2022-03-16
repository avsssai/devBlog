import React from 'react';
import styled from 'styled-components';
import { ArrowDown } from 'react-feather';
const HomePage = () => {
  return (
    <Wrapper>
      <Name>
        <Row>
          <Intro>Hi, I'm</Intro>
          Siva
        </Row>

        <Row>Sesha</Row>
        <Row>Sai</Row>
      </Name>
      <Work>I design, develop and deploy web applications.</Work>
      <HomeButtons>
        <Button>gitHub</Button>
        <Button>twitter</Button>
      </HomeButtons>
      <BottomNavContent>
        <ArrowDown size={48} />
        <Navs>
          <Nav>about</Nav>
          <Nav>contact</Nav>
          <Nav>work</Nav>
        </Navs>
      </BottomNavContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem 0;
  color: var(--color-textPrimary);
`;

const Row = styled.div`
  display: flex;
  font-size: 6rem;
  font-weight: 900;
  line-height: 6rem;
  justify-content: flex-end;
`;
const Intro = styled.span`
  font-size: 1.5rem;
  margin-right: 1rem;
  font-weight: 600;
  line-height: 4rem;
  color: var(--color-textSecondary);
`;

const Name = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const Work = styled.div`
  font-size: 1.5rem;
  margin-top: 2rem;
  font-weight: 600;
  color: var(--color-textSecondary);
  text-align: center;
`;

const HomeButtons = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
`;
const Button = styled.div`
  border: 2px solid var(--color-textPrimary);
  padding: 1rem 2rem;
  background: var(--color-background);
  color: var(--color-textPrimary);
  font-weight: 900;
  font-size: 1.25rem;
  cursor: pointer;
  border-radius: 5px;
`;

const BottomNavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 2rem;
`;
const Navs = styled.ul`
  list-style: none;
`;
const Nav = styled.li`
  margin: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;
export default HomePage;
