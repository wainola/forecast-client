import React, { Component } from 'react'
import { Grid, Segment, Header } from 'semantic-ui-react'

export class Forecast extends Component {
  render() {
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
              CL
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
