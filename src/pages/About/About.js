import React from 'react'
import "./About.css"
import Header from '../../components/Header/Header'
import MissionStatement from '../../components/About/MissionStatement'
import ValuesContainer from '../../components/About/ValuesContainer'

function About() {
  return (
    <div className="about">
        <Header />
        <MissionStatement />
        <ValuesContainer />
    </div>
  )
}

export default About