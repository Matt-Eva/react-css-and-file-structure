import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import {Routes, Route} from 'react-router-dom'

function App() {

  // const [showModal, setShowModal] = useState(false)
  // const [showSidebar, setShowSidebar] = useState(false)

  // function toggleModal(){
  //   setShowModal(!showModal)
  // }

  // function toggleSidebar(){
  //   setShowSidebar(!showSidebar)
  // }

  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
      
      {/* <Route exact path="/" element={<Home showModal={showModal} showSidebar={showSidebar} toggleModal={toggleModal} toggleSidebar={toggleSidebar}/>}/> */}
      <Route path="/about" element={<About />}/>
    </Routes>
  );
}

export default App;
