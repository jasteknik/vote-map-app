import React from 'react';

const displayMaps = (props) => {
  
  if (props.maps.length > 0) {

    //Go through new props.arr and map it in <li> format
    return(

      <ul>
        {props.maps.map( (object, i) =>  <li key={i}>{i+1}: {object.name}: {object.count}</li>)}
      </ul>
    )
  }

  else return <p>No voting data</p>
}

export default displayMaps;