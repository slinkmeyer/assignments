import React, { Component } from "react";

class Box extends Component{
  constructor(){
    super()
    this.state = {
      bgColor: "white"
    }
  }
  render(){
  const styles = {
    height: "100px",
    width: "100px",
    border: "5px solid blue",
    backgroundColor: "white",
    display: "inline-block"
  }
  return (
    <div style={styles} onMouseOver={this.props.handleColor}></div>
    )
  }
}

export default Box
