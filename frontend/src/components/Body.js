import Container from 'react-bootstrap/Container'
import { useState } from 'react'
import arrow from '../down-arrow.svg'
import './Body.css'
import Education from './Education'
import Diploma from './Diploma'
import Represent from './Represent'
import Languages from './Languages'
import Software from './Software'
import Contact from './Contact'


function Body(){
  const [val,setV] = useState(0)
  const handleChangeV = (e) => setV(e)

  const showhide = (a) => {
    var y = document.getElementById('prueba')
    var x = document.getElementById('arrow')
    if(a!==1){
      if (y.style.display === 'block') {
        x.className = 'rotate2'
        y.style.display = 'none'
        handleChangeV(0)
      } else {
        x.className = 'rotate'
        y.style.display = 'block'
        y.className = 'open'
        handleChangeV(1)
        showhide2(1)
        showhide3(1)
        showhide4(1)
      }}

    if(a===1){
      if(y.style.display === 'block'){
        x.className = 'rotate2'
        y.style.display = 'none'
      }
    }
  }

  function showhide2(a){
    var y = document.getElementById('prueba2')
    var x = document.getElementById('arrow2')
    if(a!==1){
      if (y.style.display === 'block') {
        x.className = 'rotate2'
        y.style.display = 'none'
        handleChangeV(0)
      } else {
        x.className = 'rotate'
        y.style.display = 'block'
        handleChangeV(2)
        showhide(1)
        showhide3(1)
        showhide4(1)
      }}
    if(a===1){
      if(y.style.display === 'block'){
        x.className = 'rotate2'
        y.style.display = 'none'
      }
    }
  }
  // Este estilo de pivotaje entre block y none se uso solo para probar el opuesto regular usado en Concat.js por ejemplo
  function showhide3(a){
    var y = document.getElementById('prueba3')
    var x = document.getElementById('arrow3')
    if(a!==1){
      if (y.style.display === 'block') {
        x.className = 'rotate2'
        y.style.display = 'none'
        handleChangeV(0)
      } else {
        x.className = 'rotate'
        y.style.display = 'block'
        handleChangeV(3)
        showhide(1)
        showhide2(1)
        showhide4(1)
      }}
    if(a===1){
      if(y.style.display === 'block'){
        x.className = 'rotate2'
        y.style.display = 'none'
      }
    }
  }

  function showhide4(a){
    var y = document.getElementById('prueba4')
    var x = document.getElementById('arrow4')
    if(a!==1){
      if (y.style.display === 'block') {
        x.className = 'rotate2'
        y.style.display = 'none'
        handleChangeV(0)
      } else {
        x.className = 'rotate'
        y.style.display = 'block'
        handleChangeV(4)
        showhide(1)
        showhide2(1)
        showhide3(1)
      }}
    if(a===1){
      if(y.style.display === 'block'){
        x.className = 'rotate2'
        y.style.display = 'none'
      }
    }
  }

  return(
    <main className="bodyprincipal">
      <Container className="bodytopleft">
        <Container className="bodytopleftelements">
          <li className="l1left">
            <p>
              <img src={require('./images/Estudies3.png')} id="i_Estudies" alt="Imagen"></img>
              <b>&#160;&#160; <u>Education</u> &#160;&#160;</b>
              <img src={arrow} id="arrow" alt="flecha" onClick={showhide}/>
            </p>
          </li>
          <div id= "prueba">
            <Education/>
          </div>
          <li className="l1left">
            <p>
              <img src={require('./images/Diploma.png')} className="i_Diploma" alt="Imagen"></img>
              <b>&#160;&#160; <u>Diplomas & Courses</u> &#160;&#160;</b>
              <img src={arrow} id="arrow2" alt="flecha2" onClick={showhide2}/>
            </p>
          </li>
          <div id= "prueba2">
            <Diploma/>
          </div>
          <li className="l1left">
            <p>
              <img src={require('./images/Languages.png')} id="i_Estudies" alt="Imagen"></img>
              <b>&#160;&#160; <u>Languages</u> &#160;&#160;</b>
              <img src={arrow} id="arrow3" alt="flecha3" onClick={showhide3}/>
            </p>
          </li>
          <div id= "prueba3">
            <Languages/>
          </div>
          <li className="l1left">
            <p>
              <img src={require('./images/software.png')} id="i_Estudies" alt="Imagen"></img>
              <b>&#160;&#160; <u>Software</u> &#160;&#160;</b>
              <img src={arrow} id="arrow4" alt="flecha4" onClick={showhide4}/>
            </p>
          </li>
          <div id= "prueba4">
            <Software/>
          </div>
          <h1 className="H1">"Technology is a tool that allows us to unleash our creativity and bring our ideas to life." </h1>
        </Container>
      </Container>
      <Container className="bodyright">
        <Represent val ={val}/>
      </Container>
      <Container className="bodybottomleft">
        <Contact/>
      </Container>
    </main>
  )
}

export default Body