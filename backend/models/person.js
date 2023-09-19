const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name: {
      type: String,
      minLength: [3,'Must be at least 3 letters'],
      required: true
    },
    number: {
      type: String,
      validate: {
        validator: function(v) {
          return /\d{2,3}-.*/.test(v)
        },
        message: props => `${props.value} is not a valid phone number!`
      },
      required: [true,'Phone number is required']
    },
    email: {
      type: String,
      required: false,
      unique: false,
      validate:{
        validator: function(v) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)
        },
        message: props => `${props.value} no es un correo electrónico válido!`
      },
    },
  })

personSchema.pre('save', async function(next) {
  try {
    await this.validate({ validateBeforeSave: true });
    next();
  } catch (err) {
    next(err);
  }
});

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)