import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  ImageWrapper,
  InfoWrapper,
  DetailsWrapper,
  ButtonsWrapper,
  Detail,
  CardButton,
} from './style';

const HomeCard = (props) => {
  const { imageUrl, title, type, currency, price } = props;

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={imageUrl} alt={title} />
      </ImageWrapper>
      <InfoWrapper>
        <DetailsWrapper>
          <Detail>
            {title}
            <br />
            <br />
            Type: {type}
          </Detail>
          <Detail className="price">
            {currency}
            {price}
          </Detail>
        </DetailsWrapper>
        <ButtonsWrapper>
          <CardButton className="secondary" type="button">
            More details
          </CardButton>
          <CardButton className="primary" type="button">
            Book now!
          </CardButton>
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
