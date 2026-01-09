import { useRef } from "react"

function App() {
  let emailRef = useRef();
  let nameRef = useRef();

  function doSubmit() {

  }
  
  return (
    <div>
        Email <input type="email" ref={emailRef} /> <br />
        Name <input type="text" ref={nameRef} /> <br />
        <button type="button" onClick={doSubmit}>Submit</button>
    </div>
  )
}

export default App
