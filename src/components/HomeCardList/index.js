/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import HomeCard from '../HomeCard';

const CardsWrapper = styled.div`
  padding: 30px;
  overflow-y: auto;
  height: calc(100vh - 200px);
`;

const HomeCardList = (props) => {
  const { homecards, filterValue } = props;

  return (
    <CardsWrapper>
      {homecards &&
        homecards
          .filter((card) => (filterValue ? card.type === filterValue : card))
          .map((card) => (
            <HomeCard
              key={card.title}
              imageUrl={card.photoUrls.homecardHidpi}
              title={card.title}
              type={card.type}
              currency={card.currencySymbol}
              price={card.pricePerMonth}
            />
          ))}
    </CardsWrapper>
  );
};

export default HomeCardList;
