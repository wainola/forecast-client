import React, { Component } from 'react';
import SOCKET_IO_CLIENT from 'socket.io-client'
import { 
  Responsive,
  Grid,
  Container
} from 'semantic-ui-react'

import Forecast from './container/Forecast'

class App extends Component {
  constructor(){
    super()
    this.state = {
      endpoint: 'http://127.0.0.1:9000'
    }
  }
  componentWillMount(){
    const { endpoint } = this.state
    const socket = SOCKET_IO_CLIENT(endpoint)
    socket.on('FROM_API', data => {
      console.log('data from api', data)
    })
  }
  render() {
    return (
      <Responsive>
        <Container>
          <Grid>
            <Grid.Row columns={1}>
              <Forecast />
            </Grid.Row>
          </Grid>
        </Container>
      </Responsive>
    );
  }
}

export default App;
