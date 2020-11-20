import Axios from 'axios'

const remoteServerUrl = 'https://vote-map-server.herokuapp.com'
const testServerUrl = 'http://localhost:4000'

const voteApi = remoteServerUrl + '/api'
const getApi = remoteServerUrl +'/getmaps'
const clearApi = remoteServerUrl + '/clearmaps'
const changeMapApi = remoteServerUrl + '/changemap'

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
