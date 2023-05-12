import axios from 'axios'
const URL = '/api/persons'

const getAll = () => {
  const request = axios.get(URL)

  return request.then(response => response.data)
}

const add = async noteObject => {
  const request = await axios.post(URL,noteObject)

  return request.data
}

const del = async id => {
  const request = await axios.delete(`${URL}/${id}`)

  return request.data
}

const update = (id, newObject, sameName, newEmail) => {

  const request = axios.put(`${URL}/${id}`, { name:`${sameName}`, number:`${newObject}`||'' ,email:`${newEmail}`||'' })
  return request.then(response => response.data)
}

const doThings = {
  getAll,
  add,
  del,
  update,
}

export default doThings