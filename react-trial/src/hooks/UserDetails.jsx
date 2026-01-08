import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function UserDetails({id}) {
 let [user,setUser] = useState();
 // componentDidUpdate, called whenever id changes
  useEffect(() => {
    console.log("called useEffect() of UserDetails")
     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => {
           //  users = data; // no reconcillation
            setUser(data);
        })
  }, [id]);
  return (
    <div>
        <h1>UserDetails</h1>
        {
            user && (
                <div>
                    {user.company.name} <br />
                    {user.address.street} 
                </div>
            )
        }
    </div>
  )
}
