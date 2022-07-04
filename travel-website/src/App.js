import React, { useEffect, useState } from 'react';
import {io} from 'socket.io-client';
import Trips from './Trips';
import './App.css';

const apiUrl = 'http://localhost:5000';
const apiSocketUrl='ws://localhost:5000';
const socket = io(apiSocketUrl);

function App() {
  const [trips,setTrips] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');

  const fetchTrips = async () => {
    try {
      setLoading(true);
      await new Promise(async resolve => {
        await fetch(`${apiUrl}/trips`)
        .then(res => res.json())
        .then(data => {
          resolve(setTrips(data['trips']['trips']))
        });
      });
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTrips();

    const onTripsChange = data => {
      setTrips(data.trips);
    }
    socket.on('trips', onTripsChange);

    return () => {
      socket.off('trips', onTripsChange);
    }
  }, []);

  if(loading) {
    return (
      <main className='main'>
        <div className='loader'>
          <div className='loader__content'></div>
        </div>
      </main>
    )
  } else if(!trips.length) {
    return (
      <main className='main'>
        No data
      </main>
    )
  } else if(error!=='') {
    return (
      <main className='main'>
        {error}
      </main>
    )
  }
    
  return (
    <main className='main'>
      <Trips trips={trips} />
    </main>
  )
}

export default App;
