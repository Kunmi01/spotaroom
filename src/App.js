import React, { Component } from 'react';

import Header from './components/Header';
import HomeCardList from './components/HomeCardList';
import GlobalStyle from './globalStyles';
import { Wrapper, OptionsWrapper, FilterWrapper, TotalReturned } from './AppStyles';

class App extends Component {
  state = {
    homecards: null,
    filterValue: null,
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
                homecards.filter((card) => (filterValue ? card.type === filterValue : card)).length
              }`}
          </TotalReturned>
        </OptionsWrapper>
        <HomeCardList homecards={homecards} filterValue={filterValue} />
      </Wrapper>
    );
  }
}

export default App;
