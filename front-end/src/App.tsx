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
      console.log(token)
      api.defaults.headers.common["Authorization"] = `Token ${token}`
      const response = await api.get("users/userinfo/")
      // console.log(response)
      setUser(response.data.email)
      // console.log(user)
    }
  }

  useEffect(()=>{
    getInfo()
  },[])

  return (
    <>
    <Navbar/>
    <Outlet context={{user}}/>
    </>
  )
}

export default App
