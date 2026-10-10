import './Videos.css'
import { FaPlay } from "react-icons/fa";
import { useState } from 'react';

import englishVideo from '../../assets/englishVideo.mp4';
import arabicVideo from '../../assets/arabicVideo.mp4';


export function Videos() {
    const [activeVideo, setActiveVideo] = useState(null);
    const VideosData = [
        {
            id: 1,
            src: englishVideo,
            icon: '',
            title: 'who is Samar?',
            desc: 'English video'
        },
        {
            id: 2,
            src: arabicVideo,
            icon: '',
            title: 'مين هي سمر؟',
            desc: 'الفيديو بالعربي'
        },
    ]
    return (
        <>
            <section>
                <div className='card-videos'>
                    {
                        VideosData.map((vid) => (
                            <div className="card-vid" key={vid.id}>
                                <div className="blow">
                                    {
                                        activeVideo === vid.id ? (
                                            <video
                                                src={vid.src}
                                                controls
                                                autoPlay
                                                width="100%"
                                            />
                                        ) : (
                                            <button
                                                className="icon-dev"
                                                onClick={() => setActiveVideo(vid.id)}
                                                aria-label={`Play ${vid.title}`}
                                            >
                                                <FaPlay />
                                            </button>
                                        )
                                    }
                                    </div>

                                    <div className="desc-vid">
                                        <p>{vid.desc}</p>
                                    </div>
                                </div>
                                ))
                    }
                            </div>

            </section>
        </>
    )
}