import { useState, useEffect } from 'react'
import doThings from './Sources/persons'
import Book from './Components/Book'
import Addinfo from './Components/Add'
import Edition from './Components/Edit'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

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
  const [Name2, setName2] = useState([])
  const [filter, setFilter] = useState()
  const [errorMessage, setErrorMessage] = useState(null)
  const [selected, setSelected] = useState(selectStyle[0])

  const [data, setData] = useState(null)

  useEffect(() => {
    doThings.getAll()
      .then(initialNotes => {
        setName(initialNotes)
      })
  }, [])

  const handleData = async (childData) => {
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

  const handleChange = setValue => async event => setValue(event.target.value)

  const updateName = async (newValue) =>{
    await new Promise((resolve) =>{ setTimeout(resolve, 1000)})
    setName(newValue)
    var v = document.getElementById('Edit_phone')
    var z = document.getElementById('Addinfo_phone')
    v.style.display = 'none'
    z.style.display = 'block' 
  }
  
  console.log(Name.length +"------------!!!!")

  return (
    <Container className="Phonebook">
      <h1>Phonebook</h1><br/><br/>
      <Notification message={errorMessage} selected={selected}/>
      <Filter filter={filter} handleFilter={handleChange(setFilter)}/><br/>
      <Addinfo updateName={updateName} setErrorMessage={setErrorMessage} Name={Name}/>
      <h3 id="title_h3_phonebook">Contacts<br/></h3>
      <Container className="book">
        <Col id="ul">
          {Name.sort((a, b) => a.name.localeCompare(b.name)).map(note =>
            <Book onData={handleData} key={note.id} note={note} filter={filter ||''} updateName={updateName} Name ={Name}/>
          )}
        </Col>
      </Container>
      <Edition data={data} updateName={updateName} Name={Name}/>
    </Container>
  )
}

export default Phone_App