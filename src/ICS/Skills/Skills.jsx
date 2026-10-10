import './Skills.css'
import { SkillsData } from './SkillsData.js'
export function Skills() {
    return (
        <>
            <section id='skills'>
                <h1>Skills</h1>
                <p className='p1'>Technologies and tools I work with to bring ideas to life</p>
                <div className='cards'>
                    {
                        SkillsData.map((item) => {
                          
                            return (
                                <div key={item.id} className='card'>
                                    <img src={item.icon} alt={item.name} width="60" height="60" />
                                    <p className='name'>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}