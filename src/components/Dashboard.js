import React, { Component } from 'react';

import Axios from 'axios';

import App from './workout/App';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
const colors = [
  'grey'
]

class Menuu extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  userData = () => {
    Axios.get('http://localhost:9000/dashboard', {
    }).then((response) => {
      console.log(response.data);

    })
  }
  render() {
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
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={NavLink}
            to='/recipe'
            name='My Recipes'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />


          <Menu.Item
            name='My Profile'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
        </Menu>
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