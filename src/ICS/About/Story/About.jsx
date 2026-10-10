import './About.css'
import Voice from '../../../assets/aboutVoice.mp3'
import { FaPlay, FaStop } from "react-icons/fa";
import { useRef, useState } from "react"

export function About() {
    const audioRef = useRef(null)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [stopClicked, setStopClicked] = useState(false)
    const [playClicked, setPlayClicked] = useState(false)
    const handelGo = () => {
        audioRef.current.play()
        setPlayClicked(true)
         setStopClicked(false)
    }
    const handleStop = () => {
        audioRef.current.pause()
        setStopClicked(true)
        setPlayClicked(false)
    }
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes} : ${seconds.toString().padStart(2, '0')} `
    }
    return (

        <>
            <section id='about'>
                <h1>About Me</h1>
                <p className="about-subtitle">Born in 2007. Building software in 2026.</p>
                <div className="about-audio-layout">
                    <div className='about-audio-player'>
                        <button className={`about-play-button ${playClicked ? "clicked" : ""}`} onClick={handelGo}>
                            <FaPlay className='about-play-icon' />
                            <p>Play</p>
                        </button>
                        <audio src={Voice} ref={audioRef}
                            onLoadedMetadata={() => {
                                setDuration(audioRef.current.duration)
                            }}
                            onTimeUpdate={() => {
                                setCurrentTime(audioRef.current.currentTime);
                            }}></audio>
                        <input type='range' className="about-audio-progress" min="0" max={duration} value={currentTime} />
                        <span className='about-audio-time'>
                            <span>{formatTime(currentTime)}</span>
                            <span>/ {formatTime(duration)}</span></span>
                         
                        <button  className={`about-stop-button ${stopClicked ? "clicked" : ""}`} onClick={handleStop}>
                            <FaStop className={`about-stop-icon` }/>
                            <p className='about-stop-label'>Stop</p>
                        </button>
                    </div>
                    <div className='about-description'>
                        <p className='about-description-text'>
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

