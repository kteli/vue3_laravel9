import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useUsers() {
    const users = ref([])
    const user = ref([])
    const router = useRouter()
    const errors = ref('')

    const getUsers = async () => {
        let response = await axios.get('/api/users')
        users.value = response.data.data;
    }

    const getUser = async (id) => {
        let response = await axios.get('/api/users/' + id)
        user.value = response.data.data;
    }

    const storeUser = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/users', data)
            await router.push({name: 'users.index'})
        } catch (e) {
            // console.log(e.response.data.message);

            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateUser = async (id) => {
        errors.value = ''
        try {
            await axios.put('/api/users/' + id, user.value)
            await router.push({name: 'users.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const destroyUser = async (id) => {
        await axios.delete('/api/users/' + id)
    }


    return {
        users,
        user,
        errors,
        getUsers,
        getUser,
        storeUser,
        updateUser,
        destroyUser
    }
}
