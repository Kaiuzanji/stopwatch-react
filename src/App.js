import React, { Component } from 'react'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      count: 0,
      startButton: 'start'
    }
    this.timer = null
    this.start = this.start.bind(this)
    this.clear = this.clear.bind(this)
  }

  start(){
    let state = this.state
    if(this.timer){
      clearInterval(this.timer)
      this.timer = null
      state.startButton = 'Start'
    }else{
      this.timer = setInterval(() => {
        let state = this.state
        state.count += 0.1
        this.setState(state)
      },100)
      state.startButton = 'Stop'
    }
    this.setState(state)
  }

  clear(){
    if(this.timer){
      clearInterval(this.timer)
      this.timer = null
    }
    let state = this.state
    state.count = 0
    state.startButton = 'Start'
    this.setState(state)
  }

  render(){
    return (
      <div>
        <h3>{this.state.count.toFixed(1)}</h3>
        <div>
          <button onClick={this.start}>{this.state.startButton}</button>
          <button onClick={this.clear}>Limpar</button>
        </div>
      </div>
    )
  }
}

export default App;
