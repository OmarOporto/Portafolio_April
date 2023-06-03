import { useState } from 'react'
import doThings from '../Sources/persons'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import '../Phone.css'

const Edition = (props) => {

  const { data, updateName, Name } = props

  const [newName, setNewName] = useState()
  const [newNumber, setNumber] = useState()
  const [newEmail, setEmail] = useState()
  const [errorMessage, setErrorMessage] = useState(null)

  const handleChange = setValue => a => setValue(a.target.value)

  const showhide = (event) => {

    event.preventDefault()

    var y = document.getElementById('Edit_phone')
    var x = document.getElementById('Addinfo_phone')
    
    y.style.display = 'none'
    x.style.display = 'block'

  }

  const editInfo = async (event) => {
    event.preventDefault()

    try{
      const person = Name.find(person => person.name === data)
      if (Name.some(element => element.name === data))
      {
        doThings
          .update(person.id, newNumber, newName, newEmail)
          .then(ret => {
            setNewName('')
            setNumber('')
            setEmail('')
            setErrorMessage(
              'Number successfully changed'
            )
            setTimeout(() => {
              updateName(Name.map(list => list.id !==person.id ? list:ret))
              setErrorMessage(null)
            }, 2000)
          }).catch(error => {
            setErrorMessage(error)
            setTimeout(() => {
              setErrorMessage(null)
            }, 500)
            updateName(Name.filter(n => n.id !== person.id))
          })
      }
    }
    catch (exception) {
      setErrorMessage('Error on the Data refresh the page')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return(
    <Card bg="secondary" text="white" id="Edit_phone">
      <Card.Header className="Card_Header"><b>Edit {data}</b></Card.Header>
      <Card.Body>
        <Form onSubmit={editInfo}>
          <Form.Group as={Row} id="mb-3" controlId="Name">
            <Form.Label column sm="4">
              <b>Name:</b>
            </Form.Label>
            <Col sm="8">
              <Form.Control type="text" value ={newName} onChange={handleChange(setNewName)}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} id="mb-3" controlId="Number">
            <Form.Label column sm="4">
              <b>Number:</b>
            </Form.Label>
            <Col sm="8">
              <Form.Control type="text" value ={newNumber} onChange={handleChange(setNumber)}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} id="mb-3" controlId="Email">
            <Form.Label column sm="4">
              <b>Email:</b>
            </Form.Label>
            <Col sm="8">
              <Form.Control type="email" value ={newEmail} onChange={handleChange(setEmail)}/>
            </Col>
          </Form.Group>

          <Button type="submit" variant="info">Edit</Button>&#160;
          <Button onClick={showhide} variant="info">Cancel</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default Edition