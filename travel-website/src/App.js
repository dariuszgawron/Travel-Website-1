import React, { useEffect, useState } from 'react';
import {io} from 'socket.io-client';
import Trips from './Trips';
import './App.css';

const socket = io('ws://localhost:5000');

function App() {
  const [trips,setTrips] = useState([]);
  const [loading,setLoading] = useState(false);

  const fetchTrips = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => {
        socket.on('trips', (data)=>{
          resolve(setTrips(data.trips));
        })
      });
      setLoading(false);
    } catch(err) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTrips();
  }, []);

  if(loading)  
    return (
      <main className='main'>
        <div className='loader'>
          <div className='loader__content'></div>
        </div>
      </main>
    )
  else if(!trips.length) 
    return (
      <main className='main'>
        No data
      </main>
    )
  else
    return (
      <main className='main'>
        <Trips trips={trips} />
      </main>
    )
}

export default App;
