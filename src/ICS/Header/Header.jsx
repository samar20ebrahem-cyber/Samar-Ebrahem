import './Header.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa"
export function Header() {
    return (
        <>

            <section className='home' id='home'>
                <h1>Samar Ebrahem </h1>
                <p className='hero-role'>Front-end Developer</p>
                <p className='hero-description'>Passionate Frontend Developer,Lifelong learner , <br /> Building clean,
                    Modern and use-focused <br /> web  experiences.</p>
                <div className='social-links'>
                    <a
                        className='social-link'
                        href="mailto:sam2026ar@gamil.com"
                        aria-label="Send me an email"
                    >
                        <FaEnvelope className='social-icon' />
                    </a>
                    <a className='social-link'
                        href="https://www.linkedin.com/in/samar-ebrahem-9953b13b6/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile">
                        <FaLinkedin className='social-icon' />
                    </a>
                    <a className='social-link'
                        href="https://github.com/samar20ebrahem-cyber"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                    >
                        <FaGithub className='social-icon' />
                    </a>
                </div>
                <button className='work-button'
                    onClick={() => {
                        document.getElementById('projects')?.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}>
                    <p>View My Work</p>
                    <FaExternalLinkAlt />
                </button>
            </section>
        </>
    )
}



