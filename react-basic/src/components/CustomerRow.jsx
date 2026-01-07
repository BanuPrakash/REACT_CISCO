import React, { Component } from 'react'

export default class CustomerRow extends Component {
  
  render() {
    return (
      <div>
        {this.props.customer.firstName} &nbsp; {this.props.customer.lastName} &nbsp; 
        <button type='button'>Delete</button>
      </div>
    )
  }
}
