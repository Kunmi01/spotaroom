import React, { Component } from 'react';
import GlobalStyle from './globalStyles';
import Header from './components/Header';
import HomeCard from './components/HomeCard';
import { Wrapper, CardsWrapper, OptionsWrapper, FilterWrapper, TotalReturned } from './AppStyles';

const uuid = require('uuid/v1');

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

  handleChange = (event) => {
    const filterValue = event.target.value;

    if (filterValue === 'all') {
      this.setState({ filterValue: null });
    } else {
      this.setState({ filterValue });
    }
  };

  render() {
    const { homecards, filterValue } = this.state;

    return (
      <Wrapper>
        <GlobalStyle />
        <Header />
        <OptionsWrapper>
          <FilterWrapper>
            Filter:
            <select onChange={this.handleChange}>
              <option value="all">all</option>
              <option value="apartment">apartment</option>
              <option value="roomShared">roomShared</option>
              <option value="studio">studio</option>
              <option value="residence">residence</option>
            </select>
          </FilterWrapper>
          <TotalReturned>
            {homecards &&
              `Total returned: ${
                filterValue
                  ? homecards.filter((card) => card.type === filterValue).length
                  : homecards.length
              }`}
          </TotalReturned>
        </OptionsWrapper>
        <CardsWrapper>
          {homecards &&
            (filterValue
              ? homecards
                  .filter((card) => card.type === filterValue)
                  .map((card) => (
                    <HomeCard
                      key={uuid()}
                      imageUrl={card.photoUrls.homecardHidpi}
                      title={card.title}
                      type={card.type}
                      currency={card.currencySymbol}
                      price={card.pricePerMonth}
                    />
                  ))
              : homecards.map((card) => (
                  <HomeCard
                    key={uuid()}
                    imageUrl={card.photoUrls.homecardHidpi}
                    title={card.title}
                    type={card.type}
                    currency={card.currencySymbol}
                    price={card.pricePerMonth}
                  />
                )))}
        </CardsWrapper>
      </Wrapper>
    );
  }
}

export default App;
