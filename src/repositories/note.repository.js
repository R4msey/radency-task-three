const { data } = require('../data')
const calcStats = require('../helpers/notes/notes.stats')

class NoteRepository {
  constructor() {
    this.store = data
  }

  static _findElement(id) {
    return data.findIndex((i) => i.id === id)
  }

  static createNote(note) {
    data.push(note)
  }

  static deleteNote(id) {
    data.splice(this._findElement(id), 1)
  }

  static editNote(id, changes) {
    const note = data.find((note) => note.id === id)

    const merged = { ...note, ...changes }

    data.splice(this._findElement(id), 1, merged)
  }

  static getCurrentNote(id) {
    return data.find((note) => note.id === id)
  }

  static getAllNotes() {
    return data
  }

  static getStatisticsNotes() {
    return calcStats(data)
  }
}
module.exports = NoteRepository
