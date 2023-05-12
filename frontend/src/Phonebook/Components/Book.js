import { useState, useEffect } from 'react'
import doThings from '../Sources/persons'

import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import '../Phone.css'

const Book = (props) =>
{
  const { note, filter ,updateName, Name } = props
  const [val, setVal] = useState(false)

  const handleChange = () => {setVal(false)}

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
        .then(() => (
          updateName(Name.filter(n => n.id !== id))
          )
        )
    }
    else{
      updateName(Name)
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

export default Book