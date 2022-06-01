import { useEffect } from "react";
import { useRouter } from "next/router"
import {parseCookies} from 'nookies'

export const useUnprotectedPage = () => {
    const router = useRouter()

    useEffect(() => {
        const { token } = parseCookies();

        if (token) {
            router.push('/home')
        }
    }, [router])
}
