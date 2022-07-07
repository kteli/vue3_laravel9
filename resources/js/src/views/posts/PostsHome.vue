<template>
    <!-- Page Content -->
    <div class="container">
        <div class="row">

            <!-- Blog Entries Column -->
            <div class="col-md-8">

                <h1 class="my-4">Newsletters
                    <small>List of all Newsletters</small>
                </h1>

                <p v-for="(post,key) in posts" :key="key">
                <!-- Blog Post -->

                <div class="card mb-4">
                   <img class="card-img-top" v-bind:src="post.post_image" alt="Card image cap">
                    <div class="card-body">
                        <h2 class="card-title">{{post.title }}</h2>
                        <p class="card-text">{{post.body.substring(0,150)+"..." }}</p>
                        <router-link :to="{ name: 'posts.ind', params: { id: post.id} }" title="Click to read full Newsletter" type="button" class="btn btn-primary btn-sm">Read More</router-link>
                    </div>
                    <div class="card-footer text-muted">
                        Posted on {{post.created_at}}
                        <a href="#">Start Bootstrap</a>
                    </div>
                </div>
                </p>

                <!-- Pagination -->
                <ul class="pagination justify-content-center mb-4">
                    <li class="page-item">
                        <a class="page-link" href="#">&larr; Older</a>
                    </li>
                    <li class="page-item disabled">
                        <a class="page-link" href="#">Newer &rarr;</a>
                    </li>
                </ul>

            </div>

            <!-- Sidebar Widgets Column -->
            <div class="col-md-4">

                <!-- Search Widget -->
                <div class="card my-4">
                    <h5 class="card-header">Search</h5>
                    <div class="card-body">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search for...">
                            <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">Go!</button>
              </span>
                        </div>
                    </div>
                </div>

                <!-- Categories Widget -->
                <div class="card my-4">
                    <h5 class="card-header">Categories</h5>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="#">HTML</a>
                                    </li>
                                    <li>
                                        <a href="#">Freebies</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul class="list-unstyled mb-0">
                                    <li>
                                        <a href="#">JavaScript</a>
                                    </li>
                                    <li>
                                        <a href="#">CSS</a>
                                    </li>
                                    <li>
                                        <a href="#">Tutorials</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Side Widget -->
                <div class="card my-4">
                    <h5 class="card-header">Side Widget</h5>
                    <div class="card-body">
                        You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                    </div>
                </div>

            </div>

        </div>
        <!-- /.row -->

    </div>
    <!-- /.container -->

</template>


<script>
import { onMounted } from "vue";
import usePosts from "@/views/composables/posts";
window.axios=require('axios');

export default {
    setup() {
        const { posts, getPosts, destroyPost } = usePosts()

        onMounted(getPosts)

        const deletePost = async (id) => {
            if (!window.confirm('Are you sure?')) {
                return
            }

            await destroyPost(id);
            await getPosts();
        }

        return {
            posts,
            deletePost,
            options: {
                // headings: {
                //     id: 'ID',
                //     title: 'title',
                //     body: 'body'
                // },
                sortable: ['id', 'title'],
                filterable: ['id', 'title'],
                sortIcon: {
                    base: 'sort-icon-none',
                    up: 'sort-icon-asc',
                    down: 'sort-icon-desc',
                },
            },
            columns: ['id', 'title', 'body','post_image', 'actions'],

        }
    }
}
</script>
