import { FaVideo, FaRegFileAlt, FaTerminal } from "react-icons/fa";

import './Navbar.css'
export function Navbar() {
    return (
        <>
            <nav>
                <div className="one">
                    <div className="two">
                        <div className="three"><p>S</p></div>
                        <div className="four">
                            <p className="pt">Samar Ebrahem</p>
                            <p className="ps">Front end Developer</p>
                        </div>
                    </div>

                    <ul>
                        <li>
                            <div className="act">
                                <FaRegFileAlt className="i"/>
                                <p> <a href="#home">Normal</a></p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <FaTerminal className="i"/>
                                <p>Trminal</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <FaVideo className="i"/>
                                <p>Video</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}