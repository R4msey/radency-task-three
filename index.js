const express = require('express')

const { routes } = require('./src/routes')

const app = express()
app.use(express.json())

app.set('port', process.env.port || 7000)

routes.forEach((item) => {
  app.use(`/api/${item}`, require(`./src/routes/${item}`))
})

const start = async () => {
  try {
    app.listen(app.get('port'), () => {
      console.info(`Server listen on port ${app.get('port')}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
