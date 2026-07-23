import axios from "axios";
import { ref } from "vue";

const data = ref(null)
const loading = ref(false)
const error = ref(null)

export function useUser() {
    const getData = async (force = false) => {
        if (data.value && !force) return

        loading.value = true
        error.value = null
        try {
            const token = localStorage.getItem('token')
            const res = await axios.get('http://localhost:8000/api/user',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            data.value = res.data
        } catch (error) {
            console.log(error)
        } finally {
            loading.value = false
        }
    }

    const clearUser = () => {
        data.value = null
    }

    return {
        data,
        loading,
        error,
        getData,
        clearUser
    }
}