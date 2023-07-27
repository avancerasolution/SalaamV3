import React, { Fragment } from 'react'
import Sidemenu from '../Components/Sidebar/Sidemenu'

function SideBar({change, setChange}) {
  return (
    <Fragment>
        <div className='container faderight menuside'>
      <div className='row'>
          <Sidemenu change={change} setChange={setChange}/> 
      </div>
      </div>
    </Fragment>
  )
}

export default SideBar