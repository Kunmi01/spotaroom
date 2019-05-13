import styled from 'styled-components';
import { colors, responsive } from '../../config';

export const Wrapper = styled.div`
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
  padding: 30px;
  margin-bottom: 30px;

  ${responsive.medium(`
    flex-direction: row;
  `)};
`;

export const ImageWrapper = styled.div`
  width: 100%;

  ${responsive.medium(`
    max-width: 190px;
    align-self: normal;
    margin-right: 30px;
  `)};

  img {
    display: block;
    width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${responsive.mini(`
    flex-direction: row;
  `)};

  h2 {
    font-size: 24px;
    font-weight: normal;
    margin: 20px 0;

    &.price {
      font-weight: bold;
      padding-left: 30px;
      margin-left: auto;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  ${responsive.mini(`
    flex-direction: row;
  `)};

  button {
    background-color: ${colors.light_green};
    border-bottom: 5px solid rgba(0, 0, 0, 0.3);
    color: white;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    min-width: 170px;
    height: 45px;
    padding: 0 30px;

    &.secondary {
      background: ${colors.orange};
    }

    &:not(:last-of-type) {
      margin-bottom: 10px;

      ${responsive.mini(`
        margin: 0 10px 0 0;
      `)};
    }
  }
`;
