import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'

// uncontrolled components
export default function Address() {
    console.log("Address Renders!!!")
    let nameRef = useRef();
    let emailRef = useRef();
    let streetRef = useRef();

    function doSubmit() {
        let address = {
            "email": emailRef.current.value,
            "name": nameRef.current.value,
            "street": streetRef.current.value
        }
        console.log(address);
    }

  return (
    <div>
        <h1>Address</h1>
        <form>
            Email <input type="email" ref={emailRef}/> <br />
            Name <input type="text"  ref={nameRef}/> <br />
            Street <input type="text"  ref={streetRef}/> <br />
            <Button onClick={doSubmit}>Submit</Button>
        </form>
    </div>
  )
}


// controlled Components
// export default function Address() {
//     console.log("Address Renders!!!")
//     let [email, setEmail] = useState();
//     let [name, setName] = useState();
//     let [street, setStreet] = useState();

//     function doSubmit() {
//         console.log(email, name, street);
//     }

//   return (
//     <div>
//         <h1>Address</h1>
//         <form>
//             Email <input type="email" onChange={(evt) => setEmail(evt.target.value)}/> <br />
//             Name <input type="text" onChange={(evt) => setName(evt.target.value)} /> <br />
//             Street <input type="text" onChange={(evt) => setStreet(evt.target.value)} /> <br />
//             <Button onClick={doSubmit}>Submit</Button>
//         </form>
//     </div>
//   )
// }
