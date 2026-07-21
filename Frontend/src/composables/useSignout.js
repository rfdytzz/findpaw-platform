import axios from "axios"
import { useRouter } from "vue-router"

export function useSignout() {
    const router = useRouter()
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