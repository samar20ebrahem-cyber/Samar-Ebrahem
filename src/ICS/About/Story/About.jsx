import './About.css'
import Voice from '../../../assets/aboutVoice.mp3'
import { FaPlay, FaStop } from "react-icons/fa";
import { useRef, useState } from "react"

export function About() {
    const audioRef = useRef(null)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [stopClicked, setStopClicked] = useState(false)
    const handelGo = () => {
        audioRef.current.play()
    }
    const handleStop = () => {
        audioRef.current.pause()
        setStopClicked(true)
    }
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes} : ${seconds.toString().padStart(2, '0')} `
    }
    return (

        <>
            <section>
                <h1>About Me</h1>
                <p className="po">Born in 2007. Building software in 2026.</p>
                <div className="rideo">
                    <div className='sit'>
                        <button className='pl' onClick={handelGo}>
                            <FaPlay className='ip' />
                            <p>Play</p>
                        </button>
                        <audio src={Voice} ref={audioRef}
                            onLoadedMetadata={() => {
                                setDuration(audioRef.current.duration)
                            }}
                            onTimeUpdate={() => {
                                setCurrentTime(audioRef.current.currentTime);
                            }}></audio>
                        <input type='range' className="audio-line" min="0" max={duration} value={currentTime} />
                        <span className='time'>
                            <span>{formatTime(currentTime)}</span>
                            <span>/ {formatTime(duration)}</span></span>

                        <button className={`st ${stopClicked}? "clicked" : "" ` } onClick={handleStop}>
                            <FaStop className={`is ${stopClicked}? "clicked" : "" ` }/>
                            <p className={`ps ${stopClicked}? "clicked" : "" ` }>Stop</p>
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

