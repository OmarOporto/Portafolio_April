import { useState,useEffect } from 'react'
import doThings from '../Sources/persons'

import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import '../Phone.css'

const Addinfo =(props) =>{

  const {updateName, setErrorMessage, Name} = props

  const [newName, setNewName] = useState()
  const [newNumber, setNewNumber] = useState()
  const [newEmail, setNewEmail] = useState()

  const handleAdd = async (event) =>
  {
    event.preventDefault()
    console.log(Name.length +"_________________") 
    try{
      const person = Name.find(person => person.name ===newName)

      if (Name.some(element => element.name === newName)){
        if (window.confirm(`Change number of ${newName}?`))
          doThings
            .update(person.id,newNumber,newName,newEmail)
            .then(ret => {
              setNewName('')
              setNewNumber('')
              setNewEmail('')
              setErrorMessage(
                'Number successfully changed'
              )
              setTimeout(() => {
                updateName(Name.map(list => list.id !==person.id ? list:ret))
                setErrorMessage(null)
              }, 2000)
            }).catch(error=> {
              setErrorMessage(`Information of ${newName} has already removed from server`)
              setTimeout(() => {
                setErrorMessage(null)
              }, 500)
            })
      }

      else{
        const noteObject =
        {
          name: newName,
          number: newNumber,
          email: newEmail,
        }

        doThings
          .add(noteObject)
          .then(returnedNote => {
            console.log(returnedNote +"Espacio" + Name.length)
            updateName(Name.concat(returnedNote))
            console.log("DESPUES" + Name.length)
            setNewName('')
            setNewNumber('')
            setNewEmail('')
            setErrorMessage('Name successfully added')
            setTimeout(() => {
              setErrorMessage(null)
            }, 2000)
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

  const handleChange = setValue => a => setValue(a.target.value)
  
    return(
    <Card
      bg="primary"
      text="white"
      id="Addinfo_phone"
    >
      <Card.Header className="Card_Header"><b>Add a new Contact</b></Card.Header>
      <Card.Body>
        <Form onSubmit={handleAdd}>
          <Form.Group as={Row} id="mb-3" controlId="Name">
            <Form.Label column sm="4">
              <b>Name:</b>
            </Form.Label>
            <Col sm="8">
              <Form.Control type="text" value ={newName ||''} onChange={handleChange(setNewName)}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} id="mb-3" controlId="Number">
            <Form.Label column sm="4">
              <b>Number:</b>
            </Form.Label>
            <Col sm="8">
              <Form.Control type="text" value ={newNumber ||''} onChange={handleChange(setNewNumber)}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} id="mb-3" controlId="Email">
            <Form.Label column sm="4">
              <b>Email:</b>
            </Form.Label>
            <Col sm="8">
              <Form.Control type="email" value ={newEmail} onChange={handleChange(setNewEmail)}/>
            </Col>
          </Form.Group>

          <Button type="submit" variant="info">Add</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default Addinfo