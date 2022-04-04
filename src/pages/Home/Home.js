import React, {useState} from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Sidebar from "../../components/Sidebar/Sidebar"
import ContentBox from '../../components/Content/ContentBox'
import ExampleModal from '../../components/Header/ExampleModal'
import HiddenSidebar from '../../components/Sidebar/HiddenSidebar'


function Home() {
  const [showModal, setShowModal] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)

  function toggleBootstrapModal(){
    setShowModal(!showModal)
  }

  function toggleModal(){

  }

  function toggleSidebar(){
    console.log(showSidebar)
    setShowSidebar(!showSidebar)
  }

  return (
    <div className="home">
       {showSidebar ? <HiddenSidebar toggleSidebar={toggleSidebar}/> : null}
        <ExampleModal showModal={showModal} toggleModal={toggleBootstrapModal}/>
        <Header toggleBootstrapModal={toggleBootstrapModal} toggleSidebar={toggleSidebar}/>
        <Sidebar />
        <ContentBox />
    </div>
  )
}

export default Home