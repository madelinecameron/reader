const compression = require(`compression`)
const bodyParser = require(`body-parser`)
const ecstatic = require(`ecstatic`)
const express = require(`express`)
const minify = require(`mollify`)
const debug = require(`debug`)(`qnzl:reader:app`)
const path = require(`path`)

const app = express()
const router = express.Router()

app.use(bodyParser.json())
app.use(minify({
    dir: `${__dirname}/../public`,
    is: true
}))
app.use(compression())

app.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`)
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`)
  res.header(`Access-Control-Allow-Headers`, `Content-Type`)

  next()
})

router.use(`/api/reading`, require(`./routes/reading`))

app.use(router)

app.use(ecstatic({
  root: `${__dirname}/../public`,
  cache: `max-age=0`
}))

app.use((err, req, res, next) => {
  if (err) {
    console.error(`Error occurred: `, err)
    res.statusCode = 500
    return res.send(err)
  }

  res.end()
  return next()
})

module.exports = app
