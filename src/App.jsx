import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Pay from './components/Pay'
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
      <Route path='/' element={<Dashboard />} />
      <Route path='/pay' element={<Pay />} />
      <Route path='/profile' element={<Profile />} />     
    </Routes>
    </Router>
     
    </>
  )
}

export default App
