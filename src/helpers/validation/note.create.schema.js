const yup = require('yup')

let createNoteSchema = yup.object().shape({
  id: yup.number().required(),
  name: yup.string().required(),
  category: yup.string().required(),
  dates: yup.string().required(),
  status: yup.string().required(),
  created: yup
    .date()
    .required()
    .default(() => new Date()),
  content: yup.string().required(),
})

module.exports = createNoteSchema
