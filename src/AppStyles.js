import styled from 'styled-components';
import { colors, responsive } from './config';

export const Wrapper = styled.div`
  background: whitesmoke;
  margin: 0 auto;
`;

export const OptionsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.white};
  height: 100px;
  padding: 0 30px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.13);
  z-index: 1;

  ${responsive.mini(`
    flex-direction: row;
    align-items: center;
  `)};
`;

export const FilterWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;

  ${responsive.mini(`
    width: 200px;
    margin: 0;
  `)};

  select {
    width: 100%;
  }
`;

export const TotalReturned = styled.div`
  margin-left: auto;
`;
