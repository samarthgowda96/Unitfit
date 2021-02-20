import React from 'react';
import {Link} from 'react-router-dom';

import { Header, Segment,Button } from 'semantic-ui-react'
import './HeaderHome.css'
function HeaderHome() {
  return(
    <div>
    <Header as='h1' className='HeaderHome inverted' attached='top'  color='red' >
        Welcome to UnitFit
        <Link to='/register'>
        <Button className='HeaderSignUp ' floated='right'>Sign Up</Button>
        </Link>
        </Header>
    <Segment className='HeaderSegment secondary' attached>
      A Perfect Place for all your Gym needs.
    </Segment>
  </div>
  
  )
}
export default HeaderHome;
  