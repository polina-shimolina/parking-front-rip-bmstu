import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImage from '../assets/logo1.svg'
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <div>
                <header
                    className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/"
                       className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <img src={logoImage} alt='' height='50'/>
                        <h1 style={{fontSize: '20px', margin: '15px'}}>Park&Go</h1>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><Link to="/" className="nav-link px-2 link-dark">Home</Link></li>
                        <li><Link to="/about" className="nav-link px-2 link-dark">About</Link></li>
                    </ul>

                </header>
            </div>
        </div>
    );
};

export default Header;