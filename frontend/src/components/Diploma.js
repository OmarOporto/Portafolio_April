import Container from 'react-bootstrap/Container'
import './Education.css'

function Diploma(){
  return(
    <>
      <Container>
        <li className="listE1">
          <p><b>Diploma: Full Stack  -  Universidad Simón y Patiño
                        &#160;&#160; 2023
          </b></p>
        </li>
        <li className="listE3">
          <a href="https://neurolabpro.lpages.co/diplomadofullstackdeveloperbackendyfrontend/?fbclid=IwAR17pReRIhAswoeu8vzPyCZT4rn3WApOSL-ZNkVXU4MZl0WcfhdJbSYF_J4"
            className="link" target="_blank" rel="noreferrer">
                            Content of the Course
          </a>
        </li>
        <li className="listE1">
          <p><b> Certificate of Completion: Full Stack Open – University of Helsinki
                        &#160;&#160; 2023
          </b></p>
        </li>
        <li className="listE3">
          <a href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/c0dd75422f59e4fb558fec745ba35ad0"
            className="link" target="_blank" rel="noreferrer">
                            Certificate of Completion
          </a>
        </li>
        <li className="listE1">
          <p><b>  Diploma: Software Testing – Nelson Mandela Business School
                        &#160;&#160; 2021
          </b></p>
        </li>
      </Container>
    </>
  )
}

export default Diploma