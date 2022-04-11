import React from 'react'
import "./ValueCard.css"

function ValueCard({value}) {
    const {title, img, desc} = value

  return (
    <div className="value-card">
      <h2>{title}</h2>
      <img src={img} alt={title}/>
      <p>{desc}</p>
    </div>
  )
}

export default ValueCard