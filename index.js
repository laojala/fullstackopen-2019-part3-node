require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser') 
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const app = express()

const logger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}



app.use(express.static('build'))
app.use(cors())
app.use(logger)

morgan.token('body', function (req, res) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status - :body'));

let persons = []
  
app.use(bodyParser.json())

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons.map(person => person.toJSON()))
  })
})

  
// app.get('/info', (req, res) => {
//     const len = persons.length
//     const date = new Date()
//     res.send(`<div>Phone book has ${len} persons<div>${date}<div>`)
//   })


// app.get('/api/persons/:id', (request, response) => {
//     const id = Number(request.params.id)
//     const person = persons.find(person => person.id === id)
  
//     if (person) {
//       response.json(person)
//     } else {
//       response.status(404).end()
//     }
//   })


app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    
    if (body.name === undefined || body.name === "") 
      return response.status(400).json({ error: 'Name is missing' })
    
    if (body.number === undefined || body.number === "") 
        return response.status(400).json({ error: 'Number is missing' })
      
    if (persons.some(person => person.number === body.number))
        return response.status(400).json({ error: 'Number is already in the phone book' })


    const person = new Person ({
      name: body.name,
      number: body.number,
    })
  
    person.save().then(savedPerson => {
      response.json(savedPerson.toJSON())
    })
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})