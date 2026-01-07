import React, { Component } from 'react'

export default class NameComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.name === nextProps.name) {
        return false
    }
    return true;
 }
  render() {
     console.log("<NameComponent /> renders")
    return (
      <div>In NameComponent Name: {this.props.name} </div>
    )
  }
}
