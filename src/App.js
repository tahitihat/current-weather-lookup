import React from 'react';
import Container from "react-bootstrap/Container";

import WeatherContainer from './containers/weatherContainer';

function App() {
  return (
    <div className="app-outer">
      <Container className="p-0 body-container outer ">
        <h3 style={{ marginTop: "2rem" }}> Current Weather Lookup</h3>
        <WeatherContainer />
      </Container>
    </div>
  );
}

export default App;
