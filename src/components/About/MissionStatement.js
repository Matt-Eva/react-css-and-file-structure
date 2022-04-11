import React from 'react'
import "./MissionStatement.css"
import {mission} from "../../assets/mission"

function MissionStatement() {
    console.log(mission)
  return (
    <div className="mission-statement">
      <p className="mission-statement__statement">{mission}</p>
    </div>
  )
}

export default MissionStatement