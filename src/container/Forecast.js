import React, { Component } from 'react'
import { Grid, Segment, Header, Message, Icon } from 'semantic-ui-react'
import SOCKET_IO_CLIENT from 'socket.io-client'
import moment from 'moment'

export class Forecast extends Component {
  constructor(){
    super()
    this.state = {
      endpoint: 'http://127.0.0.1:9000',
      data_locations: []
    }
  }
  componentWillMount(){
    const { endpoint } = this.state
    const socket = SOCKET_IO_CLIENT(endpoint)
    socket.on('FROM_API', data => {
      console.log('data from api', data)
      this.setState({
        ...this.state,
        data_locations: data
      })
    })
  }
  render() {
    const { data_locations } = this.state
    console.log(moment.unix(1534720515).format('LLL'))
    if(data_locations.length !== 0){
      console.log('hora: ', moment.unix(data_locations[0].currently.time).format('LLL'))
    }
    return (
      <div style={{marginTop: '5rem'}}>
        <Grid stackable verticalAlign='middle'>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Header as='h1' textAlign='center'>Time and Temprature</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid centered textAlign='center' stackable verticalAlign='middle'>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Segment raised>
                { data_locations.length !== 0 ? 
                  <Message>
                    Time: { data_locations.length !== 0 ? moment.unix(data_locations[0].currently.time).format('LLL') : ''}
                    <br/>
                    Temperature
                  </Message>
                  :
                  <Message icon>
                    <Icon name='circle notched' loading />
                    <Message.Content>
                      Fetching data!
                    </Message.Content>
                  </Message>
                }
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment raised>
              CH
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment raised>
              NZ
              </Segment>
            </Grid.Column>

          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Segment raised>
              AU
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment raised>
              UK
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment raised>
              USA
              </Segment>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Forecast
