import React, { Component } from 'react'
import Third from './Third'
import { UserContext } from './UserContextProvider'

export default class Second extends Component {
  render() {
    return (
      <div> I am Second <br />
        <UserContext.Consumer>
            {
                value => <div>
                    <button onClick={() => value.changeName()}>Change Name</button>
                </div>
            }
        </UserContext.Consumer>
        <Third />
      </div>
    )
  }
}
