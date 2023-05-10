import React from 'react'
import { useState } from 'react'
import './page.css'
import logo from './logo.svg'
import Maintop from './components/Navbar'
import Body from './components/Body'
import AboutBody from './components/About'
import Buttons from './components_calculadora/book'
import Log from './components_multi/Login'
import Sign_in from './components_multi/Sign_in'
import Trail from './components_multi/Pass'
import Phone_App from './Phonebook/Phonebook_App'

import Button from 'react-bootstrap/Button'

function HomePage() {
  return (
    <div>
      <Maintop/>
      <Body/>
    </div>
  )
}

function AboutPage() {
  return (
    <div>
      <Maintop/>
      <AboutBody/>
    </div>
  )
}

function Calculadora(){
  return(
    <div className="Calc">
      <Maintop/>
      <div className="App-header">
        <h1 key="Title">Calculadora Científica  <img src={logo} className="App-logo" alt="logo" /></h1>
        <Buttons></Buttons>
      </div>
    </div>
  )
}

function Multi(){
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }
  return(
    <div>
      <Maintop/>
      <div className="M_Center">
        <div className="paralelogramo2">
          <b>Information Default:<br/>
            <br/>Username: Omar <br/>
        Password: password2</b>
        </div>
        <div className="paralelogramo">
          <b>This is an EXAMPLE page <br/>
        Don't Use <br/>REAL <br/>Information</b>
        </div>
        <div style={hideWhenVisible} className="login">
          <div className="h1_log">
            <h1 className="h1_log1">MultiApp  <img src={logo} className="App-logo" alt="logo" /></h1>
          </div>
          <Log/>
          <p className="labelq"><br/>Don't have an account? <Button className="labeli" variant="secondary" onClick={toggleVisibility}>
            Sing In
          </Button></p>
        </div>
        <div style={showWhenVisible} className="login">
          <h1>MultiApp  <img src={logo} className="App-logo" alt="logo" /></h1>
          <Sign_in/>
          <p className="labelq"><br/>Have an account? <Button className="labeli" variant="secondary" onClick={toggleVisibility}>
            Login
          </Button></p>
        </div>
      </div>
    </div>
  )
}

function Pass(){
  return(
    <div className="Calc">
      <Maintop/>
      <Trail/>
    </div>
  )
}

function PhoneB(){
  return(
    <div>
      <Maintop/>
      <div className="Phone_Container">
        <Phone_App/>
      </div>
    </div>
  )
}

export { HomePage, AboutPage, Calculadora, Multi, Pass, PhoneB }