const baseUrl = 'https://harry-potter-api-english-production.up.railway.app'

function getCharactersList() {
  return fetch(`${baseUrl}/characters`)
}

export {
  getCharactersList
}