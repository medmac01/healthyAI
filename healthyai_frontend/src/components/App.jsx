import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from "./Authentication/Login/Login"
import Signup from "./Authentication/Signup/Signup"
import AppView from './Views/AppView'
import Checkup from "./Views/Checkup"
const App = () => {

  const [authenticated, setAuthenticated] = useState(true)
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (authenticated) {
  //     navigate("/")
  //   }
  //   else {
  //     navigate("/login")
  //   }
  // }, [authenticated])

  return (
    <Routes>
      <Route path="/" element={<AppView />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/checkup" element={<Checkup />}></Route>
    </Routes>
  )
}

export default App