import React, { Component } from 'react'
import "./Components/style.css"
export default class App1 extends Component {
  render() {
    return (
      <div>
        <h1> Hi I am externally Styled</h1>
        <div className='mysquare'> </div>
        <h2 style = {{color:"pink", backgroundColor : "gray"}}> Inline Styling</h2>
      </div>
    )
  }
}
