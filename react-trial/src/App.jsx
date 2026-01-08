
import { useState } from 'react'
import First from './context/First'
import UserContextProvider from './context/UserContextProvider'
import StateExampleComponent from './hooks/StateExampleComponent'
import UserDetails from './hooks/UserDetails'
import Users from './hooks/Users'
import ParentComponent from './trial/ParentComponent'
function App() {
  let [id, setId] = useState(1);

  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
              <Users setUserId={setId}/>
            </div>
            <div className='col-md-8'>
              <UserDetails id={id}/>
            </div>
        </div>
      </div>
      <StateExampleComponent />
      <ParentComponent />
      <UserContextProvider>
        <First />
      </UserContextProvider>
   </div>
  )
}

export default App
