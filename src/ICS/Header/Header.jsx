import './Header.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa"
export function Header() {
    return (
        <>
            <main>
                <h1>Samar Ebrahem </h1>
                <p className='pon'>Front-end Developer</p>
                <p className='ptw'>Passionate Frontend Developer,Lifelong learner,<br />
                    Building clean, Modern and use-focused web <br />
                    experiences.</p>
                <div className='oned'>
                    <div className='td'>
                        <FaEnvelope className='ic' />
                    </div>
                    <div className='td'>
                        <FaLinkedin className='ic' />
                    </div>
                    <div className='td'>
                        <FaGithub className='ic' />
                    </div>
                </div>
                <button className='b'>
                    <p className='pth'>View My Work</p>
                    <FaExternalLinkAlt />
                </button>
            </main>
        </>
    )
}