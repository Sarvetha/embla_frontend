import React from 'react';
import logo from '../assets/images/Faauna Finder Horizontal.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
            <a className="navbar-brand" href="#home">
                    <img src={logo} alt="Logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav"> {/* ms-auto aligns items to the right */}
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#explore">Explore</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;