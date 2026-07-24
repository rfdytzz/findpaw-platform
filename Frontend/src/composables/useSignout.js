import axios from "axios"
import { useRouter } from "vue-router"
import { useUser } from "./useUser"
import { ref } from "vue"

export function useSignout() {
    const router = useRouter()
    const { clearUser } = useUser()
    const signoutLoading = ref(false)
    
    const getSignout = async () => {
        signoutLoading.value = true
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
            signoutLoading.value = false
        }
    }

    return {
        getSignout,
        signoutLoading
    }
}