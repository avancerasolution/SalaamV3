import React, { Fragment, useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import Fade from 'react-reveal/Fade';
import { Salaamcomitiee } from "../../Data/Data";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Comiitemanagment() {
  const [isFlipped, setIsFlipped] = useState(Array(Salaamcomitiee.length).fill(false));

  const handleClick = (index) => {
    setIsFlipped(prevState => {
      const newFlipped = [...prevState];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  useEffect(() => {
    AOS.refresh();
  }, [isFlipped]);

  return (
    <Fragment>
      <div className='container'>
        <div className='row'>
          {Salaamcomitiee.map((data, index) => (
            <div className='col-sm-4' key={index}>
              <Fade down delay={500}>
                <ReactCardFlip
                  isFlipped={isFlipped[index]}
                  flipDirection={data.animation}
                  containerStyle={{ height: '100%' }}
                >
                  <div>
                    <button onClick={() => handleClick(index)}>
                      <img src={data.image} alt='directors' />
                      <h3 className='dname'>{data.name}</h3>
                      <p className='designation'>{data.designation}</p>
                    </button>
                  </div>

                  <div>
                    <button onClick={() => handleClick(index)} className='backbox'>
                      <p data-aos="fade-right" data-aos-duration="4000">{data.detail}</p>
                    </button>
                  </div>
                </ReactCardFlip>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Comiitemanagment;

