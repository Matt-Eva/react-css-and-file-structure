import React, {useState} from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Sidebar from "../../components/Sidebar/Sidebar"
import ContentBox from '../../components/Content/ContentBox'
import HiddenSidebar from '../../components/Sidebar/HiddenSidebar'
import Modal from '../../components/Header/Modal'


function Home(/*{showModal, toggleModal, showSidebar, toggleSidebar}*/) {

  return (
    <div className="home">
      {/* <HiddenSidebar toggleSidebar={toggleSidebar} showSidebar={showSidebar} /> */}
      <Modal /*showModal={showModal} toggleModal={toggleModal}*//>
      <Header /*toggleSidebar={toggleSidebar} toggleModal={toggleModal}*//>
      <Sidebar />
      <ContentBox />
    </div>
  )
}

export default Home