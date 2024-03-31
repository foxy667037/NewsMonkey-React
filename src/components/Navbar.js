import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {


  render() {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsMonkey</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" aria-current="page" to="/">Home</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" aria-current="page"  to="/sport">Sports</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" aria-current="page" to="/">Weather</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" aria-current="page"  to="/sport">Lifestyle</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" aria-current="page" to="/">Health</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" aria-current="page"  to="/sport">Society</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" aria-current="page" to="/">Business</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" aria-current="page"  to="/sport">Technology</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link to='/about' className="btn btn-sm btn-primary">About Us</Link>
            </div>
        </nav>
    </>
    )
  }
}
