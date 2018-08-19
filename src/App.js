import React, { Component } from 'react';
import { 
  Responsive,
  Container
} from 'semantic-ui-react'

import Forecast from './container/Forecast'

class App extends Component {
  render() {
    return (
      <Responsive>
        <Container>
          <Forecast />
        </Container>
      </Responsive>
    );
  }
}

export default App;
