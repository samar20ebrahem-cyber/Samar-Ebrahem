import { FaVideo, FaRegFileAlt, FaTerminal, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom"
import './Navbar.css'
import { useState } from "react"
export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <nav>
                <div className="navbar__container">
                    <div className="navbar__brand">

                        <div className="navbar__logo"><p>S</p></div>
                        <div className="navbar__identity">
                            <p className="navbar__name">Samar Ebrahem</p>
                            <p className="navbar__role">Front end Developer</p>
                        </div>
                    </div>
                    <button
                        className="navbar__toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
                        <li>
                            <NavLink
                                to="/"
                                onClick={() => setMenuOpen(false)}
                                end
                                className={({ isActive }) =>
                                    isActive ? "navbar__link--active" : ""} >
                                <FaRegFileAlt className="navbar__icon" />
                                <span> Normal</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/terminal"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    isActive ? "navbar__link--active" : ""}>
                                <FaTerminal className="navbar__icon" />
                                <span>Terminal</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/videos"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    isActive ? "navbar__link--active" : ""}>
                                <FaVideo className="navbar__icon" />
                                <span>Video</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}