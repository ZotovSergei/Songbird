import React from 'react'
import PhotoBird from './PhotoBird/PhotoBird'
import Player from './Player/Player'
import DescriptionBirds from './DescriptionBirds/DescriptionBirds'

export default function Questions(props) {
  const { title, description, photo } = props
  return (
    <div>
      <PhotoBird photo={photo} />
      <Player title={title} />
      <DescriptionBirds description={description} />
    </div>
  )
}
