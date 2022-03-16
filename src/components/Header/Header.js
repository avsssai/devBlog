import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Moon } from 'react-feather';
import useDarkMode from '../../hooks/useDarkMode';
import bust from '../../../public/bust-2.svg';

const Header = () => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const size = 100;
  return (
    <HeaderWrapper>
      <Logo>
        <Image src={bust} alt="cartoon of Siva" width={size} height={size} />
      </Logo>
      <HeaderRightContent>
        <Item>blog</Item>
        <Item>
          <Moon onClick={toggleDarkMode} />
        </Item>
      </HeaderRightContent>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-primary);
  font-weight: 700;
`;
const Logo = styled.span``;
const HeaderRightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-right: 1rem;
`;
const Item = styled.span`
  color: var(--color-textPrimary);
  font-size: 1.5rem;
`;

export default Header;
