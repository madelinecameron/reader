const textToSpeech = require(`@google-cloud/text-to-speech`)
const { resolve } = require(`path`)
const express = require(`express`)
const debug = require(`debug`)(`qnzl:reader:reading`)
const fs = require(`fs-extra`)

const text2SpeechClient = new textToSpeech.TextToSpeechClient()

const router = express.Router()

const synthesize = async (req, res, next) => {
  const { text, speed } = req.body

  debug(`creating mp3 for words @ speed ${speed}`)

  const request = {
    input: {
      text
    },
    // Select the language and SSML voice gender (optional)
    voice: {
      name: `en-US-Wavenet-D`,
      languageCode: `en-US`,
      ssmlGender: `NEUTRAL`
    },
    // select the type of audio encoding
    audioConfig: {
      audioEncoding: `MP3`,
      speakingRate: speed,
      sampleRateHertz: 44100
    },
  }

  debug(`request for text-to-speech:`, request)

  const [ response ] = await text2SpeechClient.synthesizeSpeech(request)

  await fs.writeFile(resolve(__dirname, `../../public`, `text.mp3`), response.audioContent, {
    encoding: `binary`,
    flag: `w`
  })

  return res.sendStatus(201)
}

router.post(`/`, synthesize)

module.exports = router
