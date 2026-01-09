'use client'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from 'react-bootstrap';

export default function NavbarComponent() {

  return (
     <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand href="#home">ACME Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >Products</Nav.Link>
            <Nav.Link >Cart &nbsp;
            <Badge>{0}</Badge>
            </Nav.Link>
            <Nav.Link>Address</Nav.Link>
          </Nav>
      </Navbar>
  )
}
