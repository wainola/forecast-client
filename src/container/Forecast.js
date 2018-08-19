import React, { Component } from 'react'
import { Segment, Card, Button, Icon, Image } from 'semantic-ui-react'

export class Forecast extends Component {
  render() {
    return (
      <div>
        <Segment basic>
          <Card>
          <Image src='/images/avatar/large/matthew.png' />
          <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
        </Card>
        </Segment>
      </div>
    )
  }
}

export default Forecast
