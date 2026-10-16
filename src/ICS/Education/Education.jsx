import './Education.css'
import { FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa"
import { GoDotFill } from 'react-icons/go'
export function Education() {
    return (
        <>
            <section className='education'>
                <h1>Education</h1>
                <p className='desc-education'>My academic journey.</p>
                <div className="education-timeline-layout">

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


                    <div className='education-details'>
                        <div className='education-card'>
                            <h2>Bachelor of Computer Science and Information Technology</h2>
                            <div className='time-edu'>                            
                                <FaCalendarAlt />
                                <p>Sep 2026 - Present</p>
                            </div>
                            <div className='educ-location'>
                                <div className='educ-institution'>
                                    <FaMapMarkerAlt />
                                    <p className='education-institution'>Al-Riyada University for Science and Technology</p>
                                </div>
                                <div className='educ-city'>
                                    <GoDotFill />
                                    <span> Menoufia, Egypt</span>
                                </div>
                            </div>
                            <p className='education-achievements-title'>Key Achievements:</p>
                            <ul>
                                <li className='education-achievement-item'>Currently enrolled as a first-year student in the Bachelor of Computer Science and Information Technology program, focusing on developing a strong foundation 
                                    in computer science, programming, and software development.</li>
                            </ul>
                        </div>

                        <div className='education-card'>
                            <h2>Azhar Secondary School</h2>

                            <div className='time-edu'>
                                <FaCalendarAlt />
                                <p>Sep 2023 - Jun 2025</p>
                            </div>
                            <div className='educ-location'>
                                <div className="educ-institution">
                                    <FaMapMarkerAlt />
                                    <p className='education-institution'>Abu El-Matamir Girls’ Al-Azhar Institute</p>
                                </div>
                                <div className="educ-city">

                                    <GoDotFill />
                                    <span className='education-location'>Beheira, Egypt</span>
                                </div>
                            </div>
                            <p className='education-achievements-title'>Key Achievements:</p>
                            <ul>
                                <li className='education-achievement-item'> Successfully completed secondary education in 2025 after beginning the program in 2023, building a strong academic foundation for pursuing higher education 
                                    in Computer Science.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}