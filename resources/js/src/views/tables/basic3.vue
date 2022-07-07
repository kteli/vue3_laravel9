<template>
    <div id="app">
        <h1 class="vue-title">Vue Tables 2 Demo</h1>
        <label>Show <input type="checkbox" v-model="show"></label>
        <div v-if="show">
            <v-client-table :columns="users" :data="data" :options="options">
                <a slot="uri" slot-scope="props" target="_blank" :href="props.row.uri" class="glyphicon glyphicon-eye-open"></a>
            </v-client-table>
        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import { useMeta } from '@/views/composables/use-meta';

import axios from 'axios'
window.axios=require('axios');

export default {
    name:"app",
    data(){
        return{
            users:[{}]
        }
    },
    mounted(){
        this.getUsers()
    },
    methods:{

        async getUsers(){
            await axios.get('http://127.0.0.1:8000/api/users').then(response=>{

                this.users = response.data
            }).catch(error=>{
                console.log(error)
                this.users = []
            })
        },

    }
}
</script>
