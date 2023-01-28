export async function getAllStarships() {
  const res = await fetch ("https://swapi.dev/api/starships")
  return res.json()
}

export async function getStarshipDetails(apiUrl) {
  const res = await fetch (`${apiUrl}`)
  return res.json()
}
export async function getPilotDetails(urls) {
  const promises = urls.map(url => fetch(url).then(res => res.json()))
  const pilotObjects = await Promise.all(promises)
  return pilotObjects
}