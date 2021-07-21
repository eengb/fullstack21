import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'



const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = NameObject => {
    const request = axios.post(baseUrl, NameObject)
    return request.then(response => response.data)

}

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  console.log(request)
  return request.then(response => response.data)
  }

  const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
  }


const exportedObject ={
    getAll,create,remove,update

}
export default exportedObject
