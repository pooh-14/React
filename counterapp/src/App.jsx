import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {Route,Routes} from 'react-router-dom'
import Welcome from './Components/Welcome';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={ <Home />} />
      <Route exact path='/wel' element={ <Welcome/>} />
      <Route exact path='/log' element={ <Login/>} />
      </Routes>
      <Footer/>
   </div>
  )
}

export default App;
