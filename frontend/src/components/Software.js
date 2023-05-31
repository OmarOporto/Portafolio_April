import Container from 'react-bootstrap/Container'
import './Education.css'

function Software(){
  return(
    <>
      <Container>
        <li className="listE1">
          <p><b>FRONTEND &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;-
            &#160;&#160; REACT  &#160;&#160;&#160;||  Vue.js
          </b></p>
        </li>
      </Container>
      <Container>
        <li className="listL">
          <p><b>BACKEND &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; -
            &#160;&#160; NODE.JS  ||  Python
          </b></p>
        </li>
      </Container>
      <Container>
        <li className="listL">
          <p><b>DEVELOPER-TOOL &#160;&#160;-
            &#160;&#160; Jest || Eslint || MongoDB || MySQL || Docker || Nexus || Jenkins
          </b></p>
        </li>
      </Container>
    </>
  )
}

export default Software