import styled from 'styled-components';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Image from 'next/image';
import profileImage from '../../public/bust-2-big.svg';

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const RightContent = styled.div`
  display: none;
  @media (min-width: 1101px) {
    display: flex;
    background: var(--color-secondary);
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ImageContainer = styled.div`
  height: fit-content;
  width: 100%;
  display: block;
  margin-top: 6rem;
`;

const NavLinks = styled.ul`
  margin-bottom: 6rem;
  margin-left: 0;
`;
const Nav = styled.li`
  list-style: none;
  cursor: pointer;
  font-size: 2rem;
  color: var(--color-textPrimary);
`;

export default function Home() {
  return (
    <>
      <Wrapper>
        <LeftContent>
          <Header />
          <HomePage />
        </LeftContent>
        <RightContent>
          <ImageContainer>
            <Image src={profileImage} responsive="true" />
          </ImageContainer>
          <NavLinks>
            <Nav>about</Nav>
            <Nav>contact</Nav>
            <Nav>work</Nav>
          </NavLinks>
        </RightContent>
      </Wrapper>
    </>
  );
}
