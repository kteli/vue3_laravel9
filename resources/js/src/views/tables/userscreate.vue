<template>
    <div>
        <h3 class="text-center">Add Post</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addUser">
                    <div class="form-group">
                        <label>User</label>
                        <input type="text" class="form-control" v-model="user.name">
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="user.email">
                    </div>
                    <button type="submit" class="btn btn-primary">Add User</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>

import {useRouter} from "vue-router";

import { onMounted, ref } from 'vue';

import { useMeta } from '@/views/composables/use-meta';

import axios from "axios";

export default {
    data() {
        return {
            user: {}
        }
    },
    methods: {
        addUser() {
            this.axios
                .post('/api/users/add', this.user)
                .then(response => (
                    this.$router.push({name: '/'})
                    // console.log(response.data)
                ))
                .catch(error => console.log(error))
                .finally(() => this.loading = false)
        }
    }
}
</script>
