import React from 'react'

export default function Item(props) {
  const { id, name , answer} = props
  return (
    <button onClick={()=>{console.log(props)}}>
      <span id={id}className="unselected">{name}</span>
    </button>
  )
}
