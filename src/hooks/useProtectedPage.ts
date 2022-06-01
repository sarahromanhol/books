import { useRouter } from "next/router"
import { useEffect } from "react"
import {parseCookies} from 'nookies'


export const useProtectedPage = () => {
    const router = useRouter()

    useEffect(() => {
        const { token } = parseCookies();

        if (!token) {
            router.push('/')
        }
    }, [router])
}
