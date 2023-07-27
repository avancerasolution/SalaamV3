import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { News } from "../../Data/Data";

function convertToSlug(text) {
  return text.trim().toLowerCase().replace(/\s+/g, '-');
}

function Recentnews() {
  return (
    <Fragment>
      <div className='sidenews'>
        <h2 className='posthead'>Recent Post</h2>
        {News.map((data) => (
          <Link to={`/news/${convertToSlug(data.heading)}`} onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }} key={data.key}>
            <div className='row'>
              <div className='col-sm-5'>
                <img src={data.feature} alt="asd" />
              </div>
              <div className='col-sm-7'>
                <h4>{data.archead}</h4>
                <p>{data.Date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
}

export default Recentnews;