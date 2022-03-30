import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Sidebar from "../../components/Sidebar/Sidebar"
import Content from '../../components/Content/Content'

function Home() {
  return (
    <div className="home">
        <Header />
        <Sidebar />
        <Content />
    </div>
  )
}

export default Home