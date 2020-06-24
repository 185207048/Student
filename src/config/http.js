import axios from 'axios'
import qs from 'qs'
// axios.defaults.timeout = 50000
export const BASEURL = axios.defaults.baseURL = 'http://47.107.180.202:8080/';
// axios.defaults.withCredentials = true;
// axios.interceptors.request.use(config => {
//   return config
// }, error => {
//   return Promise.reject(error)
// });
// axios.interceptors.response.use(response => {
//   return response
// }, error => {
//   if (error.response) {
//     switch (error.response.status) {
//       case 401:
//         // console.log('error');
//     }
//   }
//   return Promise.resolve(error.response)
// })

// axios.defaults.withCredentials = true;
axios.interceptors.response.use((response) => {
  console.log(response)
  return response;
})



export const fetch = (url, params = {}) => {
  return new Promise((resolve, reject) => {
      axios.get(url, {
              params: params
          })
          .then(response => {
              resolve(response.data);
          })
          .catch(err => {
              reject(err);
          })
  })
}
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
      axios
          .post(url, qs.stringify(data, {
              arrayFormat: 'repeat'
          }))
          .then(response => {
              resolve(response.data)
          })
          .catch(err => {
              reject(err);
          })
  })
}

export const patch = (url, data = {}) => {
  return new Promise((resolve, reject) => {
      axios
          .patch(url, qs.stringify(data, {
              arrayFormat: 'repeat'
          }))
          .then(response => {
              resolve(response.data)
          })
          .catch(err => {
              reject(err);
          })
  })
}

export const put = (url, data = {}) => {
  return new Promise((resolve, reject) => {
      axios
          .put(url, qs.stringify(data))
          .then(response => {
              resolve(response.data)
          })
          .catch(err => {
              reject(err);
          })
  })
}

export const postConfig = (url, data = {}, config) => {
  return new Promise((resolve, reject) => {
      axios
          .post(url, data, config)
          .then(response => {
              resolve(response.data)
          })
          .catch(err => {
              reject(err);
          })
  })
}