import React, { useEffect, useState } from 'react'
import '../../styles/hebrewStyles/header.css';
import '../../styles/hebrewStyles/parksPage.css';
import { getParks } from '../../services/apiService';
import ParktCard from '../../components/ParkCard';
import { Park } from './HomePage';

function ParksPage() {
  const [parks, setParks] = useState<Park[]>([]);

  useEffect(() => {
    getParks().then((json: Park[]) => {
      setParks(json);
    });
  }, []);
  return (
    <section className='shopCards'>
      <div className='productCards'>
        {parks.map((park)=>(
          <ParktCard park={park}/>
        ))}
        </div>
      </section>
  )
}

export default ParksPage