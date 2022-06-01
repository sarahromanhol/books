import { api } from "../baseApi";
import {parseCookies} from 'nookies'

export const getBookById = async (id: string) => {
  const { token } = parseCookies();

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const {data} = await api.get(`/books/${id}`, headers)
  .then(res => {
    return res
  })
  return data
}