import React from 'react'
import logo from "../../assets/img/logo.jpeg"
import { Navbar, Nav } from 'react-bootstrap'
// import {Link} from 'react-router-dom/cjs/react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  // const history =useHistory();
  // const logmeout = ()=>{
  //   history.push("/")
  // }
  return (
    <Navbar
    //menu collapseable
    collapseOnSelect
    variant="dark"
    bg="info"
    expand="md"

    >
      <Navbar.Brand>
        <img src={logo} alt='' width="50px"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto ">
          <NavLink to="/dashboard"  style={{ marginRight: 15 }}>Dashboard</NavLink>
          <NavLink  to="/tickets"  style={{ marginRight: 15 }}>Tickets</NavLink>
          <NavLink to="/"  style={{ marginRight: 15 }}>Logout</NavLink>
          {/* <LinkContainer to="">Dummy</LinkContainer> */}
          {/* <NavLink to="/">Dummy</NavLink> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
//ml-->ms(left by start)
//mr-->me(right by end)
