import {
    HiHome,
    HiUser,
    HiCode,
    HiFolder,
    HiMoon
} from "react-icons/hi"

import {
    LuMail
} from "react-icons/lu"

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
                                <HiHome  className="i"/>
                                <p> <a href="#home">Home</a></p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <HiUser className="i"/>
                                <p>About</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <HiCode className="i"/>
                                <p>Skills</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <HiFolder className="i" />
                                <p>Projects</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <LuMail className="i" />
                                <p>Contacts</p>
                            </div>
                        </li>
                        <li>
                            <HiMoon />
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}