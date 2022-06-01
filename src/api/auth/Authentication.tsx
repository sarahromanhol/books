import { api } from "../baseApi";
import nookies from 'nookies'

type SinginRequestData = {
  email: string;
  password: string;
};


export default async function SinginRequest(data: SinginRequestData, setIsLoading: Function, router: any, toggle: Function) {
  return await api
    .post("/auth/sign-in", data)
    .then((res) => {
      console.log(res)
      console.log(res.headers.authorization)

      nookies.set(undefined, 'userGender', res.data.gender, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      nookies.set(undefined, 'userName', res.data.name, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      nookies.set(undefined, 'token', res.headers.authorization, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      router.push('/home')
      setIsLoading(false)
    })
    .catch((err) => {
      toggle()
      setIsLoading(false)
    })
}
