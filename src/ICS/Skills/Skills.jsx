import './Skills.css'
import { SkillsData } from './SkillsData.js'
export function Skills() {
    return (
        <>
            <section>
                <h1>Skills</h1>
                <p className='p1'>Technologies and tools I work with to bring ideas to life</p>
                <div className='cards'>
                    {
                        SkillsData.map((item) => {
                            const Icons = item.icon
                            return (
                                <div key={item.id} className='card'>
                                    <Icons />
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