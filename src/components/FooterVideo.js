import React from "react";
import "./FooterVideo.css";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import Ticker from "react-ticker";

const FooterVideo = ({ channel, description, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div class="videoFooter__ticker">
          <LibraryMusicIcon className="videoFooter__icon" />
          <Ticker className="ticker" mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.
thenounproject.com/png/934821-200.png"
        alt="video footer"
      />
    </div>
  );
};

export default FooterVideo;
