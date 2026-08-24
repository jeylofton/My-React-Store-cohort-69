import { Link } from "react-router";
import { useState } from "react";

import "./Navbar.css";
import useStore from "../store/useStore";

function Navbar(){

    //the user name comes from the global state, not from props
    const userName = useStore((state) => state.user.name);

    //total pieces in the cart, so the count reflects quantities
    const cartCount = useStore((state) =>
        state.cart.reduce((sum, item) => sum + item.quantity, 0)
    );

    //Bootstrap's own collapse needs its JS bundle, which this project does
    //not import, so the hamburger is driven by React state instead.
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu(){
        setMenuOpen(false);
    }

    return(
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid flex-column flex-lg-row">

                {/* brand: centered on mobile, left on desktop */}
                <Link className="navbar-brand mx-auto ms-lg-0" to="/" onClick={closeMenu}>
                    Online Store
                </Link>

                {/* hamburger on the left, cart on the right */}
                <div className="navbar-controls d-flex align-items-center justify-content-between order-lg-3 ms-lg-auto">

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-expanded={menuOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="d-flex align-items-center gap-3">
                        <Link className="nav-link" to="/cart" onClick={closeMenu}>
                            Cart: {cartCount}
                        </Link>
                        <span className="navbar-text d-none d-lg-inline">
                            Hello, {userName}
                        </span>
                    </div>
                </div>

                {/* the links themselves, hidden behind the hamburger on mobile */}
                <div className={menuOpen
                    ? "collapse navbar-collapse order-lg-2 show"
                    : "collapse navbar-collapse order-lg-2"}
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog" onClick={closeMenu}>Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin" onClick={closeMenu}>Admin</Link>
                        </li>
                    </ul>

                    {/* on mobile the greeting lives inside the menu */}
                    <span className="navbar-text d-lg-none">Hello, {userName}</span>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
