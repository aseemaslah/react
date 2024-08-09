import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Signup2 from './components/Signup2'
import { Route, Routes } from 'react-router-dom'
import State from './components/State'
import Dell from './components/Dell'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     
   
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hai" element={<State />} />
        <Route path="/Dell" element={<Dell />} />
        <Route path="/api" element={<Api />} />
      </Routes>
      
     
      
      </>
     
  )
}

export default App
