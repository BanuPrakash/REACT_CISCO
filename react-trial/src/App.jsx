
import First from './context/First'
import UserContextProvider from './context/UserContextProvider'
import ParentComponent from './trial/ParentComponent'
function App() {
  return (
    <div>
      <ParentComponent />
      <UserContextProvider>
        <First />
      </UserContextProvider>
   </div>
  )
}

export default App
