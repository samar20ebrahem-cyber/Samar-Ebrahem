import './Journey.css'
import { JourneyData } from '../Journey/JourneyData.js'
import { FaRoute } from "react-icons/fa"
export function Journey() {
    return (
        <>
            <section className="journey">
                <h1>My Journey</h1>

                <div className="timeline">
                    {
                        JourneyData.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'
                                    }`}>
                                    <div className="education-card">
                                        <span className='i-time'>
                                            <Icon className='ie' />
                                            <span>{item.time}</span>
                                        </span>
                                        <h2>{item.titel}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="icon-circle">
                                        <FaRoute/>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section >
        </>
    )
}