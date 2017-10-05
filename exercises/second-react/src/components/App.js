import React from "react";

function Header (){
  return (
        <div>Hello! Would you like to shop for
            <a href="bigcats.com"> big cats</a>?
        </div>
      )
}

function Title () {
  return <h1>Meow Meow</h1>
}

function Image () {
  return (
    <div>
    <img className="image" src="https://i.redd.it/ghxhg66ha5qy.gif" />
    </div>
  )
}

function App () {
  return (
    <div>
    <Header />
    <Title />
    <img className="image" src="https://i.redd.it/ghxhg66ha5qy.gif" />
    <h1>Hi</h1>
    <p className="paragraph"> Homepage for cats</p>
    </div>
  )
}

export default App
