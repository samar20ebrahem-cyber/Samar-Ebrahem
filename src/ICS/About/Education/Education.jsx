import './Education.css'
import { FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa"
import { GoDotFill } from 'react-icons/go'
export function Education() {
    return (
        <>
            <section id='education'>
                <h1>Education</h1>
                <p>My academic journey.</p>
                <div className="education-timeline-layout">
                    <div>
                        <div className="education-timeline">

                            <div className="education-timeline-item">
                                <div className="education-icon-circle">
                                    <FaGraduationCap />
                                </div>
                            </div>

                            <div className="education-timeline-item">
                                <div className="education-icon-circle">
                                    <FaGraduationCap />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='education-details'>
                        <div className='education-card'>
                            <h2>Bachelor of Computer Science and Information Technology</h2>

                            <span>
                                <FaCalendarAlt className='education-info-icon' />
                                <p>Sep 2026 - Present</p>
                            </span>
                            <span>
                                <FaMapMarkerAlt className='education-info-icon' />
                                <p className='education-institution'>Al-Riyada University for Science and Technology</p>
                                <GoDotFill className='education-info-icon' />
                                <span className='education-location'> Menoufia, Egypt</span>
                            </span>
                            <p className='education-achievements-title'>Key Achievements:</p>
                            <ul>
                                <li className='education-achievement-item'>Currently enrolled as a first-year student in the Bachelor of Computer Science and Information Technology program, focusing on developing a strong foundation <br />
                                    in computer science, programming, and software development.</li>
                            </ul>
                        </div>

                        <div className='education-card'>
                            <h2>Azhar Secondary School</h2>

                            <span>
                                <FaCalendarAlt className='education-info-icon' />
                                <p>Sep 2023 - Jun 2025</p>
                            </span>
                            <span>
                                <FaMapMarkerAlt className='education-info-icon' />
                                <p className='education-institution'>Abu El-Matamir Girls’ Al-Azhar Institute</p>
                                <GoDotFill className='education-info-icon' />
                                <span className='education-location'>Beheira, Egypt</span>
                            </span>
                            <p className='education-achievements-title'>Key Achievements:</p>
                            <ul>

                                <li className='education-achievement-item'> Successfully completed secondary education in 2025 after beginning the program in 2023, building a strong academic foundation for pursuing higher education <br />
                                    in Computer Science.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}