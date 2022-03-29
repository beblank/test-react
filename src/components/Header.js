import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-8">
        <Container>
          <Navbar.Brand href="#home">Adactive Asia Inventory</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Our Products" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/add">Add New One</NavDropdown.Item>
                <NavDropdown.Item href="/product">Action Products</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Button href="/login" variant="secondary">Sign In</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header