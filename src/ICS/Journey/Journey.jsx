import './Journey.css'
import { JourneyData } from '../Journey/JourneyData.js'
import { FaRoute } from "react-icons/fa"
export function Journey() {
    return (
        <>
            <section className="journey">
                <h1>My Journey</h1>

                <div className="journey-timeline">
                    {
                        JourneyData.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div key={item.id} className={`journey-timeline-item ${index % 2 === 0 ? 'journey-left' : 'journey-right'
                                    }`}>
                                    <div className="journey-card">
                                        <span className='journey-time'>
                                            <Icon className='journey-item-icon' />
                                            <span>{item.time}</span>
                                        </span>
                                        <h2>{item.titel}</h2>
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="journey-icon-circle">
                                        <FaRoute />
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