<template>

    <div class="row">
        <div class="col-12 mb-2 text-end">
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Category</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody v-if="categories.length > 0">
                            <tr v-for="(category,key) in categories" :key="key">
                                <td>{{ category.id }}</td>
                                <td>{{ category.title }}</td>
                                <td>{{ category.title }}</td>

                            </tr>
                            </tbody>
                            <tbody v-else>
                            <tr>
                                <td colspan="4" align="center">No Categories Found.</td>
                            </tr>
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </div>
    </div>

<!--    <div id="people">-->
<!--        <v-client-table :data="tableData" :columns="columns" :options="options"/>-->
<!--    </div>-->
</template>


<script>
import { onMounted, ref } from 'vue';

import { useMeta } from '@/views/composables/use-meta';

import axios from 'axios'
window.axios=require('axios');

export default {
    name:"categories",
    data(){
        return{
            categories:[{}]
        }
    },
    mounted(){
        this.getCategories()
    },
    methods:{

        async getCategories(){
            await axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{

                this.categories = response.data
            }).catch(error=>{
                console.log(error)
                this.categories = []
            })
        },

    }
}
</script>
