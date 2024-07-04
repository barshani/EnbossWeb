import React from 'react'
import { ReactComponent as Netanya } from '../assets/images/Park480-webp/netanya.webp';

function ParkCard({park}) {
  return (
    <div className="parkCard" key={park._id}>
            <div className='card'>
              <img src={park.img} alt={park.alt} />
              <div className='cardInfo'>
                <h3>{park.parkName}</h3>
                <p>{park.areaHeb}</p>
                <img src="../../src/assets/images/Park480-webp/netanya.webp" />

              </div>
            </div>
          </div>
    
  )
}

export default ParkCard

