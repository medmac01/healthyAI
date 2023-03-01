import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from "./Authentication/Login/Login"
import Signup from "./Authentication/Signup/Signup"
import AppView from './Views/AppView'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppView />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  )
}

export default App