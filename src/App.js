import Map from "./components/Map";
import React, { useState, useEffect } from 'react'
import { Loader } from "./components/Loader";
import Header from "./components/Header";


function App() {
  const [eventData,setEventData] = useState([]);
  const [loading,setLoading] = useState(false);

  // useEffect(()=>{
  //   const fetchData = () => {
  //     setLoading(true);
  //     fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
  //     .then(res=>res.json())
  //     .then(data=>{
  //       setEventData(data.events);
  //     })
  //     setLoading(false);
  //   }
  //   fetchData();
  //   console.log(eventData)
  // },[])

  useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const {events} = await res.json(); 
      console.log(events);
      setEventData(events);
      setLoading(false);
      
    }

    fetchData();
  },[])
  
  	
  return (
    <div>
      <Header/> 
      {!loading ? <Map eventData={eventData}/> : <Loader/>}
    </div>
  );
}
  
export default App;
