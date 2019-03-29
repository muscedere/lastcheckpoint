import React from 'react';
import logo from './images/cinema2.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
 import './NavBar.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark className="red" expand="md">
          <NavbarBrand href="/"><span className='Title'>CINE Wild</span><img
              className="logo_cine"
              src={logo}
              alt="the_logo" width="200px" height="70px"
            /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="/Admin">Admin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Post">Add a movie</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Cardlistall">All movies</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}