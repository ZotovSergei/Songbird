import React from 'react'

export default function DescriptionBirds(props) {
  const { description,enabled } = props
  return <div className="description__birds">{(enabled ? description : false)}</div>
}
