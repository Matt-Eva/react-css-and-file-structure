import React from 'react'
import "./ContentCard.css"

function ContentCard(props) {

  const isBlue = props.isBlue ? "content-card--blue" : "";
  return (
    <div className={`content-card ${isBlue}`}>
      <h2 className="content-card__header"> Header</h2>
      <h2 className="content-card__header content-card__header--green">Green Header</h2>
    </div>
  )
}

export default ContentCard