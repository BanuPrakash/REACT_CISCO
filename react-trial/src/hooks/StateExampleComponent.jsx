import React from 'react'
import { useState } from 'react'
import { faker } from '@faker-js/faker';

export default function StateExampleComponent() {

 let [name, setName] = useState("Sunny");
 let [age, setAge] = useState(18);

  return (
    <div>
        Name: {name} <br />
        Age: {age} <br />
        <button type="button" 
            onClick={() => setAge(age+1)}>Increment Age</button> 
          <button type="button" 
            onClick={() => setName(faker.person.fullName())}>Change Name</button> 
      
    </div>
  )
}
