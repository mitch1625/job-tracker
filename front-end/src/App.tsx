import './App.css'
import Navbar from './Components/Navbar'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'


function App() {
  const [user, setUser] = useState(null)

  return (
    <>
    <Navbar/>
    <Outlet context={{user,setUser}}/>
    </>
  )
}

export default App
