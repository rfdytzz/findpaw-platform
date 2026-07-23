import axios from "axios"
import { useRouter } from "vue-router"
import { useUser } from "./useUser"

export function useSignout() {
    const router = useRouter()
    const { clearUser } = useUser()
    const getSignout = async () => {
        const token = localStorage.getItem('token')
        try {
            await axios.post('http://localhost:8000/api/signout',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            clearUser()
        } catch (error) {
            console.log(error)
        } finally {
            localStorage.removeItem('token')
            router.push('/signin')
        }
    }

    return {
        getSignout
    }
}