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
                <router-link :to="{ name: 'users.create' }"  type="button" class="btn btn-primary mb-2">New User</router-link>

                <div class="panel br-6 p-0">

                    <div class="custom-table">

                        <v-client-table :data="users" :columns="columns" :options="options">

                            <template #actions="props">
                                <div class="actions text-center">
                                    <router-link :to="{ name: 'users.edit', params: { id: props.row.id} }" title="">
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
                                    </router-link>
                                    <a href="javascript:void(0);" data-bs-toggle="tooltip" title="Delete" @click="deleteUser(props.row.id)">

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
                            <template #salary="props"> ${{ props.row.title }} </template>
                        </v-client-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import useUsers from "../composables/users";
import { onMounted } from "vue";

export default {
    setup() {
        const { users, getUsers, destroyUser } = useUsers()

        onMounted(getUsers)

        const deleteUser = async (id) => {
            if (!window.confirm('Are you sure?')) {
                return
            }

            await destroyUser(id);
            await getUsers();
        }

        return {
            users,
            deleteUser,
            options: {
                // headings: {
                //     id: 'ID',
                //     title: 'title',
                //     body: 'body'
                // },
                sortable: ['id', 'name'],
                filterable: ['id', 'name'],
                sortIcon: {
                    base: 'sort-icon-none',
                    up: 'sort-icon-asc',
                    down: 'sort-icon-desc',
                },
            },
            columns: ['id', 'name', 'email','actions'],

        }
    }
}

</script>
