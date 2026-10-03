import './Education.css'
import { FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa"
import { GoDotFill } from 'react-icons/go'
export function Education() {
    return (
        <>
            <section>
                <h1>Education</h1>
                <p className='po'>My academic journey.</p>
                <div className="card">
                    <div>
                        <div className="timeline">

                            <div className="timeline-item">
                                <div className="icon-circle">
                                    <FaGraduationCap />
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="icon-circle">
                                    <FaGraduationCap />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='education-content'>
                        <div className='ed'>
                            <h2>Bachelor of Computer Science and Information Technology</h2>

                            <span>
                                <FaCalendarAlt className='ie' />
                                <p>Sep 2026 - Present</p>
                            </span>
                            <span>
                                <FaMapMarkerAlt className='ie' />
                                <p className='s'>Al-Riyada University for Science and Technology</p>
                                <GoDotFill className='ie' />
                                <span className='pg'> Menoufia, Egypt</span>
                            </span>
                            <p className='ach'>Key Achievements:</p>
                            <ul>
                                <li className='li'>Currently enrolled as a first-year student in the Bachelor of Computer Science and Information Technology program, focusing on developing a strong foundation <br />
                                    in computer science, programming, and software development.</li>
                            </ul>
                        </div>

                        <div className='ed'>
                            <h2>Azhar Secondary School</h2>

                            <span>
                                <FaCalendarAlt className='ie' />
                                <p>Sep 2023 - Jun 2025</p>
                            </span>
                            <span>
                                <FaMapMarkerAlt className='ie' />
                                <p className='s'>Abu El-Matamir Girls’ Al-Azhar Institute</p>
                                <GoDotFill className='ie' />
                                <span className='pg'>Beheira, Egypt</span>
                            </span>
                            <p className='ach'>Key Achievements:</p>
                            <ul>

                                <li className='li'> Successfully completed secondary education in 2025 after beginning the program in 2023, building a strong academic foundation for pursuing higher education <br />
                                    in Computer Science.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}