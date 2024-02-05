import React from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import './components.css';
const Navigation = () => {



  return (
    <Navbar expand="lg"  className="px-5 navbar">
      <Navbar.Brand as={Link} to="/" className='d-flex justify-content-baseline'>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className=' justify-self-end'/>
      <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end">
        <Nav>
          <NavLink as={Link} to="/" className="nav-link text-warning1" style={{fontSize: '1.1rem'}}>
            Home
          </NavLink>
          <NavLink as={Link} to="/login" className="nav-link text-warning1" style={{fontSize: '1.1rem'}}>
            login
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
