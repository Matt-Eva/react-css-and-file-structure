import React from 'react'
import "./ContentBox.css"
import ContentCard from './ContentCard'



function ContentBox() {
  const isBlueArray = [false, true, true, false, true, false, false, false, true, false, true, false,
  false, false, false, true, false, true, false, false, false, false]

  const contentCards = isBlueArray.map(isBlue => <ContentCard key={Math.random()} isBlue={isBlue}/>)
  
  return (
    <div className="content-box">
      {contentCards}
    </div>
  )
}

export default ContentBox