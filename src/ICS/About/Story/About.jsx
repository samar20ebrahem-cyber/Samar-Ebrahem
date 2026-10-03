import './About.css'
import Voice from '../../../assets/aboutVoice.mp3'
import { FaPlay, FaStop } from "react-icons/fa";
export function About() {
    return (

        <>
            <section>
                <h1>About Me</h1>
                <p className="po">Born in 2007. Building software in 2026.</p>
                <div className="rideo">
                    <div className='sit'>
                        <button className='pl'>
                            <FaPlay className='ip' />
                            <p>Play</p>
                        </button>
                        <audio src={Voice} ></audio>
                        <div className="audio-line"></div>
                        <p className='time'>0:00/0:44</p>

                        <button className='st'>
                            <FaStop className='is ' />
                            <p className='ps'>Stop</p>
                        </button>
                    </div>
                    <div className='parttwo'>
                        <p className='pt'>
                            I have been passionate about software development since I began my journey in March 2026 by learning C++ and mastering the core fundamentals of front-end <br />
                            development. By May, I started applying my knowledge through hands-on projects using HTML and CSS. In June, I built my first JavaScript project, learned Git <br />
                            and GitHub, and began hosting my work publicly. Since then, I’ve expanded my tech stack to include Bootstrap and Tailwind CSS, and I transitioned into learning <br />
                            React. My journey is built on continuous learning, problem-solving, and a dedication to crafting modern web applications—and I’m constantly evolving as a <br />
                            developer!
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

