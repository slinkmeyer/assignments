import React from "react";

function Services(props){
  const id = props.match.params.id;
  const serviceInfo = props.searchById(id);
  return (
    <div>
        <h1>{serviceInfo.title}</h1>
        <p>{`$${serviceInfo.price}`}</p>
        <p>{serviceInfo.image}</p>
    </div>
  )
}

export default Services;
