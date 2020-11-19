import React from 'react';

const inputButton = (props) => {
  console.log("Pressed vote button " + props.id)
  return(
    <>
     
        <div>
          {props.formText} 
          <button id={props.id} onClick={(event) => props.handleVote(event, props.id)}>{props.buttonText}</button>
          
        </div>
    </>
  )
}
export default inputButton;
