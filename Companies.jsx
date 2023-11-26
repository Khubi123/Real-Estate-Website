import React from 'react'
import './Companies.css'
import Prologist from '../Images/prologis.png'
import Tower from '../Images/tower.png'
import reality from '../Images/realty.png'
import equinix from '../Images/equinix.png'



const Companies = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="padding innerwidth flexCenter c-container">
         <img src={Prologist} alt="" />
         <img src={Tower} alt="" />
         <img src={reality} alt="" />
         <img src={equinix} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Companies
