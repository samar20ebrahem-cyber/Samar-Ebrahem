import './Journey.css'
import { JourneyData } from '../Journey/JourneyData.js'
import { FaGraduationCap } from "react-icons/fa"
export function Journey() {
    return (
        <>
            <section>
                <h1>My Journey</h1>
                <div className="card">
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

                    <div className='education-content'>
                        {
                            JourneyData.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div key={item.id} className='ed'>
                                        <span>
                                            <Icon className='ie' />
                                            <span>{item.time}</span>
                                        </span>
                                        <h2>{item.titel}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section >
        </>
    )
}