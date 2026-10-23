import './Terminal.css'
import { useState } from "react"

export function Terminal() {
    const [command, setCommand] = useState("")
    const [terminal, setTerminal] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const commands = {
        help: `Available commands:
about, journey, education, skills, projects, contact`,

        about: `Hi! I'm Samar Ebrahem, a Frontend Developer.
I'm passionate about building modern, responsive
websites and interactive user experiences.
I'm always learning and improving my coding skills.`,

        journey: `I was born in 2007, and my journey into
programming started with learning the fundamentals
of web development.

I learned HTML, CSS, and JavaScript, then started
exploring React to build interactive web applications.
I keep practicing by building projects and learning
new technologies step by step.`,

        education: `Bachelor's Degree in Computer Science
and Information Technology.

Al-Riyada University for Science and Technology
Menoufia, Egypt
Sep 2026 - Present

Previously studied at Abu El Matamir Azhar
Girls' Secondary Institute, Beheira, Egypt.
Graduated in 2025.`,

        skills: `HTML5, CSS3, JavaScript, React,
Bootstrap, Git, GitHub, Responsive Design,
DOM Manipulation, Local Storage.
Currently improving my React skills.`,

        projects: `My projects:
1. To-do App - Task Management Application
2. GitHub Developer Finder
3. Bug Tracking System
4. Stopwatch

Type a project command to learn more.`,

        todo: `To-do App - Task Management Application

A task management website that helps users
organize their daily tasks.

Technologies: HTML, CSS, JavaScript,
i18next for language translation.`,

        "github-finder": `GitHub Developer Finder

A project focused on finding GitHub developers
and exploring developer information.

Technologies: Frontend web technologies.
Add the exact API and tools you used here.`,

        "bug-tracking": `Bug Tracking System

A web application for displaying, searching,
and managing bug reports.

Technologies: HTML, CSS, JavaScript,
Local Storage.`,


        stopwatch: `Stopwatch

A timer application for measuring elapsed time.

Technologies: Add the exact technologies
used in your project here.`,

        contact: `Let's connect!

GitHub:
https://github.com/samar20ebrahem-cyber

LinkedIn:
https://www.linkedin.com/in/samar-ebrahem-9953b13b/

Email:
sam2026ar@gmail.com`
    }

    function handleCommand(e) {
        e.preventDefault()
        const value = command.trim().toLowerCase()
        if (!value || isLoading) return
        if (value === 'clear') {
            setCommand('')
            setTerminal([])
            return
        }
        setIsLoading(true)
        setCommand('')
        setTimeout(() => {
            const output = commands[value] || `Command not found: ${value}`
            setTerminal((prev) => [
                ...prev,
                {
                    command: value,
                    output: output
                }
            ])
            setIsLoading(false)
        }, 1500)
    }
    return (
        <>
            <div className="terminal">
                <h1>Samar Ebrahem</h1>
                <div className="body">
                    <p>~Welcome</p>
                    <p>~Help</p>


                    {
                        terminal.map((item, index) => {
                            return (
                                <div key={index} className="terminal-output">
                                    <p>
                                        <span className="prompt">
                                            samar@portfolio:~$
                                        </span> {" "}
                                        {item.command}
                                    </p>
                                    {isLoading && index === terminal.length - 1 && (
                                        <div className="terminal-loading">
                                            <span className="loading-dot"></span>
                                            Processing command...
                                        </div>
                                    )}
                                    <p className="output">{item.command === 'contact' ? (
                                        <div className="contact-links">
                                            <p>
                                                GitHub:{" "}
                                                <a href="https://github.com/samar20ebrahem-cyber">
                                                    https://github.com/samar20ebrahem-cyber
                                                </a>
                                            </p>
                                            <p>
                                                LinkedIn:{" "}
                                                <a href="https://www.linkedin.com/in/samar-ebrahem-9953b13b/">
                                                    https://www.linkedin.com/in/samar-ebrahem-9953b13b/
                                                </a>
                                            </p>

                                            <p>
                                                Email:{" "}
                                                <a href="mailto:sam2026ar@gmail.com">
                                                    sam2026ar@gmail.com
                                                </a>
                                            </p>
                                        </div>
                                    ) : (
                                        <p className={`output ${!commands[item.command] ? 'error' : ''}`}>
                                            {item.output}
                                        </p>
                                    )}
                                    </p>
                                </div>
                            )
                        })
                    }
                    <form onSubmit={handleCommand}>
                        <label htmlFor="terminal-input">samar@portfolio:~$</label>
                        <span>  </span>
                        <input id="terminal-input" value={command} onChange={(e) => setCommand(e.target.value)} autoComplete="off" />
                    </form>
                </div>
            </div>
        </>
    )
}