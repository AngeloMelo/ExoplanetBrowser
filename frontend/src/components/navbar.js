import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Exoplanets Browser</a>
        
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/AngeloMelo/exoplanet-browser" target="_blanq">Github</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">About</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar
