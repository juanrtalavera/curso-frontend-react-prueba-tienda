import React from 'react';
import CartDetail from './CartDetail';
import CarharttLogo from '../assets/favicon-192x192.png';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Link to='/' className="navbar-brand">
                        <img    src={CarharttLogo} 
                                alt="Carhartt WIP" title='Carhartt WIP' width="30" height="30"
                                class="d-inline-block align-text-top"
                                id="imgLogo" />Carhartt WIP
                    </Link>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/hombre' className="nav-link">Hombre</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/mujer' className="nav-link">Mujer</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to='/accesorios' className="nav-link">Accesorios</NavLink>
                        </li>
                        <span className="navbar-text">
                            <NavLink to='/cart'><CartDetail /></NavLink>
                        </span>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
}

export default NavBar;