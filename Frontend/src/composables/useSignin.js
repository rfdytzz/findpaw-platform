import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export function useSignin() {
    const router = useRouter()
    const message = ref('')
    const loading = ref(false)

    const getSignin = async (email, password) => {
        try {
            loading.value = true
            const res = await axios.post('http://localhost:8000/api/signin',
                {
                    email: email,
                    password: password
                }
            )
            localStorage.setItem('token', res.data.token)
            router.push('/')
        } catch(error) {
            console.log(error?.response?.data?.message)
            message.value = error?.response?.data?.message
        } finally {
            loading.value = false
        }
    }

    return {
        getSignin,
        message,
        loading
    }
}