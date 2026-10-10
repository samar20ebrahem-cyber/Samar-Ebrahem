import './Projects.css'
import { ProjectsData } from './ProjectsData.js'
export function Projects() {
    return (
        <>
            <section>
                <h1>Projects</h1>
                <p>Showcasing my work across personal projects</p>
                <div className="cardimge">
                    {
                        ProjectsData.map((item) => {
                            const Image = item.image
                            return (
                                <>
                                    <div>
                                        <div className="img">
                                            <img src={Image} alt={item.title} />
                                        </div>
                                        <div className="skills">
                                            {item.skills.map((skill) => {
                                                return (
                                                    <>
                                                        <span>{skill}</span>
                                                    </>
                                                )
                                            })}
                                        </div>
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                        <div className="links">
                                            <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                                            <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}