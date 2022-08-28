import React, { useRef, useState } from "react";
import "./Video.css";
import FooterVideo from "./FooterVideo";
import VideoSideBar from "./VideoSideBar";
const Video = ({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        src={url}
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      ></video>
      <FooterVideo channel={channel} description={description} song={song} />
      <VideoSideBar likes={likes} shares={shares} messages={messages} />
    </div>
  );
};

export default Video;
