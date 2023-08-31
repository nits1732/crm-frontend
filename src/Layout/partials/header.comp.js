import React from 'react'
import logo from "../../assets/img/logo.jpeg"
import { Navbar, Nav } from 'react-bootstrap'
export const Header = () => {
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
        <Nav className="ms-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/tickets">Tickets</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
//ml-->ms(left by start)
//mr-->me(right by end)
