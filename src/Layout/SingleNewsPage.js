import React from 'react'
import { Fragment } from 'react'
import SingleNews from '../Components/News/SingleNews'

function SingleNewsPage() {
  return (
    <Fragment>
        <div className='container-fluid faderight'>
                <div className='row'>
                    <SingleNews/>
                </div>

            </div>
    </Fragment>
  )
}

export default SingleNewsPage