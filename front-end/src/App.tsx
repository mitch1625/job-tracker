import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import type {User} from "./user-entry/UserEntry.types"

function App() {
  const [user, setUser] = useState<User | null>(null)

  return (
    <>
    <Navbar/>
    <Outlet context={{setUser}}/>
    </>
  )
}

export default App
