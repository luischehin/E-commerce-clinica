import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Navbarr from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Carrousel from './components/carrousel/Carrousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='nav'>
        <Navbarr />
      </div>
      <div>
        <Carrousel />
      </div>


    </Router>


  )
}

export default App;
