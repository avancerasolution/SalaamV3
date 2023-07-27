import React, { Fragment, useEffect, useRef, useState} from "react";
import { Link } from 'react-router-dom';
import mission from "../../Assets/video/mission.mp4";
function Vision() {
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

      <div id='ntn' className='row whoweare mission left'>
        
    
        
        <div className='col-sm-5 allvisions'>
          <div className='vision'>
            <h2 data-aos="fade-right" data-aos-duration="4000" className='uniq'>Vision</h2>
              <p data-aos="fade-right" data-aos-duration="4000">To become Pakistan’s 1st Family Takaful Company in the area of Life InsurTech by providing shariah compliant life and savings products to the unserved and underserved segments of society.</p>

          </div>

          <div className='vision'>
            <h2 data-aos="fade-right" data-aos-duration="4000" className='uniq'>Mission</h2>
            <p data-aos="fade-right" data-aos-duration="4000">We believe in creating Impact on society through provision of customer-centric shariah-compliant products to the underserved and to existing disgruntled customers of life insurance market through extensive use of technology to create a sustainable business model which has the potential to transform the life insurance industry of Pakistan. Our philosophy is to enhance financial resilience of customers whose protection and saving needs have not been adequately served.</p>

          </div>
        </div>

        <div className='col-sm-7'>
              <video ref={videoRef} autoPlay loop muted playsInline>

              <source src={mission} type="video/mp4" />
              {/* Add additional <source> tags for different video formats */}
              </video>
        </div>

      </div>
    </Fragment>
  )
}

export default Vision