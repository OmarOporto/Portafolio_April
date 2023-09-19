const personRouter = require('express').Router()
const Person = require('../models/person')

personRouter.get('/', async (request, response)  => {

  const persons = await Person
    .find({})
  response.status(200).json(persons)
  })

personRouter.post('/', async (request, response) => {
    const body = request.body
  
    if (!body.name && !body.number) {
      return response.status(400).json({
        error: 'content missing'
      })
    }
    
    let person = new Person({
      name: body.name,
      number: body.number,
    })

    if (body.email!==''){
      person = new Person({
        name: body.name,
        number: body.number,
        email: body.email,
      })
    }
    try {
      await person.save()
    } catch (err) {
      // La validación falló
      console.log(err);
      // Devuelve un mensaje de error al usuario
      return response.status(422).json({
        error: err.message,
      });
    }
    const savedPerson = await person.save()
    response.status(201).json(savedPerson)

})

personRouter.delete('/:id', async (request, response) => {
    await Person.findByIdAndRemove(request.params.id)  
    response.status(204).end()    
})

personRouter.get('/:id', async (request, response) => {
    const person = await Person.findById(request.params.id)
    if (person) {
      response.status(200).json(person)
    } else {
      response.status(404).end()
    }
})

personRouter.put('/:id', async (request, response) => {
    let { name , number, email } = request.body

    const prev = await Person.findById(request.params.id) 

    if(name === 'undefined'  || name == "") name = prev.name
    if(number === 'undefined' || number == "") number = prev.number

    if (email==='' || email){

      await Person.findByIdAndUpdate(
        request.params.id,
        { name , number},
        { new: true, runValidators: true, context: 'query' }
      )
      response.status(201).json({ name , number})
     
    }
    else{
      await Person.findByIdAndUpdate(
        request.params.id,
        { name, number, email },
        { new: true, runValidators: true, context: 'query' }
      )
      response.status(201).json({ name , number, email})
    }  
})

module.exports = personRouter