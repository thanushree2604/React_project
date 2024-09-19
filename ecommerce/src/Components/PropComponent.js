import React, { Component } from 'react'

export default class PropComponent extends Component {
  render() {
    return (
      <div>
        <h2>
            And now I am learning in {this.props.section}
        </h2>
      </div>
    )
  }
}
