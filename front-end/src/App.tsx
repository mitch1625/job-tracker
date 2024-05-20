import './App.css'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import type {User} from "./user-entry/UserEntry.types"
import { api } from './utilities'

function App() {
  const [user, setUser] = useState<User | null>(null)

  const getInfo = async() => {
    const token = localStorage.getItem("token")
    if (token) {
      api.defaults.headers.common["Authorization"] = `Token ${token}`
      const response = await api.get("users/info/")
      console.log(response)
      setUser(response.data.email)
    }
  }

  useEffect(()=>{
    getInfo()
  },[])

  return (
    <>
    <Navbar/>
    <Outlet context={{setUser,user}}/>
    </>
  )
}

export default App
