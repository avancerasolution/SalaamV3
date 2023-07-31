import React, { Fragment, useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Videohome from "../../Assets/video/home.mp4";
import Videomob from "../../Assets/video/videomob.mp4";
import buyn from "..//../Assets/img/buyn.png";
function Homebanner() {
  const [canAutoplay, setCanAutoplay] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      if (video && !video.paused && !video.ended) {
        return; // Video is already playing or has ended
      }

      if (canAutoplay) {
        video.play().catch(() => {
          // Handle autoplay error
        });
      }
    };

    const checkAutoplay = () => {
      if (video) {
        video.muted = true; // Ensure video is muted for autoplay to work
        video.play().then(() => {
          setCanAutoplay(true); // Autoplay is allowed
          video.pause();
        });
      }
    };

    // Check for autoplay after a user interaction (click or touch) or when the component mounts
    document.addEventListener("click", checkAutoplay);
    document.addEventListener("touchstart", checkAutoplay);

    return () => {
      document.removeEventListener("click", checkAutoplay);
      document.removeEventListener("touchstart", checkAutoplay);
    };
  }, [canAutoplay]);

  return (
    <Fragment>
      <div className="container banner">
        <div className="row">
          <div className="video-container desktop">
            <video ref={videoRef} autoPlay loop muted playsInline>
              <source src={Videohome} type="video/mp4" />
              {/* Add additional <source> tags for different video formats */}
            </video>
            {/* Your content goes here */}
          </div>

          <div className="video-container mobile">
            <video ref={videoRef} autoPlay loop muted playsInline>
              <source src={Videomob} type="video/mp4" />
              {/* Add additional <source> tags for different video formats */}
            </video>
            {/* Your content goes here */}
          </div>

          <Fade left>
            <div className="col-sm-12 none">
              <h2>
                <span>
                  <Fade delay={500}>Welcome </Fade>
                  <Fade delay={900}> To </Fade>
                </span>
                <Fade delay={1200}> Salaam </Fade>
                <Fade delay={1600}>Takaful </Fade>

                <span>
                  <Fade delay={2000}>Limited </Fade>
                </span>
              </h2>
            </div>

            <div className="col-sm-6 buttonscta">
              <Fade right delay={800}>
                <Link to="/buynow" className="buy"> <img src={buyn} width="40" height="40"/>Buy Now
                </Link>
              </Fade>
              <Fade left delay={800}>
                <Link to="/" className="call">
                <img src="https://cdn-icons-png.flaticon.com/512/7887/7887071.png" width="20" height="20"/> Call Us
                </Link>
              </Fade>
            </div>
          </Fade>
        </div>
      </div>
    </Fragment>
  );
}

export default Homebanner;