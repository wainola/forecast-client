import React, { Component } from 'react'
import { Grid, Segment, Header, Message, Icon } from 'semantic-ui-react'
import SOCKET_IO_CLIENT from 'socket.io-client'
import moment from 'moment'
import tz from 'moment-timezone'

export class Forecast extends Component {
  constructor(){
    super()
    this.state = {
      endpoint: 'https://tz-acid-challenge.herokuapp.com/',
      santiago: undefined,
      zurich: undefined,
      auckland: undefined,
      sydney: undefined,
      london: undefined,
      georgia: undefined
    }
  }
  componentWillMount(){
    const { endpoint } = this.state
    const socket = SOCKET_IO_CLIENT(endpoint)
    socket.on('FROM_API', data => {
      console.log('data', data)
      this.setState({
        ...this.state,
        santiago: { time: moment().tz(data[0].timezone).format('LTS'), temp: data[0].currently.temperature },
        zurich: { time: moment().tz(data[1].timezone).format('LTS'), temp: data[1].currently.temperature },
        auckland: { time: moment().tz(data[2].timezone).format('LTS'), temp: data[2].currently.temperature },
        sydney: { time: moment().tz(data[3].timezone).format('LTS'), temp: data[3].currently.temperature },
        london: { time: moment().tz(data[4].timezone).format('LTS'), temp: data[4].currently.temperature },
        georgia: { time: moment().tz(data[5].timezone).format('LTS'), temp: data[5].currently.temperature }
      })
    })
  }
  render() {
    const { santiago, zurich, auckland, sydney, london, georgia } = this.state
    console.log(moment.unix(1534720515).format('LLL'))
    console.log(moment().tz('Europe/London').format('LLL'))
    return (
      <div style={{marginTop: '5rem'}}>
        <Grid stackable verticalAlign='middle'>
          <Grid.Row columns={1}>
            <Grid.Column>
              <Header as='h1' textAlign='center'>Time and Temperature</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid centered textAlign='center' stackable verticalAlign='middle'>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Segment raised>
                { santiago !== undefined ? 
                  <Message>
                    <Message.Header>Santiago</Message.Header>
                    <Message.Content>
                      Time: { santiago.time }
                      <br/>
                      Temperature { santiago.temp } Celsius
                    </Message.Content>
                  </Message>
                  :
                  <Message icon>
                    <Icon name='circle notched' loading />
                    <Message.Content>
                      Fetching data for Santiago!
                    </Message.Content>
                  </Message>
                }
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment raised>
                { zurich !== undefined ? 
                  <Message>
                    <Message.Header>Zurich</Message.Header>
                    <Message.Content>
                      Time: { zurich.time }
                      <br/>
                      Temperature: { zurich.temp } Celsius
                    </Message.Content>
                  </Message>
                  :
                  <Message icon>
                    <Icon name='circle notched' loading />
                    <Message.Content>
                      Fetching data for Zurich!
                    </Message.Content>
                  </Message>
                }
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment raised>
              { auckland !== undefined ? 
                  <Message>
                    <Message.Header>Auckland</Message.Header>
                    <Message.Content>
                      Time: { auckland.time }
                      <br/>
                      Temperature: { auckland.temp } Celsius
                    </Message.Content>
                  </Message>
                  :
                  <Message icon>
                    <Icon name='circle notched' loading />
                    <Message.Content>
                      Fetching data for Auckland!
                    </Message.Content>
                  </Message>
                }
              </Segment>
            </Grid.Column>

          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Segment raised>
                { sydney !== undefined ? 
                  <Message>
                    <Message.Header>Sydney</Message.Header>
                    <Message.Content>
                      Time: { sydney.time }
                      <br/>
                      Temperature: { sydney.temp } Celsius
                    </Message.Content>
                  </Message>
                  :
                  <Message icon>
                    <Icon name='circle notched' loading />
                    <Message.Content>
                      Fetching data for Sydney!
                    </Message.Content>
                  </Message>
                }
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment raised>
                { london !== undefined ? 
                  <Message>
                    <Message.Header>London</Message.Header>
                    <Message.Content>
                      Time: { london.time }
                      <br/>
                      Temperature: { london.temp } Celsius
                    </Message.Content>
                  </Message>
                  :
                  <Message icon>
                    <Icon name='circle notched' loading />
                    <Message.Content>
                      Fetching data for London!
                    </Message.Content>
                  </Message>
                }
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Segment raised>
              { georgia !== undefined ? 
                  <Message>
                    <Message.Header>Georgia</Message.Header>
                    <Message.Content>
                      Time: { georgia.time }
                      <br/>
                      Temperature: { georgia.temp } Celsius
                    </Message.Content>
                  </Message>
                  :
                  <Message icon>
                    <Icon name='circle notched' loading />
                    <Message.Content>
                      Fetching data for Georgia!
                    </Message.Content>
                  </Message>
                }
              </Segment>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Forecast
