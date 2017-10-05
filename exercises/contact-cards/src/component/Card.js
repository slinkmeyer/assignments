import React from 'react';

function Card(props){
  return (
    <div className="cards">
    <h1> I am {props.name}
    <img src={props.img}/>
    </h1>
    </div>
  )
}

export default Card;
