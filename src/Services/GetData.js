import Axios from 'axios'

const voteApi = 'https://vote-map-server.herokuapp.com/api'
const getApi = 'https://vote-map-server.herokuapp.com/getmaps'
const clearApi = 'https://vote-map-server.herokuapp.com/clearmaps'

const httpUrl = 'https://'
const USERNAME = 'jasteknik'
const PASSWORD = 'RDX680mko123'
const url1 ='@opensky-network.org/api/flights/'

const newMapVote = (newVote) => {
  return Axios.post(voteApi, newVote)
}

const update = (updateObj) => {
  return Axios.post(getApi, updateObj)
}

const clear = () => {
  return Axios.post(clearApi, [])
}

export default { 
  newMapVote: newMapVote,
  update: update,
  clear: clear }
