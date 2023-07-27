import React, { Fragment } from 'react'
import Homebanner from '../Components/Home/Homebanner'
import Homemenu from '../Components/Home/Homemenu'
import Productmenus from '../Components/Home/Productmenus'
import Newsmenu from '../Components/Home/Newsmenu'
import Appsdownload from '../Components/Home/Appsdownload'

function Home({change, setChange}) {
  return (
    <Fragment>
      <div className='fadeInLeft'>
        <Homebanner/>
        <Homemenu change={change} setChange={setChange}/>
        <Productmenus/>
        <Newsmenu/>
        <Appsdownload/>
        </div>
    </Fragment>
    
  )
}

export default Home