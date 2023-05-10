import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { ReactComponent as EyeC } from '../eye-slash.svg'
import { ReactComponent as Eye } from '../eye.svg'
import './Login.css'
import sign_up from '../services_multi/signUpService'
import Notification from './Notifications'

function SignIn(){

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [user, setUser] = useState(null)

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
      const user = await sign_up.sign({
        user, username, password,
      })
      //   window.localStorage.setItem(
      //     'loggedNoteappUser', JSON.stringify(user)
      //   )
      setUser(user)
      setName('')
      setUsername('')
      setPassword('')
      window.location.reload()
    } catch (exception) {
      console.log(exception)
      setErrorMessage('--------',exception)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  return(
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmailS">
        <Form.Label className="label_p2" >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={name} name="Name" onChange={({ target }) => setName(target.value)}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsernameS">
        <Form.Label className="label_p2">Username</Form.Label>
        <Form.Control type="string" placeholder="Username" value={username} name="Username" onChange={({ target }) => setUsername(target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordS">
        <div><Form.Label className="label_p2">Password &#160;&#160;&#160;</Form.Label>
          <EyeC onClick={toggleVisibility} style={hideWhenVisible}/>
          <Eye onClick={toggleVisibility} style={showWhenVisible}/>
        </div>
        <Form.Control type={type.display} placeholder="Password" value={password} name="Password"
          onChange={({ target }) => setPassword(target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
            Sign Up
      </Button>
      <Notification message={errorMessage} />
    </Form>
  )
}

export default SignIn