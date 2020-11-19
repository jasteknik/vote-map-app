import React from 'react';

const inputForm = (props) => {


  return(
    <>
    {props.mapName.map( (map, i ) =>  <div key={i + "_" + map}><button id={i} onClick={(event) => props.handleVote(event, map)}>Vote for {map}</button></div>)}
    
    </>
  )
} 

export default inputForm;