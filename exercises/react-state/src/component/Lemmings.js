import React from "react";

function Lemmings() {
  return (
    <div>
        <h1>Lemmings Killed: {this.state.lemmingsKilled}</h1>
        <button onClick={props.killALemming}>Kill a Lemming</button>
        <button onClick={props.saveALemming}>Save a Lemming</button>
        </div>
  )
}

export default Lemmings;
