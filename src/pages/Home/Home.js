import React, {useState} from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Sidebar from "../../components/Sidebar/Sidebar"
import ContentBox from '../../components/Content/ContentBox'
import ExampleModal from '../../components/Header/ExampleModal'


function Home() {
  const [showModal, setShowModal] = useState(false)

  function toggleModal(){
    setShowModal(!showModal)
  }

  return (
    <div className="home">
        <ExampleModal showModal={showModal} toggleModal={toggleModal}/>
        <Header toggleModal={toggleModal}/>
        <Sidebar />
        <ContentBox />
    </div>
  )
}

export default Home