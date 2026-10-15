import { FaVideo, FaRegFileAlt, FaTerminal } from "react-icons/fa";
import { NavLink } from "react-router-dom"
import './Navbar.css'
export function Navbar() {
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

                    <ul>
                        <li>
                            <NavLink
                                to="/"
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
                                className={({ isActive }) =>
                                    isActive ? "navbar__link--active" : ""}>
                                <FaTerminal className="navbar__icon" />
                                <span>Terminal</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/videos"
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