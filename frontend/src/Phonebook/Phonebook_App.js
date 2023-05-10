import { useState, useEffect } from 'react'
import doThings from './Sources/persons'
import { Book, Edition } from './Components/Book'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './Phone.css'

const Filter = ({ filter,handleFilter }) =>
  (
    <Form.Group as={Row} id="mb-3" controlId="Filter">
      <Form.Label column sm="2">
        <b>Filter shown with</b>
      </Form.Label>
      <Col sm="3" id="filt_bar">
        <Form.Control type="text" placeholder="Search" value ={filter ||''} onChange={handleFilter}/>
      </Col>
    </Form.Group>
  )

const Addinfo =({ name, addInfo, handleName, number, handleNumber, email, handleEmail }) =>
  (
    <Card
      bg="primary"
      text="white"
      id="Addinfo_phone"
    >
      <Card.Header className="Card_Header"><b>Add a new Contact</b></Card.Header>
      <Card.Body>
        <Form onSubmit={addInfo}>
          <Form.Group as={Row} id="mb-3" controlId="Name">
            <Form.Label column sm="4">
              <b>Name:</b>
            </Form.Label>
            <Col sm="8">
              <Form.Control type="text" value ={name ||''} onChange={handleName}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} id="mb-3" controlId="Number">
            <Form.Label column sm="4">
              <b>Number:</b>
            </Form.Label>
            <Col sm="8">
              <Form.Control type="text" value ={number ||''} onChange={handleNumber}/>
            </Col>
          </Form.Group>

          <Form.Group as={Row} id="mb-3" controlId="Email">
            <Form.Label column sm="4">
              <b>Email:</b>
            </Form.Label>
            <Col sm="8">
              <Form.Control type="email" value ={email} onChange={handleEmail}/>
            </Col>
          </Form.Group>

          <Button type="submit" variant="info">Add</Button>
        </Form>
      </Card.Body>
    </Card>
  )

const selectStyle = [
  {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    border: '5px solid green',
    borderRadius:11,
    padding: 10,
    marginBottom: 10
  },
  {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    border: '5px solid red',
    borderRadius:11,
    padding: 10,
    marginBottom: 10
  }
]


const Phone_App = () => {

  const [Name, setName] = useState([])
  const [newName, setNewName] = useState()
  const [newNumber, setNewNumber] = useState()
  const [newEmail, setNewEmail] = useState()
  const [filter, setFilter] = useState()
  const [errorMessage, setErrorMessage] = useState(null)
  const [selected, setSelected] = useState(selectStyle[0])

  const [data, setData] = useState(null)

  const handleData = (childData) => {
    setData(childData.name)
  }

  const Notification = ({ message, selected }) => {
    if (message === null) {
      return null
    }

    return (
      <div style={selected}>
        {message}
      </div>
    )
  }

  useEffect(() => {
    doThings.getAll()
      .then(initialNotes => {
        setName(initialNotes)
      })
  }, [])

  const addInformation = (event) =>
  {
    event.preventDefault()
    const person = Name.find(person => person.name ===newName)

    if (Name.some(element => element.name === newName))
    {
      if (window.confirm(`Change number of ${newName}?`))
        doThings
          .update(person.id,newNumber,newName,newEmail)
          .then(ret => {
            setName(Name.map(list => list.id !==person.id ? list:ret))
            setNewName('')
            setNewNumber('')
            setNewEmail('')
            setSelected (selectStyle[0])
            setErrorMessage(
              'Number successfully changed'
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 2000)
          }).catch(error => {
            setSelected (selectStyle[1])
            setErrorMessage(`Information of ${newName} has already removed from server: executed Error` +error)
            setTimeout(() => {
              setErrorMessage(null)
            }, 500)
            setName(Name.filter(n => n.id !== person.id))
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
          setName(Name.concat(returnedNote))
          setNewName('')
          setNewNumber('')
          setNewEmail('')
          setErrorMessage('Name successfully added')
          setTimeout(() => {
            setErrorMessage(null)
          }, 500)
        }).catch(error => {
          setErrorMessage(
            `${error.response.data.error} refresh page`
          )
        })

    }
  }

  const handleChange = setValue => a => setValue(a.target.value)

  return (
    <Container className="Phonebook">
      <h1>Phonebook</h1><br/><br/>
      <Notification message={errorMessage} selected={selected}/>
      <Filter filter={filter} handleFilter={handleChange(setFilter)}/><br/>
      <Addinfo
        name={newName} addInfo={addInformation} handleName={handleChange(setNewName)}
        number={newNumber} handleNumber={handleChange(setNewNumber)}
        email={newEmail} handleEmail={handleChange(setNewEmail)}
      />
      <h3 id="title_h3_phonebook">Contacts<br/></h3>
      <Container className="book">
        <Col id="ul">
          {Name.map(note =>
            <Book onData={handleData} key={note.id} note={note} filter={filter ||''} setName={setName} Name ={Name}/>
          )}
        </Col>
      </Container>
      <Edition data={data} setPrint={setName}/>
    </Container>
  )
}

export default Phone_App