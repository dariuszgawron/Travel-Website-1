// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import Trips from './Trips';

const tripsUrl = 'http://localhost:5000/trips';

function App() {
  const [trips,setTrips] = useState([]);
  const [loading,setLoading] = useState(false);

  const fetchTrips = async () => {
    try {
      setLoading(true);
      const response = await fetch(tripsUrl);
      const tripsData = await response.json();
      setTrips(tripsData);
      console.log(trips.length);
      setLoading(false);
    } catch(err) {
      setLoading(false);
    }
  }

  // działa
  // useEffect(() => {
  //   fetchTrips();
  // }, []);

  // useEffect(() => {
  //   const socket = new WebSocket('wss://localhost:5000/trips');
  //   socket.addEventListener('message', ({ data }) => {
  //     const parsed = JSON.parse(data);
  //     // setNewRequest(parsed.vc_request);
  //   });
  //   return () => socket.close();
  // }, []);
  // const ws = useRef(null);

  // // useEffect(() => {
  // //   ws.current = new WebSocket("ws://localhost:8080/trips");
  // //   ws.current.onopen = () => console.log("ws opened");
  // //   ws.current.onclose = () => console.log("ws closed");

  // //   const wsCurrent = ws.current;

  // //   return () => {
  // //       wsCurrent.close();
  // //   };
  // // }, []);

  // // useEffect(() => {
  // //   if (!ws.current) return;

  // //   ws.current.onmessage = e => {
  // //       const message = JSON.parse(e.data);
  // //       console.log("e", message);
  // //   };
  // // }, []);

  if(loading)  
    return (
      <main>
        Loading...
      </main>
    )
  else if(!trips.length) 
    return (
      <main>
        No data
      </main>
    )
  else
    return (
      <main>
        <Trips trips={trips} />
      </main>
    )
}

export default App;
