import React, {useState} from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Sidebar from "../../components/Sidebar/Sidebar"
import ContentBox from '../../components/Content/ContentBox'
import HiddenSidebar from '../../components/Sidebar/HiddenSidebar'
import Modal from '../../components/Header/Modal'


function Home() {
  const [showModal, setShowModal] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)

  function toggleModal(){
    setShowModal(!showModal)
  }

  function toggleSidebar(){
    setShowSidebar(!showSidebar)
  }

  return (
    <div className="home">
      <HiddenSidebar toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>
      {showModal ? <Modal /> : null}
      <Header toggleSidebar={toggleSidebar} toggleModal={toggleModal}/>
      <Sidebar />
      <ContentBox />
    </div>
  )
}

export default Home