import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink
                    to="/landing"
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                        color: '#fa923f',
                        textDecoration: 'underline'
                    }}>Landing</NavLink></li>
                <li><NavLink
                    to="/taxa/"
                    exact
                    activeClassName="my-active"
                    activeStyle={{
                        color: '#fa923f',
                        textDecoration: 'underline'
                    }}>Taxa</NavLink></li>
                <li><NavLink to={{
                    pathname: '/samples',
                    hash: '#submit',
                    search: '?quick-submit=true'
                }}>Samples</NavLink></li>
                <li><NavLink to={{
                    pathname: '/samples-groups',
                    hash: '#submit',
                    search: '?quick-submit=true'
                }}>Samples Groups</NavLink></li>
                <li><NavLink to={{
                    pathname: '/mapseq',
                    hash: '#submit',
                    search: '?quick-submit=true'
                }}>MAPseq</NavLink></li>
                <li><NavLink to={{
                    pathname: '/about'
                }}>About</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header;