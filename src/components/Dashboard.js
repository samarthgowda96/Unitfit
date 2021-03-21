import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios'
<<<<<<< HEAD
import { NavLink, withRouter } from 'react-router-dom'
=======
import {button} from 'semantic-ui-react'

>>>>>>> 48253e3f5e412e1f178d0d3db598f2679db8ed19
import App from './workout/App'
import{Menu} from 'semantic-ui-react'

const colors=[
   
    'grey'
]
const buttoncolor={
  fontfamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    padding:"30px 50px",
    margin: "20px",
    backgroundColor: "gray",
    color: "aliceblue",
    border: "5px outset #FF4136",
    fontsize: "20px"
}

class Menuu extends Component{
  
    state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
 


userData = () => {
    Axios.get('http://localhost:9000/dashboard', {
       }).then((response) => {
        console.log(response.data);
        
    })
}
render(){
       
   /* {/*
        <Button onClick={userData}>
        getUsers {users.data}
    </Button>
    } */
    const { color } = this.props
    const { activeItem } = this.state

    return (
        <div>
          
      <Menu color={color} inverted widths={3}>
        
        <Menu.Item
          name='My Workout'
          active={activeItem === 'home'}/>
       
        <Menu.Item
          name='My Recipes'
          as={NavLink} 
          to="recipe"
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='My Profile'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
      </Menu>
      <Link to='/Intensity'>
          <button style={buttoncolor}>Browse Workout by Intensity</button></Link>
    
        <App />
      </div>
    ) 
}
}
const Dashboard = () => {
    const menus = colors.map((color) => <Menuu color={color} key={color} />)
  
    return <div>{menus}</div>
  }
  export default Dashboard;