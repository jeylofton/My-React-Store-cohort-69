import { Link } from "react-router";

import "./Navbar.css";

function Navbar(){

    return(
        <nav className="navbar navbar-expand bg-dark" data-bs-theme="dark">
            <div className="container-fluid">

                <Link className="navbar-brand" to="/">Online Store</Link>

                <div className="navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
