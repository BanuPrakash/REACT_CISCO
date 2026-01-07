import React, { Component } from 'react'
import CustomerRow from './CustomerRow'

export default class CustomerList extends Component {
    state = {
        customers: [
            {"id":1, "firstName": "Ross", "lastName": "Geller"},
            {"id":2, "firstName": "Chandler", "lastName": "Bing"},
            {"id":3, "firstName": "Phobhe", "lastName": "Buffay"},
            {"id":4, "firstName": "Monica", "lastName": "Geller"},
            {"id":5, "firstName": "Rachel", "lastName": "Green"},
            {"id":6, "firstName": "Joey", "lastName": "Tribuanni"}
        ]
    }
  render() {
    return (
      <div>
        {
            this.state.customers.map(cust => <CustomerRow customer={cust}/>)
        }   
      </div>
    )
  }
}
