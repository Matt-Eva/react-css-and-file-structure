import React from 'react'
import "./ValueCard.css"

function ValueCard({value}) {
    const {title, img, desc} = value

  return (
    <div className="value-card">
      <img src={img} alt={title} className="value-card__img"/>
      <h2 className="value-card__title">{title}</h2>
      <p className="value-card__desc">{desc}</p>
    </div>
  )
}

export default ValueCard