import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import logo from '../logo.svg'
import './Represent.css'

const Represent = ({ val }) =>
{
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  const variant = { color: (index===1 && val===1)? 'dark' : '' }

  switch(val){
  case 1:
    return(
      <Carousel fade variant={variant.color} className="carousel" key={val} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval="8000">
          <img
            className="d-block w-100"
            id = "ir1"
            src={require('./images/UPB.jpg')}
            alt="First slide"
          />
          <Carousel.Caption >
            <h4 className="H4_upb" ><b>Investigation Assistant CIOE - 1 year</b></h4>
            <p className="p_upb"><b>ESTUDIES 2014 – 2019</b></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval="8000">
          <img
            className="d-block w-100"
            id = "ir1"
            src={require('./images/IOP.jpg')}
            alt="First slide"
          />
          <Carousel.Caption >
            <h4 className="H4_IOP">
              <b>Design and construction of a low-cost 3D-printed portable LIBS system
              </b></h4>
            <a href="https://iopscience.iop.org/article/10.1088/1742-6596/2238/1/012012" className="link_iop" target="_blank" rel="noreferrer">
                                "IOP - PAGE"
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval="8000" variant="withe">
          <img
            className="d-block w-100"
            id = "ir1"
            src={require('./images/REACT_JS.jpg')}
            alt="First slide"
          />
          <Carousel.Caption >
            <h4 className="H4_upb">Fullstack Developer</h4>
            <p className="p_upb"><b>from 2022 onwards</b></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  case 2:
    return(
      <Carousel fade className="carousel" key={val}>
        <Carousel.Item interval="8000">
          <img
            className="d-block w-100"
            id = "ir1"
            src={require('./images/fullstackopen.jpg')}
            alt="First slide"
          />
          <Carousel.Caption className="a_usip">
            <a href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/c0dd75422f59e4fb558fec745ba35ad0"
              className="link_fullstack" target="_blank" rel="noreferrer">
              <b>"Certificate of Completion"</b>
              <br/> Fullstack Open Helsinki University
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval="8000">
          <img
            className="d-block w-100"
            id = "ir1"
            src={require('./images/USIP-FS.jpg')}
            alt="First slide"
          />
          <Carousel.Caption className="a_usip">
            <a href="https://neurolabpro.lpages.co/diplomadofullstackdeveloperbackendyfrontend/?fbclid=IwAR17pReRIhAswoeu8vzPyCZT4rn3WApOSL-ZNkVXU4MZl0WcfhdJbSYF_J4"
              className="link_usip" target="_blank" rel="noreferrer">
              <b>"Content"</b>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval="8000">
          <img
            className="d-block w-100"
            id = "ir1"
            src={require('./images/UNM.png')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className="unam1">Software Testing</h4>
            <p className="unam"><b>2021</b></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  case 3:
    return(
      <Carousel fade variant="dark" className="carousel" key={val}>
        <Carousel.Item interval="8000">
          <img
            className="d-block w-100"
            id = "ir1"
            src={require('./images/EFSET.jpg')}
            alt="First slide"
          />
          <Carousel.Caption className="a_usip">
            <a href="https://www.efset.org/cert/dnkCPM"
              className="link_usip" target="_blank" rel="noreferrer">
              <b>"Certificate"</b>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval="8000">
          <img
            className="d-block w-100"
            id = "ir1"
            src={require('./images/BC.jpg')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className="british">British Council EnglishScore</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  case 4:
    return(
      <Carousel fade className="carousel" key={val}>
        <Carousel.Item interval="8000">
          <img
            className="d-block w-100"
            id = "ir1"
            src={require('./images/React.png')}
            alt="First slide"
          />
          <Carousel.Caption className="a_react">
            <p className="react"> <b>THIS PAGE WAS MADE ON REACT</b></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval="8000">
          <img
            className="d-block w-100"
            id = "ir1"
            src={require('./images/Node.png')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className="H4_React">Jest || ESlint || Express</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval="8000">
          <img
            className="d-block w-100"
            id = "ir1"
            src={require('./images/Mongo.png')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className="docker">Preferred Database || MySQL</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval="8000">
          <img
            className="d-block w-100"
            id = "ir1"
            src={require('./images/Docker.png')}
            alt="First slide"
          />
          <Carousel.Caption className="a_react">
            <h4 className="docker">+ Jenkins & Nexus</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  default:
    return(
      <>
        <img src={logo} className="i0" alt="logo"/>
      </>
    )
  }
}

export default Represent