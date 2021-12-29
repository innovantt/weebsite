import React from 'react'
import { Container, Nav , Navbar } from 'react-bootstrap'


export const NavBar = () => {
    return (
        <Navbar bg="black" variant="dark" >
        <Container>
        <Navbar.Brand href="Home"></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="Home">Home</Nav.Link>
          <Nav.Link href="contact">Contact us</Nav.Link>
          <Nav.Link href="about">About us</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
    )
}
