import React from "react";
import Services from "./views/Services"
import {Switch, Route} from "react-router-dom";

function ServiceComponent(props){
  let searchById = props.searchById;
  return (
    <div>
      <div style={{display: "flex", flexDirection: "column" }}> {props.genLinks()}</div>
      <Switch>
        <Route path="/services/:id" render={(props)=>{
          return (
              <Services searchById={searchById}{...props}/>
          )
        }}/>
       </Switch>
    </div>
  )
}

export default ServiceComponent;
