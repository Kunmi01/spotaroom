import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import { colors } from './config';
import Header from './components/Header';
import HomeCard from './components/HomeCard';

const Wrapper = styled.div`
  background: ${colors.light_grey};
  margin: 0 auto;
`;

const CardsWrapper = styled.div`
  padding: 30px;
  overflow: auto;
  height: calc(100vh - 100px);
`;

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Header />
    <CardsWrapper>
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
      <HomeCard title="3 bedrooms for rent in a spacious apartment" currency="£" price="1200" />
    </CardsWrapper>
  </Wrapper>
);

export default App;
