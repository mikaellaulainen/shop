import axios from 'axios'
const baseUrl='/api/drinks'

const getAll = () => {
  return axios.get(baseUrl)
}

export default { getAll }