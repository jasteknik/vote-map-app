import React, {useState, useEffect, useRef} from 'react';
import InputButton from './Components/inputButton'
import InputForm from './Components/InputForm'
import DisplayMaps from './Components/displayMaps'

import GetData from './Services/GetData'

import './App.css';


function App() {

  const [ maps, setMaps ] = useState([])

  const ACTIVE_MAPS = [
    "de_dust2",
    "de_inferno",
    "de_nuke",
    "de_mirage",
    "cs_assault"
  ]

  //Update vote counts every five seconds
  useEffect(() => {
    const interval = setInterval( update, 5000);
    return () => clearInterval(interval);
  }, []);


  //Handle for voting map
  const handleNewMapVote = (event, id) => {
    event.preventDefault()
    console.log("hello " + id)
    const data = {
      name: id,
      count: 1
    }

    GetData
      .newMapVote(data)
      .then(
        update()
      )
  }

  //Handle for updating vote map count
  const handleUpdate = (event, aMaps, aOrder) => {
    event.preventDefault()
    console.log("Update count")
    const data = {
      maps: aMaps,
      order: aOrder
    }

    GetData
      .update(data)
      .then(response => {
        setMaps(response.data)
        console.log('refresh data complete')
        console.log(response.data)
        }
      )
  }

  const handleClearMaps = (event) => {
    event.preventDefault()
    console.log("CLEAR MAP DATA")
    GetData
      .clear()
      .then(
        update()
      )
      
  }

  //Update function for map votes
  function update() {
    const data = {
      maps: 1,
      order: 0
    }

    GetData
      .update(data)
      .then(response => {
        setMaps(response.data)
        console.log('refresh data complete')
        console.log(response.data)
        }
      )
  }

  

  return (
    <div>
      <h1>Test</h1>
      <div>
        <button onClick={(event) => handleUpdate(event, 1, 0)}>UPDATE</button>
      </div>
      
      <div>
        <button onClick={(event) => handleClearMaps(event)}>CLEAR</button>
      </div>
      <InputForm 
        mapName={ACTIVE_MAPS}
        handleVote={handleNewMapVote}
      />

      <DisplayMaps maps={maps} />

    </div>
  );
}

export default App;
