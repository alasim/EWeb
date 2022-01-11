import React, { Fragment } from "react";

export default function VideoLoop() {
  const videoEl = React.useRef<any>();

  /* React.useEffect(() => {
    const element = videoEl.current;
    element.play();
  }, []); */
  return (
    <div className="">
      <div className="">
        <iframe
          className=""
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/Ck4ScgS0v58?controls=0&autoplay=1&mute=1&rel=0&enablejsapi=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
// src="https://www.youtube.com/embed/Ck4ScgS0v58?playlist=Ck4ScgS0v58?autoplay=1&loop=1&mute=1&controls=0&rel=0"
// ?rel=0&modestbranding=1&autohide=1&showinfo=0
// https://www.youtube.com/embed/Ck4ScgS0v58?playlist=Ck4ScgS0v58&loop=1
