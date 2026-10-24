import './Connect.css'
import { ConnectData } from './ConnectData.js'
export function Connect() {
    return (
        <>
            <section className='connect' id='connect'>
                <h1>Let's Connect& Follow Me</h1>
                <p className='simple'>Showcasing my work across personal projects</p>
                <div className='cards-connect'>
                    {
                        ConnectData.map((item) => {
                            const Icon = item.icon
                            const Arrow = item.arrow
                            return (
                                <div key={item.id} className='card-connect'>
                                    <div className="title-connect">
                                        <Icon />
                                        <h3>{item.title} </h3>
                                    </div>
                                    <p className='desc'>{item.desc}</p>
                                    <p className='src-button'>{item.srcbutton}</p>
                                    <button>
                                        <a href={item.link}>{item.titlebutton}</a>
                                        <Arrow className='arrow' />
                                    </button>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </section>
        </>
    )
}