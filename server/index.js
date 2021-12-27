const https = require(`https`)
const http = require(`http`)
const app = require(`./app`)
const fs = require(`fs`)

const {
  NODE_ENV,
  PORT
} = process.env

const port = process.env.PORT || 3088

if (NODE_ENV === `production`) {
  https.createServer({
    key: fs.readFileSync(`/etc/letsencrypt/live/reader.maddie.today/privkey.pem`),
    cert: fs.readFileSync(`/etc/letsencrypt/live/reader.maddie.today/cert.pem`),
  }, app).listen(port, () => {
    console.log(`Express server listening on port ${port}, ENV=production`)
  })
} else {
  http.createServer(app).listen(port, () => {
    console.log(`Express server listening on port ${port}, ENV=${NODE_ENV}`)
  })
}
