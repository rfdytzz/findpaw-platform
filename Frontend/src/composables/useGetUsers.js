import axios from "axios"
import { ref } from "vue"

export function useGetUsers() {
    const data = ref([])

    const getUsers = async () => {
        const token = localStorage.getItem('token')
        try {
            const res = await axios.get('http://localhost:8000/api/admin/user',
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            data.value = res.data
        } catch (error) {
            console.log(error?.response?.data)
        }
    }

    return {
        data,
        getUsers
    }
}