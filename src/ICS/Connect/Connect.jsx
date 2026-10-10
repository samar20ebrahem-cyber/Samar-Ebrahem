import './Connect.css'
import { ConnectData } from './ConnectData.js'
export function Connect() {
    return (
        <>
            <section>

                <h1>Let's Connect& Follow Me</h1>
                <p>Showcasing my work across personal projects</p>
                <div>
                    {
                        ConnectData.map((item) => (
                            <div key={item.id}>

                            </div>
                        ))
                    }

                </div>
            </section>
        </>
    )
}