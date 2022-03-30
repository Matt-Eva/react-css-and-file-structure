import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Sidebar from "../../components/Sidebar/Sidebar"
import ContentBox from '../../components/Content/ContentBox'

function Home() {
  return (
    <div className="home">
        <Header />
        <Sidebar />
        <ContentBox />
    </div>
  )
}

export default Home