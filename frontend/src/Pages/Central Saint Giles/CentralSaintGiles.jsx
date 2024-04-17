import React from 'react'
import Giles from '../../Section/SaintGiles/Giles'
import Gallery from '../../Section/Gallery/Gallery'
import DevelopmentTeam from '../../Section/DevelopmentTeam/DevelopmentTeam'
import '../Home/Home.css'
import './CentralSaintGiles.css'

import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs'


const CentralSaintGiles = () => {
  return (
    <div className='projects-page'>
        <Breadcrumbs/>
      <Giles/>
      <Gallery/>
      <DevelopmentTeam/>
    </div>
  )
}

export default CentralSaintGiles
