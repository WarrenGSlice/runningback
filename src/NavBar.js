import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand" href='#' style={{marginLeft:'25px', fontSize:'3vh'}}>Player Projector</span>
            <button className="navbar-toggler" type="button" data-toggle='collaspe' data-target='#navbarNavAltMarkup'
                aria-controls="navbarNavAltMarkup" aria-expanded='false' aria-label="Toggle Navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collaspe navbar-collaspe" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <span className="nav-item nav-link" href='#' style={{fontSize:'2vh'}}>
                        <Link to='/'>Main</Link>
                    </span>
                    <span className="nav-item nav-link" href='#' style={{fontSize:'2vh'}}>
                        <Link to='/new'>New</Link>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;