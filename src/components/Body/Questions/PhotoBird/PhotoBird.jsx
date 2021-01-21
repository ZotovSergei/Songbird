import React from 'react'

export default function PhotoBird(props) {
  const { photo } = props
  return <img className="photo" src={photo} alt="owl"></img>
}
