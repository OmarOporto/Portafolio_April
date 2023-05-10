import Container from 'react-bootstrap/Container'
import logo from '../logo.svg'
import './Navbar.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Maintop() {
  return (
    <>
      <Navbar className="prueba" variant="dark">
        <div className="header-logowrap">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <Container>
          <Navbar.Brand className="title">Omar Oporto Bernal</Navbar.Brand>
        </Container>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/" className="elements">Home</Nav.Link>
            <Nav.Link href="/about" className="elements">About</Nav.Link>
            <NavDropdown title="Projects" id="navbarScrollingDropdown" className="nav-dropdown">
              <NavDropdown.Item className="elementdrop" href="/calculadora">Calculator</NavDropdown.Item>
              <NavDropdown.Item className="elementdrop" href="/Multi">MultiApp</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="elementdrop" href="#action5">
                Coming soon
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Maintop