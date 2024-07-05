import React from 'react'

function ParkCard({park}) {
  return (
    <div className="parkCard" key={park._id}>
            <div className='card'>
              <img src={park.img} alt={park.alt} />
              <div className='cardInfo'>
                <h3>{park.parkName}</h3>
                <p>{park.areaHeb}</p>
                <image s></image>
              </div>
            </div>
          </div>
    
  )
}

export default ParkCard

