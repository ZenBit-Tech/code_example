import BaseAxios, { AxiosResponse } from 'axios'

const githubBaseUrl = 'https://api.github.com'

export const axios = BaseAxios.create({ baseURL: githubBaseUrl })

/* Use it as config for routes which do not need any credentials */

export const noCredentials = {
  params: {
    noAuth: true,
  },
}

/* Inject token to the request each time */

// axios.interceptors.request.use(
//   async (request) => {
//     if (!request?.params?.noAuth) {
//       const newRequest = { ...request }
//       const { token } = store.getState().login
//       const userData = await RNSInfo.getItem('userData', {})
//       const { renewalToken } = JSON.parse(userData)
//       const validatedToken = await renewalProcess(token, renewalToken)
//       newRequest.headers = {
//         Authorization: `Bearer ${validatedToken}`,
//       }
//       return newRequest
//     }
//
//     return request
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  async (error) => {
    // const { token } = store.getState().login
    // if (
    //   error &&
    //   error.response &&
    //   (error.response.status === 401 || error.response.status === 403) &&
    //   token
    // ) {
    //   store.dispatch(doLogout()).catch(() => {
    //     // Do nothing
    //   })
    //   return null
    // }
    return Promise.reject(error)
  },
)
