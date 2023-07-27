import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { News } from '../../Data/Data';
import Fade from 'react-reveal/Fade';
import Recentnews from './Recentnews'

function convertToSlug(text) {
  return text.trim().toLowerCase().replace(/\s+/g, '-');
}

function SingleNews() {
  const { heading } = useParams();
  console.log(heading);

  const newsItem = News.find((data) => convertToSlug(data.heading) === heading);

  return (
    <Fragment>
      <div className='container governancemain motor'>
        <div className='row'>
          <div className='col-sm-12 heads govbanner'>
            <Fade up delay={500}><h2 className="oswald">News & Events</h2></Fade>
          </div>
        </div>

        <div className='row singleblog'>
          <div className='col-sm-9 singlenews'>
            {newsItem && (
              <div className='container-fluid news' key={newsItem.heading}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-sm-12 heads'>
                      <Fade left delay={500}><img src={newsItem.feature} alt='img' /></Fade>
                      <Fade left delay={500}><h2 className="oswald">{newsItem.heading}</h2></Fade>
                      <p className='date' data-aos="fade-right" data-aos-duration="4000"><b>Date</b>: {newsItem.Date}</p>
                    </div>
                    <div className='col-sm-12 heads text newsheight'>
                      <p data-aos="fade-right" data-aos-duration="4000">{newsItem.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='col-sm-3'>
            <Recentnews />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default SingleNews;