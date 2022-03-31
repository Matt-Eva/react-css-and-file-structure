import React from 'react'
import "./ContentBox.css"
import ContentCard from './ContentCard'


function ContentBox() {
  return (
    <div className="content-box">
      <ContentCard />
      <ContentCard isBlue={true}/>
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </div>
  )
}

export default ContentBox