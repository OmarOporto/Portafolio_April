import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, AboutPage, Calculadora, Multi, Pass, PhoneB } from './pages'



function Rutas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage /> }></Route>
        <Route path="/calculadora" element={<Calculadora /> }></Route>
        <Route path="/multi" element={<Multi /> }></Route>
        <Route path="/multi/pass" element={<Pass /> }></Route>
        <Route path="/multi/pass/phonebook" element={<PhoneB /> }></Route>
      </Routes>
    </Router>
  )
}

export default Rutas