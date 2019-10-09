import React, { memo } from 'react';

import { Wrapper, Brand, NavBar, NavItem } from './style';

const Header = memo(() => (
  <Wrapper>
    <Brand>
      <strong>[ SPOT</strong>A<strong>ROOM ]</strong>
    </Brand>
    <NavBar>
      <NavItem>
        <a href="./">The company</a>
      </NavItem>
      <NavItem>
        <a href="./">How we work</a>
      </NavItem>
      <NavItem>
        <a href="./">Contact us</a>
      </NavItem>
    </NavBar>
  </Wrapper>
));

export default Header;
