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
                <form @submit.prevent="savePost" enctype="multipart/form-data" method="post">
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label for="user_id">USER ID</label>
                            <input type="text" class="form-control" id="user_id" placeholder="ID" v-model="form.user_id"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="name">Title</label>
                            <input type="text" class="form-control" id="name" placeholder="Title" v-model="form.title"/>
                        </div>
                    </div>




                    <div class="form-group">


                        <strong>File:</strong>
                        <input type="file" ref="file" class="form-control" v-on:change="onChange">


                        <!--                        <label for="post_image">Cover Image</label>-->
<!--                        <input type="file" class="custom-file-container__custom-file__custom-file-input"  id="post_image" v-model="form.post_image" accept="image*"/>-->
                    </div>


                    <div class="form-group">
                        <label for="body">Newsletter Content</label>
<!--                        <input type="text" class="form-control" id="email" placeholder="Body Text" v-model="form.body"/>-->
                        <textarea name="body" class="form-control" id="body" cols="60" row="50" v-model="form.body"> </textarea>
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
                    <button @submit="submit" type="submit" class="btn btn-primary mt-3">Save Post</button>
                </form>

            </div>
        </div>
    </div>


</template>

<script>
import Vue from 'vue'

import { reactive } from "vue";
import usePosts from "../composables/posts";
// import { ref} from "vue"
import { ref, onMounted } from 'vue'


export default {



    setup() {

        const form = reactive({
            'post_image': '',
            'user_id': '',
            'title': '',
            'body': '',
            'image':'',
        })



        onMounted(() => {
            form.post_image = "abc";

        })


        const { errors, storePost } = usePosts()


        const savePost = async () => {
            await storePost({...form});
        }



        return {
            form,
            errors,
            savePost,

        }
    },

    methods: {
        submit() {
                this.form.image = "yaaay";

        }

    },

    // methods: {
    //     onChange(e) {
    //         name = e.target.files[0];
    //
    //         console.log(name);
    //     }
    // }

    // methods: {
    //     onFileChange(event) {
    //         const files = event.target.files
    //         let filename = files[0].name;
    //
    //         const fileReader = new FileReader()
    //         fileReader.addEventListener('load', () => {
    //             this.imageUrl = fileReader.result
    //         })
    //         fileReader.readAsDataURL(files[0])
    //         this.image = files[0].name;
    //
    //         this.form.push("red");
    //         // console.log(image);
    //     }
    // }
    // methods: {
    //     onFileChange(e){
    //         // console.log(e.target.files[0]);
    //         this.file = e.target.files[0].name;
    //         let formData = new FormData();
    //         // form.append('file', this.file);
    //
    //
    //         form.append('file', this.file);
    //         console.log(form);
    //     },
    //     formSubmit(e) {
    //         e.preventDefault();
    //         let currentObj = this;
    //
    //         console.log(currentObj);
    //
    //         const config = {
    //             headers: { 'content-type': 'multipart/form-data' }
    //         }
    //
    //         let formData = new FormData();
    //         formData.append('file', this.file);
    //
    //         axios.post('/formSubmit', formData, config)
    //             .then(function (response) {
    //                 currentObj.success = response.data.success;
    //             })
    //             .catch(function (error) {
    //                 currentObj.output = error;
    //             });
    //     }
    // }
}
</script>
