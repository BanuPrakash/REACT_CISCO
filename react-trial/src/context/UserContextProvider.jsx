import React from 'react'
import { Component } from 'react';
import { createContext } from 'react'
import { faker } from '@faker-js/faker';

// central place-holder of data
export const UserContext = createContext();

export default class UserContextProvider extends Component {
    // get this on login
  state = {
    "avatar": "banu.png",
    "displayName": "Banu Prakash"
  }

  updateName() {
    console.log("Called!!!")
    this.setState({
        displayName:  faker.person.fullName()
    })
  }
  //avatar: this.state.avatar, 
  //      displayName: this.state.displayName
  render() {
    return (
        <UserContext.Provider value={{...this.state, changeName: this.updateName.bind(this)}}>
            {this.props.children}
        </UserContext.Provider>
    )
    }
}
