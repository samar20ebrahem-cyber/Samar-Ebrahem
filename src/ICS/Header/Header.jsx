import './Header.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa"
export function Header() {
    return (
        <>

            <section id='home'>
                <h1>Samar Ebrahem </h1>
                <p className='hero-role'>Front-end Developer</p>
                <p className='hero-description'>Passionate Frontend Developer,Lifelong learner,<br />
                    Building clean, Modern and use-focused web <br />
                    experiences.</p>
                <div className='social-links'>
                    <div className='social-link'>
                        <FaEnvelope className='social-icon' />
                    </div>
                    <div className='social-link'>
                        <FaLinkedin className='social-icon' />
                    </div>
                    <div className='social-link'>
                        <FaGithub className='social-icon' />
                    </div>
                </div>
                <button className='work-button'>
                    <p>View My Work</p>
                    <FaExternalLinkAlt />
                </button>
            </section>
        </>
    )
}



