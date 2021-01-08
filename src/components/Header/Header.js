import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';

const Header = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">Microbe Atlas</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className='nav-link' to="/landing" exact>Landing</NavLink>
                    <NavLink
                        className='nav-link'
                        to="/taxa/"
                        exact
                    >Taxa</NavLink>
                    <NavLink className='nav-link'
                        to={{
                            pathname: '/samples',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}>Samples</NavLink>
                    <NavLink className='nav-link'
                        to={{
                            pathname: '/samples-groups',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}>Samples Groups</NavLink>
                    <NavLink className='nav-link'
                        to={{
                            pathname: '/mapseq',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}>MAPseq</NavLink>
                    <NavLink className='nav-link'
                        to={{
                            pathname: '/about'
                        }}>About</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;