const baseUrl = 'https://harry-potter-api-english-production.up.railway.app'

function getCharacters() {
  return fetch(`${baseUrl}/characters`)
  .then(res => res.json())
}
function getCharacterDetails(apiUrl) {
  return fetch(`${apiUrl}`)
  .then(res => res.json())
}
export {
  getCharacters,
  getCharacterDetails
}