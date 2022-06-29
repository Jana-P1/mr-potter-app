const baseUrl = 'https://harry-potter-api-english-production.up.railway.app'

function getCharacters() {
  return fetch(`${baseUrl}/characters`)
}

export {
  getCharacters
}