import axios from 'axios'

export function getCotations (url) {
  return axios.get(url)
    .then(res => {
      return res
    })
}

export function postNewsForm (url, obj, config) {
  axios.post(url, obj, config)
  .then(function (response) {
    window.alert(`Dados enviados com sucesso, retorno status ${response.status}`)
  })
}
