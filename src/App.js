import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './pages/Home/Home';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}/>
    </Routes>
  );
}

export default App;
