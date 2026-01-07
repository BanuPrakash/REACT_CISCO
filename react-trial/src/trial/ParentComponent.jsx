import React, { Component } from 'react'
import NameComponent from './NameComponent'
import AgeComponent from './AgeComponent'
import { faker } from '@faker-js/faker';

export default class ParentComponent extends Component {
    state = {
        name: 'Danny',
        age: 24
    }
    updateAge() {
        this.setState({
            age: this.state.age + 1
        })
    }
    updateName() {
        this.setState({
            name:  faker.person.fullName()
        })
    }
    render() {
        console.log("<ParentComponent /> renders")
        return (
            <div>
                In ParentComponent:
                Name: {this.state.name} <br />
                Age : {this.state.age} <br />
                <button onClick={() => this.updateName()}>Change Name</button>
                <button onClick={() => this.updateAge()}>Change Age</button>
                <NameComponent name={this.state.name} /> <br />
                <AgeComponent age={this.state.age} /> <br />
            </div>
        )
    }
}
