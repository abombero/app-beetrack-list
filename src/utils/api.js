const BASE_URL='http://localhost:3000';


const fetchParams = (method, data = '') => {
  const body = data ? { body: JSON.stringify(data) } : {}

  return {
    method: method,
    ...body,
    headers: apiHeaders
  }
}

const apiHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}


const api = {

  getData: async () => {
    const dataResponse = await fetch(BASE_URL + '/api/users', fetchParams('GET'))
    const dataInfo = await dataResponse.json()
    return dataInfo
  },
  addData: async user => {
    const dataResponse = await fetch(BASE_URL + '/api/users', fetchParams('POST',  user ))
    const newData = await dataResponse.json();
    return newData
  },
  deleteData: async id => {
    console.log('aaaaaa', BASE_URL + `/api/users/${id}`);
    const dataResponse = await fetch(BASE_URL + `/api/users/${id}`, fetchParams('DELETE'))
    }
}

export default api