import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import Logo_Img1 from "../../Images/logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="brandname">
          <img src={Logo_Img1} alt="logo" className="img-fluid"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="header-nav">
          <Nav className="ml-auto anchor1">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Classes">Classes</Nav.Link>
            <Nav.Link href="/Blogs">Blogs</Nav.Link>
            <Nav.Link href="/Connect">Connect</Nav.Link>
            <Button className="register-btn">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
