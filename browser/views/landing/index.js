const html = require(`choo/html`)

const page = {
  html: require(`./html`),
  implementation: require(`./implementation`)
}

module.exports = (state, emit) => {
  const functions = page.implementation(state, emit)

  return page.html(functions, state, emit)
}
