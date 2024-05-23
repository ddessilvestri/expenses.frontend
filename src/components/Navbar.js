import React from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../app/authenticationSlice';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    const { isLoggedIn } = useSelector(state => state.authenticationSlice);
    const dispatch = useDispatch();

    return (
        <Nav className='navbar'>
            <div className="navbar-left">
                {/* <img src="/path-to-your-logo/logo.png" alt="Logo" className="logo" />
                <ul className="nav-links">
                    <li><NavLink to="#">Microsoft 365</NavLink></li>
                    <li><NavLink to="#">Teams</NavLink></li>
                    <li><NavLink to="#">Copilot</NavLink></li>
                    <li><NavLink to="#">Windows</NavLink></li>
                    <li><NavLink to="#">Xbox</NavLink></li>
                    <li><NavLink to="#">Soporte</NavLink></li>
                </ul> */}
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    {/* <li><NavLink to="#">Todo Microsoft</NavLink></li>
                    <li><NavLink to="#">Buscar</NavLink></li>
                    <li><NavLink to="#">Carro</NavLink></li> */}
                    {
                        isLoggedIn
                            ? <li><NavLink to='/signin' onClick={() => dispatch(logout())}>Log out</NavLink></li>
                            : <>
                                <li><NavLink to='/signup'>Sign Up</NavLink></li>
                                <li><NavLink to='/signin'>Sign In</NavLink></li>
                              </>
                    }
                </ul>
                {/* <div className="profile-icon">
                    <NavLink to="#"><img src="/path-to-your-profile-icon/profile-icon.png" alt="Profile Icon" /></NavLink>
                </div> */}
            </div>
        </Nav>
    );
};

export default Navbar;
