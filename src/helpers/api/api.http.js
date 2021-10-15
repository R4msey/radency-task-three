class Http {
  static ok(res, message = 'Ok', data = {}) {
    return res.status(200).json({ message, data })
  }

  static failure(res, errors) {
    return res.status(404).json({ message: 'Something went wrong', errors })
  }

  static custom(res, code, message, data) {
    return res.status(code).json({ message, data })
  }
}

module.exports = Http
