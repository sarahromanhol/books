import { api } from "../baseApi";
import {parseCookies} from 'nookies'

export const getBooks = async (pageNumber: number, amountNumber: number) => {
  const { token } = parseCookies();

  const page = pageNumber
  const amount = amountNumber

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const {data} = await api.get(`/books?page=${page}&amount=${amount}`, headers)
  .then(res => {
    return res.data
  })
  return data
}