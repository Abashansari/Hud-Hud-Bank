import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pay from './components/Pay'
import Save from './components/Save'
import Profile from './components/Profile'
import { BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pay' element={<Pay />} />
      <Route path='/save' element={<Save />} />
      <Route path='/profile' element={<Profile />} />     
    </Routes>
    </Router>
     
    </>
  )
}

export default App
