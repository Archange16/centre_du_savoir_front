import { useState } from "react";

const Video = () => {
    const [openVideo, setOpenVideo] = useState(false);

    const openVideoModal = () => {
        setOpenVideo(true);
    };

    const closeVideoModal = () => {
        setOpenVideo(false);
    };

    return (
        <>
            <div className="video__one">
                <span className="video-play-btn" onClick={openVideoModal}>
                    <i className="fas fa-play"></i>
                </span>
            </div>

            {openVideo && (
                <div className="video-modal-overlay" onClick={closeVideoModal}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="video-close-btn" onClick={closeVideoModal}>
                            &times;
                        </button>
                        <video width="100%" height="500px" controls autoPlay>
                            <source src="../assets/img/video/VID-20250722-WA0003.mp4" type="video/mp4" />
                            Votre navigateur ne supporte pas la lecture de vidéos.
                        </video>
                    </div>
                </div>
            )}
        </>
    );
};

export default Video;
