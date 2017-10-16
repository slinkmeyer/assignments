import React from "react";
import Lemmings from "./Lemmings";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lemmingsKilled: 0
    }
    this.killLemming = this.killLemmings.bind(this);
    this.saveLemming = this.saveALemming.bind(this);
  }

  killALemming() {
    this.setState(prevState => {
      return {
        lemmingsKilled: prevState.lemmingsKilled + 1
      }
    });
  }

  saveALemming() {
    this.setState(prevState => {
      return {
        lemmingKilled: prevState.lemmingskilled - 1
      }
    });
  }

  render() {
    return (
      <div>
      <Lemmings lemmingsKilled={this.sate.lemmingsKilled}/>
      saveALemming={this.saveALemming}
      killALemming={this.killALemming}/>

      <Lemmings lemmingskilled={this.state.lemmingsKilled}
      saveALemming={this.state.saveALemmings}
      killALemming={this.state.KillALemming}
    )
  }
}
export default App;
