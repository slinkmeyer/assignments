import React from 'react';

function VacationComponent(props){
  return(
    <div style={{background: `url(${props.img}) no-repeat center center`}} className="container">
          <p>
        <h1>City: {props.place} </h1>
          </p>
          <p>
        <h2>Cost: {props.price} for {props.days} day </h2>
          </p>
          <p>
        <h3> Airfare: {props.airfare} </h3>
          </p>
        <h4> What to do:  {props.activities} </h4>
    </div>
  )
}

export default VacationComponent
