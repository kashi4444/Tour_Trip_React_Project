import { useState } from 'react'
import './App.css'
import Tours from './Components/Tours'
import Data from './Components/Data'
function App() {
  const[tours, setTours]= useState(Data);
  function removeTour(id){
    const newTours = tours.filter((tour)=>{
      return tour.id !== id;
    })
      
    setTours(newTours);
  }
  function refreshHandler(){
    setTours(Data);
  }
  if(tours.length===0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn_white' onClick={refreshHandler}>Refresh</button>
      </div>
    )
  }
  return (
    <div className='App'>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}

export default App
