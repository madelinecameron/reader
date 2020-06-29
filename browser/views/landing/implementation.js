const getFormData = require(`get-form-data`)

const beginSpeedReader = (text) => {
  const words = text.split(` `)

  for(let offset = 0; words.length > 0; offset++) {
    const speedReadWord = words.splice(0, 1)

    // 200ms is a rough estimation. I am sure there is something
    // fancy that could be done
    setTimeout(((word) => {
      return () => $(`#speed-read-area`).html(`<p class="text-3xl text-center">${word}</p>`)
    })(speedReadWord), offset * 200)
  }
}

module.exports = (state, emit) => {
  const functions = {}

  functions.transcribe = async (e) => {
    e.preventDefault()

    const { text } = getFormData(e.target)

    const res = await fetch(`/api/reading/`, {
      method: `POST`,
      headers: {
        [`Content-Type`]: `application/json`
      },
      body: JSON.stringify({ text })
    })

    // Hack-ish cache bust despite my attempt at not having my static server have one
    // Who cares.
    if (res.status === 201) {
      $(`#audio-player`).html(`<audio autoplay src="/text.mp3?bust=${Math.random() * 100}">`)

      beginSpeedReader(text)
    }
  }

  return functions
}
