import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Moon } from 'react-feather';
import useDarkMode from '../../hooks/useDarkMode';
import bust from '../../assets/bust-2.svg';

const Header = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const size = 50;
  return (
    <HeaderWrapper>
      <Logo>
        <ImageContainer>
          <Image src={bust} alt="cartoon of Siva" width={size} height={size} />
        </ImageContainer>
        <Name>Siva Sesha Sai</Name>
      </Logo>
      <HeaderRightContent>
        <Item>about</Item>
        <Item>blog</Item>
        <Item>
          <Moon onClick={toggleDarkMode} />
        </Item>
      </HeaderRightContent>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-textPrimary);
`;
const Logo = styled.span`
  font-family: var(--font-secondary);
  color: var(--color-textPrimary);
  font-size: 1rem;
  margin-left: 24px;
  @media (min-width: 640px) {
    font-size: 2rem;
    display: flex;
    align-items: center;
  }
`;
const HeaderRightContent = styled.div`
  display: flex;
  gap: 16px;
  font-size: 0.725rem;
  margin-right: 24px;
  font-family: inherit;
  font-weight: 600;
  color: var(--color-textPrimary);
  align-items: center;
  @media (min-width: 640px) {
    gap: 32px;
    font-size: 1rem;
  }
`;

const Name = styled.div``;
const ImageContainer = styled.div`
  display: none;
  @media (min-width: 640px) {
    display: block;
  }
`;

const Item = styled.span``;

// const HeaderWrapper = styled.header`
//   position: sticky;
//   left: 0;
//   top: 0;
//   display: flex;
//   padding: 4px 6rem;
//   justify-content: space-between;
//   align-items: center;
//   font-family: var(--font-primary);
//   font-weight: 700;
//   border-bottom: 1px solid var(--color-textPrimary);
//   z-index: 1000;
// `;
// const Logo = styled.span``;
// const HeaderRightContent = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 2rem;
//   margin-right: 1rem;
// `;
// const Item = styled.span`
//   color: var(--color-textPrimary);
//   font-size: 1.5rem;
// `;

export default Header;
