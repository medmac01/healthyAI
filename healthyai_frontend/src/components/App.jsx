import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from "./Authentication/Login/Login"
import Signup from "./Authentication/Signup/Signup"
import AppView from './Views/AppView'
import Checkup from "./Views/Checkup"
import Response from './Views/Response/Response'

const App = () => {

  // const [authenticated, setAuthenticated] = useState(true)
  const navigate = useNavigate();
  const [acceptResponseFromCheckup, setAcceptResponseFromCheckup] = useState()
  const [acceptRemediesResponseFromCheckup, setAcceptRemediesResponseFromCheckup] = useState()
  const [acceptDiseaseResponseFromCheckup, setDiseaseRemediesResponseFromCheckup] = useState()

  return (
    <Routes>
      <Route path="/" element={<AppView />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/checkup" element={<Checkup setAcceptResponseFromCheckup={setAcceptResponseFromCheckup} setAcceptRemediesResponseFromCheckup={setAcceptRemediesResponseFromCheckup} setDiseaseRemediesResponseFromCheckup={setDiseaseRemediesResponseFromCheckup} />}></Route>
      <Route path="response" element={<Response response={acceptResponseFromCheckup} remedies={acceptRemediesResponseFromCheckup} info={acceptDiseaseResponseFromCheckup} />}></Route>
    </Routes>
  )
}

export default App