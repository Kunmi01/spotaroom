import styled from 'styled-components';
import { colors, responsive } from '../../config';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  background: ${colors.white};
  align-items: center;
  height: 100px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.13);
  z-index: 2;
`;

export const Brand = styled.div`
  color: ${colors.light_green};
  font-size: 32px;
  white-space: nowrap;
  padding-left: 30px;
`;

export const NavBar = styled.ul`
  display: none;
  list-style: none;
  align-self: flex-end;
  margin-left: auto;

  ${responsive.medium(`
        display: flex;
    `)};

  li {
    position: relative;
    font-weight: bold;
    padding: 0 30px;

    &:not(:last-of-type)::after {
      content: '-';
      position: absolute;
      right: -4px;
    }
  }
`;
