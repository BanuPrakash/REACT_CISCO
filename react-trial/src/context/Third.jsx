import React, { Component } from 'react'
import { UserContext } from './UserContextProvider'

export default class Third extends Component {
  render() {
    return (
      <div> 
        I am Third <br />
        <UserContext.Consumer>
            {
                value => <div>
                    Name: {value.displayName} <br />
                    Profile Pic: {value.avatar}
                </div>
            }
        </UserContext.Consumer>
      </div>
    )
  }
}
