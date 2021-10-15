const yup = require('yup')

let editNoteSchema = yup.object().shape({
  name: yup.string(),
  category: yup.string(),
  dates: yup.string(),
  status: yup.string(),
  content: yup.string(),
})

module.exports = editNoteSchema
