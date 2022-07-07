<template>
    <div class="layout-px-spacing">
        <teleport to="#breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">DataTables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Basic</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </teleport>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6 p-0">
                    <div class="custom-table">
                        <v-client-table :data="data" :columns="columns" :options="options">
                            <template #actions="props">
                                <div class="actions text-center">
                                    <a href="javascript:;" class="cancel" @click="delete_row(props.row)">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-x-circle table-cancel"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                    </a>
                                </div>
                            </template>
                            <template #salary="props"> ${{ props.row.salary }} </template>
                        </v-client-table>
                    </div>
                </div>
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
    name: 'app',
    data() {
        return {
            columns: ['id', 'name', 'email', 'actions'],
            data:[{}],

        options: {
                // headings: {
                //     id: 'ID',
                //     title: 'title',
                //     body: 'body'
                // },
                sortable: ['id', 'name'],
                filterable: ['id', 'email']
            },
            show: true
        }
    },
    mounted(){
        this.getCategories()
    },
    methods:{

        async getCategories(){
            await axios.get('http://127.0.0.1:8000/api/users').then(response=>{

                this.data = response.data.data
            }).catch(error=>{
                console.log(error)
                //this.data = []
            })
        },

    }
}


</script>

