import Axios from 'axios'

const remoteServerUrl = 'https://vote-map-server.herokuapp.com'
const testServerUrl = 'http://localhost:4000'

const voteApi = testServerUrl + '/api'
const getApi = testServerUrl +'/getmaps'
const clearApi = testServerUrl + '/clearmaps'
const changeMapApi = testServerUrl + '/changemap'

const newMapVote = (newVote) => {
  return Axios.post(voteApi, newVote)
}

const update = (updateObj) => {
  return Axios.post(getApi, updateObj)
}

const clear = () => {
  return Axios.post(clearApi, [])
}

const changeMap = (mapObject) => {
  return Axios.post(changeMapApi, mapObject)
}

export default { 
  newMapVote: newMapVote,
  update: update,
  clear: clear,
  changeMap: changeMap }
