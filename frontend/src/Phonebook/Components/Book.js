import { useState, useEffect } from 'react'
import doThings from '../Sources/persons'

import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import '../Phone.css'

let dataP = ''

const Edition = (props) => {

  const { data, setPrint } = props
  const [Name, setName] = useState([])
  const [newName, setNewName] = useState()
  const [nombre, setNombre] = useState('')
  const [newNumber, setNumber] = useState()
  const [newEmail, setEmail] = useState()
  const [errorMessage, setErrorMessage] = useState(null)

  console.log(data+'------------------------' + nombre)

  if(data && data!==nombre && data!==dataP)
  {
    dataP= data
    setNombre(data)
  }

  useEffect(() => {
    doThings.getAll()
      .then(initialNotes => {
        setName(initialNotes)
      })
  }, [])

  const handleChange = setValue => a => setValue(a.target.value)

  console.log(errorMessage + '!!!!!')

  setPrint(Name)
  const editInfo = (event) => {
    event.preventDefault()
    const person = Name.find(person => person.name === nombre)
    if (Name.some(element => element.name === nombre))
    {
      doThings
        .update(person.id, newNumber, newName, newEmail)
        .then(ret => {
          setName(Name.map(list => list.id !==person.id ? list:ret))
          setNombre(newName)
          setNewName('')
          setNumber('')
          setEmail('')
          setErrorMessage(
            'Number successfully changed'
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 2000)
        }).catch(error => {
          setErrorMessage(error)
          setTimeout(() => {
            setErrorMessage(null)
          }, 500)
          setName(Name.filter(n => n.id !== person.id))
        })
    }
  }

  return(
    <Card bg="secondary" text="white" id="Edit_phone">
      <Card.Header className="Card_Header"><b>Edit {nombre}</b></Card.Header>
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

          <Button type="submit" variant="info">Edit</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

const Book = (props) =>
{
  const { note, filter ,setName, Name } = props
  const [val, setVal] = useState(false)

  const handleChange = () => {setVal(false)}
  //const [childData, setChildData] = useState([])

  const handleDel = (event) => {
    event.stopPropagation()
    setVal(true)
  }

  useEffect(() => {
    var v = document.getElementById('Edit_phone')
    var z = document.getElementById('Addinfo_phone')
    v.style.display = 'none'
    z.style.display = 'block'
  }, [])

  const showhide = (event) => {

    event.stopPropagation()

    var y = document.getElementById('Edit_phone')
    var x = document.getElementById('Addinfo_phone')


    if (y.style.display === 'block') {
      y.style.display = 'none'
      x.style.display = 'block'
    }
    else{
      props.onData(note)
      x.style.display = 'none'
      y.style.display = 'block'
    }
  }

  const remove = (id) =>
  {
    if (window.confirm(`Delete ${note.name}?`))
    {
      doThings
        .del(id)
        .then(() => {setName(Name.filter(n => n.id !== id))})
    }
    else{
      handleChange()
    }
  }

  if( note.name.toLowerCase().includes(filter))
  {

    return (
      <>
        <Accordion defaultActiveKey="0">
          <Accordion.Item className="book_item" eventKey="1">
            <Accordion.Header>
              <Button className="Phone_Button" variant="secondary" onClick={handleDel}>delete</Button>&#160;
              <Button className="Phone_Button" variant="secondary" onClick={showhide}>edit</Button>
              <b><h5>&#160;&#160;&#160;{note.name}</h5></b>
            </Accordion.Header>
            <Accordion.Body>
              <h6><b>Number: {note.number}</b></h6>
              <h6><b>Email: {note.email? note.email : 'Unknown'}</b></h6>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {val && remove(note.id)}
      </>
    )
  }
}

export { Book,Edition }