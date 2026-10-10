import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import './Projects.css'
import { ProjectsData } from './ProjectsData.js'
export function Projects() {
    return (
        <>
            <section id='projects'>
                <h1>Projects</h1>
                <p className='sub-title-projects'>Showcasing my work across personal projects</p>
                <div className="cards-projects">
                    {
                        ProjectsData.map((item) => {
                            const Image = item.image
                            return (
                                <>
                                    <div className='card-projects' >
                                        <div className="img">
                                            <img src={Image} alt={item.title} />
                                        </div>
                                        <div className="projects-skills">
                                            {item.skills.map((skill) => (
                                                <span className="projects-skill-circle" key={skill}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                        <h2>{item.title}</h2>
                                        <p className='desc-project'>{item.description}</p>
                                        <div className="links">
                                            <a href={item.githubUrl} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                            <a href={item.liveUrl} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
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