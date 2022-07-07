<template>
    <!--   <div v-if="errors">-->
    <!--  <div v-for="(v, k) in errors" :key="k" class="bg-red-500 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">-->
    <!--    <p v-for="error in v" :key="error" class="text-sm">-->
    <!--      {{ error }}-->
    <!--    </p>-->
    <!--  </div>-->
    <!--</div>-->
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
                <div v-if="errors">

                    <div v-for="(v, k) in errors" :key="k" class="alert alert-light-danger alert-dismissible border-0 mb-4" role="alert">
                        <div v-for="error in v" :key="error" class="text-sm">

                            <strong> {{ error }} </strong>
                        </div>

                        <button type="button" class="close" data-bs-dismiss="alert" aria-label="Close">×</button>
                    </div>


                </div>



                <!-- Forms grid -->
                <form @submit.prevent="savePost">
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="id">ID</label>
                            <input type="text" class="form-control" id="id" placeholder="ID" v-model="post.id"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="name">Title</label>
                            <input type="text" class="form-control" id="name" placeholder="Title" v-model="post.title"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Body</label>
                        <input type="text" class="form-control" id="email" placeholder="Body Text" v-model="post.body"/>
                    </div>
                    <!--                                <div class="form-group">-->
                    <!--                                    <label for="inputAddress2">Address 2</label>-->
                    <!--                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />-->
                    <!--                                </div>-->
                    <!--                                <div class="row">-->
                    <!--                                    <div class="form-group col-md-6">-->
                    <!--                                        <label for="inputCity">City</label>-->
                    <!--                                        <input type="text" class="form-control" id="inputCity" />-->
                    <!--                                    </div>-->
                    <!--                                    <div class="form-group col-md-4">-->
                    <!--                                        <label for="inputState">State</label>-->
                    <!--                                        <select id="inputState" class="form-select">-->
                    <!--                                            <option selected>Choose...</option>-->
                    <!--                                            <option>...</option>-->
                    <!--                                        </select>-->
                    <!--                                    </div>-->
                    <!--                                    <div class="form-group col-md-2">-->
                    <!--                                        <label for="inputZip">Zip</label>-->
                    <!--                                        <input type="text" class="form-control" id="inputZip" />-->
                    <!--                                    </div>-->
                    <!--                                </div>-->
                    <!--                                <div class="form-group">-->
                    <!--                                    <div class="form-check ps-0">-->
                    <!--                                        <div class="custom-control custom-checkbox checkbox-primary">-->
                    <!--                                            <input type="checkbox" class="custom-control-input" id="gridCheck" />-->
                    <!--                                            <label class="custom-control-label" for="gridCheck">Check me out</label>-->
                    <!--                                        </div>-->
                    <!--                                    </div>-->
                    <!--                                </div>-->
                    <button type="submit" class="btn btn-primary mt-3">Save</button>
                </form>

            </div>
        </div>
    </div>


</template>

<script>
import usePosts from "../composables/posts";
import {onMounted} from "vue";

export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },

    setup(props) {

        console.log(props);
        const { errors, post, getPost, updatePost } = usePosts()

        onMounted(getPost(props.id))

        const savePost = async () => {
            await updatePost(props.id)
        }

        return {
            errors,
            post,
            savePost
        }
    }
}
</script>
