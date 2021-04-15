import { axios } from '../utils/axios'
import { Organization } from '../interfaces'

export const getOrganizations = async (): Promise<Organization[]> => {
  const url = '/organizations'
  // data from response extracted in "axios.interceptors.response.use"
  return axios.get(url)
}
