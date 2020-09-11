import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {
  
  render() {
    return (
     <Menu borderless fluid widths={6} style={{ border: "none"}}>
       <Menu.Item
         name= "About Rake Salon"
       />
       <Menu.Item
         name= "Meet Our Stylists"
       />
       <Menu.Item
         name= "Menu of Services"
       />
       <Menu.Item
         name= "Our Products"
      />
     </Menu>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);