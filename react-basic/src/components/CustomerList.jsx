import React, { Component } from 'react'
import CustomerRow from './CustomerRow'
import Filter from './Filter'

export default class CustomerList extends Component {
    name = "George"; // state in OOP, avoid this is react, because it's not considered for reconcilliation
    age = 24; // state in OOP
    state = {
        original: [
             {"id":1, "firstName": "Ross", "lastName": "Geller"},
            {"id":2, "firstName": "Chandler", "lastName": "Bing"},
            {"id":3, "firstName": "Phobhe", "lastName": "Buffay"},
            {"id":4, "firstName": "Monica", "lastName": "Geller"},
            {"id":5, "firstName": "Rachel", "lastName": "Green"},
            {"id":6, "firstName": "Joey", "lastName": "Tribuanni"}
        ],
        customers: [
            {"id":1, "firstName": "Ross", "lastName": "Geller"},
            {"id":2, "firstName": "Chandler", "lastName": "Bing"},
            {"id":3, "firstName": "Phobhe", "lastName": "Buffay"},
            {"id":4, "firstName": "Monica", "lastName": "Geller"},
            {"id":5, "firstName": "Rachel", "lastName": "Green"},
            {"id":6, "firstName": "Joey", "lastName": "Tribuanni"}
        ]
    }

    filterCustomers(txt) {
         let custs = this.state.original.filter(c => c.lastName.toLowerCase()
            .indexOf(txt.toLowerCase()) >= 0)
            
         this.setState({
            customers:custs
         })
    }
    // 5
  deleteCustomer(id) {
    let custs = this.state.original.filter(c => c.id !== id);
    // wrong way
    // this.state.customers = custs; // state is updated, but no reconcilliation

    // right way, update state and trigger reconcilliation
    this.setState({
        customers:custs,
        original: custs
    })
  }

  render() {
    return (
      <div>
        <Filter filterEvt={(txt) => this.filterCustomers(txt)}/>
        <div>
            Name: {this.name} <br />
        </div>
        {
            this.state.customers.map(cust => <CustomerRow 
                delEvent ={(id) => this.deleteCustomer(id)}
                customer={cust} key={cust.id}/>)
        }   
      </div>
    )
  }
}
