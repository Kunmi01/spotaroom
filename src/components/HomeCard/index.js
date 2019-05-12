import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ImageWrapper, InfoWrapper, DetailsWrapper, ButtonsWrapper } from './style';

const HomeCard = (props) => {
  const { title, currency, price } = props;

  return (
    <Wrapper>
      <ImageWrapper>Image</ImageWrapper>
      <InfoWrapper>
        <DetailsWrapper>
          <h2>{title}</h2>
          <h2 className="price">
            {currency}
            {price}
          </h2>
        </DetailsWrapper>
        <ButtonsWrapper>
          <button className="secondary" type="button">
            More details
          </button>
          <button className="primary" type="button">
            Book now!
          </button>
        </ButtonsWrapper>
      </InfoWrapper>
    </Wrapper>
  );
};

HomeCard.propTypes = {
  title: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default HomeCard;
