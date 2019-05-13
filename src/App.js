import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import { colors } from './config';
import Header from './components/Header';
import HomeCard from './components/HomeCard';

const uuid = require('uuid/v1');

const Wrapper = styled.div`
  background: ${colors.light_grey};
  margin: 0 auto;
`;

const CardsWrapper = styled.div`
  padding: 30px;
  overflow-y: auto;
  height: calc(100vh - 100px);
`;

class App extends Component {
  state = {
    homecards: null,
  };

  componentDidMount() {
    fetch('/api/homecards')
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            this.setState({ homecards: data.homecards });
          });
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  render() {
    const { homecards } = this.state;

    return (
      <Wrapper>
        <GlobalStyle />
        <Header />
        <CardsWrapper>
          {homecards
            ? homecards.map((card) => (
                <HomeCard
                  key={uuid()}
                  imageUrl={card.photoUrls.homecardHidpi}
                  title={card.title}
                  currency={card.currencySymbol}
                  price={card.pricePerMonth}
                />
              ))
            : 'Loading...'}
        </CardsWrapper>
      </Wrapper>
    );
  }
}

export default App;
