import Container from 'react-bootstrap/Container'
import './Education.css'

function Education(){
  return(
    <>
      <Container>
        <li className="listE1">
          <p><b>UNIVERSIDAD PRIVADA BOLIVIANA
            <img src={require('./images/Logo_Upb.png')} alt="Imagen" id="i"></img>
                        &#160;&#160; FEBRUARY 2014 – MARCH 2019
          </b></p>
        </li>
        <li className="listE2">
          <p>Electromechanical Engineering </p>
        </li>
      </Container>
      <Container>
        <li className="listE2_1">
          <p><b>SAN AGUSTÍN HIGH SCHOOL &#160;&#160;-&#160;&#160;&#160;
                          FEBRUARY 2008 – DECEMBER 2013
          </b></p>
        </li>
      </Container>
    </>
  )
}

export default Education