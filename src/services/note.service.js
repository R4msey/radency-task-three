const NoteRepository = require('../repositories/note.repository')

const createNoteSchema = require('../helpers/validation/note.create.schema')
const editNoteSchema = require('../helpers/validation/note.edit.schema')

const Http = require('../helpers/api/api.http')

const createNote = async (req, res) => {
  const { body } = req

  try {
    const valideNote = await createNoteSchema
      .validate(body, {
        abortEarly: false,
      })
      .catch((err) => {
        throw err.errors
      })

    NoteRepository.createNote(valideNote)

    return Http.ok(res, 'Note created', valideNote)
  } catch (err) {
    return Http.failure(res, err)
  }
}

const deleteNote = async (req, res) => {
  const {
    params: { id },
  } = req

  try {
    NoteRepository.deleteNote(parseInt(id))

    return Http.ok(res, 'Note deleted', id)
  } catch (err) {
    return Http.failure(res, err)
  }
}
const editNote = async (req, res) => {
  const {
    params: { id },
    body,
  } = req

  try {
    const valideNote = await editNoteSchema
      .validate(body, {
        abortEarly: false,
      })
      .catch((err) => {
        throw err.errors
      })
    NoteRepository.editNote(parseInt(id), valideNote)

    return Http.custom(res, 204, 'Note updated', { note: valideNote })
  } catch (err) {
    return Http.failure(res, err)
  }
}

const getCurrentNote = async (req, res) => {
  const {
    params: { id },
  } = req

  try {
    const note = NoteRepository.getCurrentNote(parseInt(id))

    return Http.ok(res, 'Note found', note)
  } catch (err) {
    return Http.failure(res, err)
  }
}
const getAllNotes = async (req, res) => {
  try {
    const notes = NoteRepository.getAllNotes()

    return Http.ok(res, 'Notes found', notes)
  } catch (err) {
    return Http.failure(res, err)
  }
}
const getStatisticsNotes = async (req, res) => {
  try {
    const notes = NoteRepository.getStatisticsNotes()

    return Http.ok(res, 'Notes stats', notes)
  } catch (err) {
    return Http.failure(res, err)
  }
}

module.exports = {
  createNote,
  deleteNote,
  getCurrentNote,
  getAllNotes,
  editNote,
  getStatisticsNotes,
}
