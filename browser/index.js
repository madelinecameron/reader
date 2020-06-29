const choo = require(`choo`)

const app = choo()

require(`./lib/router`)(app)

app.mount(`div`)

