import Container from 'react-bootstrap/Container'
import './Education.css'

function Software(){
  return(
    <>
      <Container>
        <li className="listE1">
          <p><b>FRONTEND &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;-
            <font size="3">&#160;&#160; REACT  &#160;&#160;&#160;||  Vue.js</font>
          </b></p>
        </li>
      </Container>
      <Container>
        <li className="listL">
          <p><b>BACKEND &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; -
            <font size="3">&#160;&#160; NODE.JS  ||  Python</font>
          </b></p>
        </li>
      </Container>
      <Container>
        <li className="listL">
          <p><b>DEVELOPER-TOOL &#160;&#160;-
            <font size="3">&#160;&#160; Jest || Eslint || MongoDB || MySQL || Docker || Nexus || Jenkins</font>
          </b></p>
        </li>
      </Container>
    </>
  )
}

export default Software