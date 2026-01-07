import React, { Component } from 'react'

export default class CustomerRow extends Component {
  
  render() {
    // destucturing, extract to local variables
    let {id, firstName, lastName} = this.props.customer;
    return (
      <div>
        {firstName} &nbsp; {lastName} &nbsp; 
        <button type='button' onClick={() => this.props.delEvent(id)}>Delete</button>
      </div>
    )
  }
}
