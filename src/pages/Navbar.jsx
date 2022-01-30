import React from 'react';
import { NavLink }from 'react-router-dom';

const Navbar = ()=>{
    return(
        <>
        <div className = "container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">


                <nav className="navbar navbar-expand-lg navbar-light bg-none">
                <div className="container-fluid">
                    <NavLink activeClassName="menu_acitve" className="navbar-brand" to="/">WebApp</NavLink >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto me-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink activeClassName="menu_acitve" className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink activeClassName="menu_acitve" className="nav-link" to="/about">About</NavLink >
                        </li>
                        <li className="nav-item">
                        <NavLink activeClassName="menu_acitve" className="nav-link" to="/contact">Contact</NavLink >
                        </li>
                        <li className="nav-item">
                        <NavLink activeClassName="menu_acitve" className="nav-link" to="/service ">Services</NavLink >
                        </li>
                    </ul>
                    
                    </div>
                </div>
                </nav>
        </div>
        </div>
        </div>

        </>
    )
}
export default Navbar;