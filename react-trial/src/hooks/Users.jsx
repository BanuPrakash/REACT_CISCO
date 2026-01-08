import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

// props setUserId is passed from <App />
export default function Users({setUserId}) {
  let [users, setUsers] = useState();
  // componentDidMount
    useEffect(() => {
        console.log("called useEffect() of Users")
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
           //  users = data; // no reconcillation
            setUsers(data);
        })
    }, [])

  return (
    <div>
        <h1>Users</h1>
        {
            users && (<div>
                {
                    users.map(user => <div key={user.id} onMouseEnter={() => setUserId(user.id)}>
                        {user.name}, {user.email}
                     </div>)
                }
            </div>)
        }
    </div>
  )
}
