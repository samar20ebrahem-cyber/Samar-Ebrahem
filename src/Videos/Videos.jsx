import './Videos.css'
import { FaPlay } from "react-icons/fa";
import { useState } from 'react';

import englishVideo from '../assets/SamarEn.mp4';
import arabicVideo from '../assets/SamarAr.mp4'
import englishPoster from './../assets/Images/SamarEnPo.png';
import arabicPoster from './../assets/Images/SamarArPo.png';

export function Videos() {
    const [activeVideo, setActiveVideo] = useState(null);
    const VideosData = [
        {
            id: 1,
            src: englishVideo,
            icon: '',
            title: 'who is Samar?',
            desc: 'English video',
            dir: 'ltr',
            poster: englishPoster,
        },
        {
            id: 2,
            src: arabicVideo,
            icon: '',
            title: 'مين هي سمر؟',
            desc: 'الفيديو بالعربي',
            dir: 'rtl',
            poster: arabicPoster,
        },
    ]
    return (
        <>
            <section className='videos'>
                <h1> My Videos</h1>
                <div className='card-videos'>
                    {
                        VideosData.map((vid) => (
                            <div className="card-vid" key={vid.id}>
                                <div className="blow" style={{
                                    backgroundImage: `url(${vid.poster})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                    {
                                        activeVideo === vid.id ? (
                                            <video
                                                src={vid.src}
                                                controls
                                                autoPlay
                                                width="100%"
                                                poster={vid.poster}
                                            />
                                        ) : (
                                            <button
                                                className="icon-dev"
                                                onClick={() => setActiveVideo(vid.id)}
                                                aria-label={`Play ${vid.title}`}
                                                style={{
                                                    backgroundImage: `url(${vid.poster})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center'
                                                }}
                                            >
                                                <FaPlay />
                                            </button>
                                        )
                                    }
                                </div>

                                <div className="desc-vid">
                                    {/* <p dir={vid.dir}>{vid.desc}</p> */}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </section>
        </>
    )
}

