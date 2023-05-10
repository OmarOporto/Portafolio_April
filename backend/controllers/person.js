const personRouter = require('express').Router()
const Person = require('../models/person')

personRouter.get('/', (request, response) => {
    Person.find({}).then(persons => {
      response.json(persons)
    })
  })

personRouter.post('/', (request, response, next) => {
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

    person
      .save()
      .then(per => {response.json(per)})
      .catch(error => next(error))
  
})

personRouter.delete('/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
      .then(() => {
        response.status(204).end()
      })
      .catch(error => next(error))
})

personRouter.get('/:id', (request, response, next) => {
    Person.findById(request.params.id)
      .then(note => {
        if (note) {
          response.json(note)
        } else {
          response.status(404).end()
        }
      })
      .catch(error => next(error))
})

personRouter.put('/:id', (request, response, next) => {
    const { name , number, email } = request.body
    if (email==='' || email){
      Person.findByIdAndUpdate(
        request.params.id,
        { name, number},
        { new: true, runValidators: true, context: 'query' }
      )
      .then(updatedPerson => {
        response.json(updatedPerson)
      })
      .catch(error => next(error))
    }
    else{
      Person.findByIdAndUpdate(
        request.params.id,
        { name, number, email },
        { new: true, runValidators: true, context: 'query' }
      )
      .then(updatedPerson => {
        response.json(updatedPerson)
      })
      .catch(error => next(error))
    }  
})

module.exports = personRouter