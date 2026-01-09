import { useDispatch, useSelector } from "react-redux";
import { addContact, removeContact, clearContacts } from "./redux/contactSlice";
import { useRef } from "react";

function App() {
  let dispatch = useDispatch(); // React Hook for Redux // mapDispatchToProps
  let {avatar} = useSelector(state => state.profile); // mapStateToProps
  let emailRef = useRef();
  let nameRef = useRef();

  function doSubmit() {
    let contact = {
      email: emailRef.current.value,
      name: nameRef.current.value
    }
   dispatch(addContact(contact));
  }

  function clearAllContacts() {
    dispatch(clearContacts());
  }
   return (
     <div>
        Profile Pic: {avatar} <br />
        Email <input type="email" ref={emailRef} /> <br />
        Name <input type="text" ref={nameRef} /> <br />
        <button type="button" onClick={doSubmit}>Add Contact</button>
        <button type="button" onClick={clearAllContacts}>Clear Contact</button>
      <ContactView />
    </div>
  )
}


function ContactView() {
   let dispatch = useDispatch();
   let {contacts} = useSelector(state => state.contacts);

  return (
    contacts.map(contact => <div key={contact.email}>
        {contact.email} , {contact.name} 
        <button type="button" onClick={() => dispatch(removeContact(contact.email))}>Remove</button>
    </div>)
  )
}
export default App
