const { note } = require('../services')

const router = require('express-promise-router')()

router.route('/notes').post(note.createNote)
router.route('/notes/:id').delete(note.deleteNote)
router.route('/notes/:id').patch(note.editNote)
router.route('/notes/stats').get(note.getStatisticsNotes)
router.route('/notes/:id').get(note.getCurrentNote)
router.route('/notes').get(note.getAllNotes)

module.exports = router
