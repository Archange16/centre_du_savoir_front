//"use client";
import ReactPlayer from "react-player";
import { useState } from "react";

const VideoPlayer = ({ videoUrl, titreId, userId }) => {
  console.log("VideoPlayer videoUrl:", videoUrl);
  const [completed, setCompleted] = useState(false);

  const handleVideoEnd = async () => {
    if (completed) return;

    await fetch('/api/progressions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titreId, userId })
    });

    setCompleted(true);
  };

  return (
    <div className="border rounded p-3">
      <ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        onEnded={handleVideoEnd}
      />
      {completed && <p className="text-success mt-2">✔️ Vidéo complétée</p>}
    </div>
  );
};

export default VideoPlayer;
