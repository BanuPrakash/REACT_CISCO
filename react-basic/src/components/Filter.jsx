import React from 'react'

export default function Filter(props) {
 let {filterEvt} = props;
  return (
   <input type="text" 
   placeholder='search by name' 
   onChange={(evt) => filterEvt(evt.target.value)}
   />
  )
}
