import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ImageWrapper, InfoWrapper, DetailsWrapper, ButtonsWrapper } from './style';

const HomeCard = (props) => {
  const { imageUrl, title, type, currency, price } = props;

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={imageUrl} alt="property" />
      </ImageWrapper>
      <InfoWrapper>
        <DetailsWrapper>
          <h2>
            {title}
            <br />
            <br />
            Type: {type}
          </h2>
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
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default HomeCard;
