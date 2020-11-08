import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import Dashboard from './Dashboard';
import {Route} from 'react-router-dom'
import { getBsProps } from 'react-bootstrap/lib/utils/bootstrapUtils';

class AppWrapper extends Component{
    constructor(props){
        super(props)
    }
  render(){
    {console.log(this.props)}
    if(this.props.status) {

      return <Redirect to="/login" />
   
  }

   return(
     <div>
       App wrapper
       <Route path='/dashboard' component={Dashboard} />
     </div>
   );
  }
}
export default AppWrapper;