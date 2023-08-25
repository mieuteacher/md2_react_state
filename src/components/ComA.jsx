import React, { Component } from 'react'

export default class ComA extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            name: "p"
        };
    }
  render() {
    return (
      <div id='test'>
        ComA
        <br></br>
        <span>Giá trị của count là: {this.state.count}</span>
        <span>Giá trị của name là: {this.state.name}</span>
        <br></br>
        <button onClick={() => {
            this.setState({
                count: this.state.count + 1
            })
            console.log("count", this.state)
        }}>Tăng</button>
      </div>
    )
  }
}

//OOP
