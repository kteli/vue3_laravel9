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


        <!-- Button trigger modal -->
        <div class="text-center">
            <button type="button" class="btn btn-primary mb-2 me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch modal</button>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" data-dismiss="modal" data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                    </div>
                    <div class="modal-body">
                        <p class="modal-text">
                            Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis
                            dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn" data-dismiss="modal" data-bs-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                        <button type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6 p-0">
                    <div class="flex place-content-end mb-4">
                        <div class="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                            <router-link :to="{ name: 'companies.create' }" class="text-sm font-medium">Create company</router-link>
                        </div>
                    </div>
                    <div class="custom-table">

                        <v-client-table :data="data" :columns="columns" :options="options">
                            <template #actions="props">
                                <div class="actions text-center">

                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Delete">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-edit-2 text-success"
                                        >
                                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                        </svg>
                                    </a>
                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Edit" @click="delete_row(props.row)">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-trash-2 text-danger"
                                        >
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
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
                filterable: ['id', 'email'],
            sortIcon: {
                base: 'sort-icon-none',
                up: 'sort-icon-asc',
                down: 'sort-icon-desc',
            },
            },
            show: true
        }
    },
    mounted(){
        this.getCategories()
    },
    methods:{

        openModal () {
            this.$refs.modal.show()
        },

        delete_row(props) {


            console.log(props.id);

            if (window.confirm('You sure?')) {
                axios.delete(`/api/users/${props.id}`)
            }



        },

        async getCategories(){
            axios.get('/api/users').then(response=>{

                this.data = response.data.data
            }).catch(error=>{
                console.log(error)
                //this.data = []
            })
        },
        show:true

    }
}




</script>

