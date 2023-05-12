import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

import './Login.css'

function Trail(){

  const nav = useNavigate()
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (!loggedUserJSON) {
      nav('/multi')
    }
  }, [])
  let log = JSON.parse(window.localStorage.getItem('loggedNoteappUser'))

  const [hover, setHover] = useState(false)
  const [hover2, setHover2] = useState(false)
  return(
    <div id="Backgraound_Pass">
      <h1><br/><b><u>Choose an App {log.username}</u></b></h1>
      <Card
        bg={(!hover) ? 'dark' : 'secondary'}
        key="Card"
        text="white"
        style={{ width: '18rem' }}
        className="mb-2"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Card.Header>Prototype Version 0.2</Card.Header>
        <Card.Body>
          <Card.Title> Phonebook </Card.Title>
          <Card.Text>
                    A simple Page of an Phonebook, with a Database on <b>Mongoose</b><br/>
                    <Link to='/multi/pass/phonebook'>Go to the Page</Link>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg={!hover2 ? 'danger' : 'warning'}
        key="Card"
        text="white"
        style={{ width: '18rem' }}
        className="mb-1"
        onMouseEnter={() => setHover2(true)}
        onMouseLeave={() => setHover2(false)}
      >
        <Card.Header>In process</Card.Header>
        <Card.Body>
          <Card.Title> Notes </Card.Title>
          <Card.Text>
                    This page is still at work. Sorry for the inconvenience
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Trail