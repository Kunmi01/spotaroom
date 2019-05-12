import React from 'react';
import { Wrapper, Brand, NavBar } from './style';

const Header = () => (
  <Wrapper>
    <Brand>
      <strong>[ SPOT</strong>A<strong>ROOM ]</strong>
    </Brand>
    <NavBar>
      <li>
        <a href="./">The company</a>
      </li>
      <li>
        <a href="./">How we work</a>
      </li>
      <li>
        <a href="./">Contact us</a>
      </li>
    </NavBar>
  </Wrapper>
);

export default Header;
