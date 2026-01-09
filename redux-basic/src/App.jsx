import { useRef } from "react"
import { connect } from "react-redux";

function App(props) {
  let emailRef = useRef();
  let nameRef = useRef();

  function doSubmit() {
    let contact = {
      email: emailRef.current.value,
      name: nameRef.current.value
    }
    props.add(contact);
  }

  function clearContacts() {
    props.clear();
  }
  return (
    <div>
        Profile Pic: {props.pic} <br />
        Email <input type="email" ref={emailRef} /> <br />
        Name <input type="text" ref={nameRef} /> <br />
        <button type="button" onClick={doSubmit}>Add Contact</button>
        <button type="button" onClick={clearContacts}>Clear Contact</button>
      <ContactView contacts={props.contactList} removeEvt={props.remove}/>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    contactList: state.contacts,
    pic: state.profile.avatar
  }
}
function mapDispatchToProps(dispatch) {
  return {
    add: contact => dispatch({type:'ADD_CONTACT', payload: contact}),
    clear: () => dispatch({type:'CLEAR_CONTACTS'}),
    remove: (email) => dispatch({type:'REMOVE_CONTACT', payload: email})
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


function ContactView({contacts, removeEvt}) {
  return (
    contacts.map(contact => <div key={contact.email}>
        {contact.email} , {contact.name} 
        <button type="button" onClick={() => removeEvt(contact.email)}>Remove</button>
    </div>)
  )
}