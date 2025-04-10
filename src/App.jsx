import { useEffect, useState } from 'react';
import './App.css';
import Watch from './components/Watch/Watch';

function App() {

  const [watches,setWatches] = useState([]);

  useEffect(()=>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  },[])

 

  // const watches = [
  //   {
  //     id: 1,
  //     brand: 'Apple',
  //     model: 'Apple Watch Series 8',
  //     features: ['GPS', 'Heart Rate Monitor', 'Blood Oxygen Monitoring', 'Sleep Tracking', 'ECG'],
  //     price: 399,
  //     batteryLife: '18 hours',
  //     display: 'Always-On Retina Display',
  //     compatibility: ['iOS']
  //   },
  //   {
  //     id: 2,
  //     brand: 'Samsung',
  //     model: 'Galaxy Watch 5',
  //     features: ['GPS', 'Heart Rate Monitor', 'Blood Oxygen Monitoring', 'Sleep Tracking', 'ECG'],
  //     price: 279,
  //     batteryLife: '40 hours',
  //     display: 'Super AMOLED',
  //     compatibility: ['Android', 'iOS']
  //   },
  //   {
  //     id: 3,
  //     brand: 'Garmin',
  //     model: 'Forerunner 945',
  //     features: ['GPS', 'Heart Rate Monitor', 'Blood Oxygen Monitoring', 'Sleep Tracking', 'Advanced Running Metrics'],
  //     price: 599,
  //     batteryLife: '14 days',
  //     display: 'Transflective Memory-in-Pixel',
  //     compatibility: ['Android', 'iOS']
  //   },
  //   {
  //     id: 4,
  //     brand: 'Fitbit',
  //     model: 'Sense 2',
  //     features: ['GPS', 'Heart Rate Monitor', 'Blood Oxygen Monitoring', 'Stress Management', 'Skin Temperature Tracking'],
  //     price: 299,
  //     batteryLife: '6+ days',
  //     display: 'AMOLED',
  //     compatibility: ['Android', 'iOS']
  //   },
  //   {
  //     id: 5,
  //     brand: 'Amazfit',
  //     model: 'GTR 4',
  //     features: ['GPS', 'Heart Rate Monitor', 'Blood Oxygen Monitoring', 'Sleep Tracking', 'Pedometer'],
  //     price: 199,
  //     batteryLife: '14 days',
  //     display: 'AMOLED',
  //     compatibility: ['Android', 'iOS']
  //   }
  // ];





  return (
    <>
      
      <h1>Vite + React</h1>
  
     {
       watches.map(watch => <Watch key={watch.id} watch={watch}> </Watch>)
     }
    </>
  )
}

export default App
