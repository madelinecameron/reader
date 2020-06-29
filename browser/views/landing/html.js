const html = require(`choo/html`)

module.exports = (functions, state, emit) => {

  return html`
    <div class="p-5 flex flex-col items-center">
      <div class="bg-white overflow-hidden shadow rounded-lg w-full">
        <div class="px-4 py-5 sm:p-6">
          <form onsubmit=${functions.transcribe} class="flex flex-col items-center">
            <textarea class="w-full form-input block sm:text-sm sm:leading-5 mb-3" name="text" rows="4"></textarea>
            <span class="inline-flex rounded-md shadow-sm">
              <button type="submit" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                Read!
              </button>
            </span>
          </form>
        </div>
      </div>
      <div id="speed-read-area" class="w-full py-3">
      </div>
      <div id="audio-player">
      </div>
    </div>
  `
}
