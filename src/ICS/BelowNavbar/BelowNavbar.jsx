import {
    HiHome,
    HiUser,
    HiCodeBracket,
    HiFolder,
    HiEnvelope,
    HiAcademicCap,
    HiBriefcase
} from "react-icons/hi2"

import './BelowNavbar.css'
import { useEffect, useState } from 'react'
export function BelowNavbar() {

    const navItems = [
        { id: "home", label: "Home", icon: HiHome },
        { id: "about", label: "About", icon: HiUser },
        { id: "experience", label: "Experience", icon: HiBriefcase },
        { id: "education", label: "Education", icon: HiAcademicCap },
        { id: "skills", label: "Skills", icon: HiCodeBracket },
        { id: "projects", label: "Projects", icon: HiFolder },
        { id: "contact", label: "Contact", icon: HiEnvelope }
    ]

    const [activeSection, setActiveSection] = useState("home")

    return (
        <div className="below-navbar-container">
            {navItems.map(({ id, label, icon: Icon }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    aria-label={label}
                    aria-current={activeSection === id ? "location" : undefined}
                    className={`below-navbar-link ${activeSection === id ? "below-navbar-link-active" : ""
                        }`}
                >
                    <Icon />
                </a>
            ))}
        </div>

    )
}
