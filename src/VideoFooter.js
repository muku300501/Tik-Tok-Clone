import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
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
        src="https://lh3.googleusercontent.com/proxy/YqNyP_aKlK7u-Lsl3QaiI-yiCNPtJv-4GDGcJw_fSz1Oq-55gVy3GYdJr6wMXMb19ZakGGjYuPi_001HtOtEttPH5s7OVaruLTLDbmvRDHNmGjUBJ3uztTk"
        alt="spinner"
      />
    </div>
  );
}

export default VideoFooter;
