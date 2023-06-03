import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as EyeC } from '../eye-slash.svg'
import { ReactComponent as Eye } from '../eye.svg'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Login.css'
import loginService from '../services_multi/loginService'
import Notification from './Notifications'

function Log() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [user, setUser] = useState(null)
  const history = useNavigate()
  const [visible, setVisible] = useState(true)

  const type = { display: visible ? 'password' : 'string' }
  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )
      setUser(user)
      setUsername('')
      setPassword('')
      history('/multi/pass')
    } catch (exception) {
      console.log(exception)
      setErrorMessage('Wrong credentials',exception)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="label_p">User Name</Form.Label>
        <Form.Control className="labeli" type="string" placeholder="User Name" value={username} name="Username" onChange={({ target }) => setUsername(target.value)}/>
        <Form.Text className="label_p">
          <b>Never share personal information</b>
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <div><Form.Label className="label_p">Password &#160;&#160;&#160;
              <EyeC onClick={toggleVisibility} style={hideWhenVisible}/>
              <Eye onClick={toggleVisibility} style={showWhenVisible}/>
            </Form.Label>
        </div>
        <Form.Control
          className="labeli" type={type.display} placeholder="Password" value={password} name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </Form.Group>
      <Button className="labeli" variant="secondary" type="submit">
        Login
      </Button>
      <Notification message={errorMessage} />
    </Form>
  )
}

export default Log