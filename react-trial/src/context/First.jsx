import React, { Component } from 'react'
import Second from './Second'

export default class First extends Component {
  render() {
    return (
      <div>
        I am First <br />
        <Second />
    </div>
    )
  }
}
