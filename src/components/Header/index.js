import React from 'react';
import { Wrapper, Brand, NavBar } from './style';

const Header = () => (
  <Wrapper>
    <Brand>
      <strong>[ SPOT</strong>A<strong>ROOM ]</strong>
    </Brand>
    <NavBar>
      <li>
        <a href="./">The Company</a>
      </li>
      <li>
        <a href="./">How we work</a>
      </li>
      <li>
        <a href="./">Contact Us</a>
      </li>
    </NavBar>
  </Wrapper>
);

export default Header;
