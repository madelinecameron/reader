const https = require(`https`)
const http = require(`http`)
const app = require(`./app`)
const fs = require(`fs`)

const {
  NODE_ENV,
  PORT
} = process.env

const port = process.env.PORT || 3081

if (NODE_ENV === `production`) {
  https.createServer({
    key: fs.readFileSync(`/etc/letsencrypt/live/reader.domain.com/privkey.pem`),
    cert: fs.readFileSync(`/etc/letsencrypt/live/reader.domain.com/cert.pem`),
  }, app).listen(port, () => {
    console.log(`Express server listening on port ${port}, ENV=production`)
  })
} else {
  http.createServer(app).listen(port, () => {
    console.log(`Express server listening on port ${port}, ENV=${NODE_ENV}`)
  })
}
