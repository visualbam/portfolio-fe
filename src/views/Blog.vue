<template>
    <div class="blog page">
        <v-toolbar app tabs>
            <v-tabs height="64" grow>
                <v-tab v-for="category in categories" :key="category.title">
                    {{ category.title }}
                </v-tab>
            </v-tabs>
        </v-toolbar>
        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex xs12 sm6 md4 xl3 d-flex v-for="post in posts">
                    <v-card dark v-bind:class="post.category">
                        <v-card-media height="125px" :src="post.image"> </v-card-media>
                        <v-card-title>
                            <span class="grey--text">{{post.date}}</span><br>
                            <router-link :to="'/blog/' + post.postId">
                                <a class="headline">{{post.title}}</a>
                            </router-link>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat>{{post.category}}</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon v-if="post.bookmark">bookmark</v-icon>
                                <v-icon v-else>bookmark_border</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <!--<v-container>-->
            <!--<div class="text-xs-center">-->
                <!--<v-pagination-->
                        <!--v-model="page"-->
                        <!--:length="4"-->
                <!--&gt;</v-pagination>-->
            <!--</div>-->
        <!--</v-container>-->
    </div>
</template>

<script>
    export default {
        name: 'Blog',
        methods: {
            // navigateToPost: function(id) {
            //     this.$router.push({ name: 'post', params: { postId: id }})
            // }
        },
        data() {
            return {
                categories: [
                    {
                        title: 'UI/UX'
                    },
                    {
                        title: 'Design'
                    },
                    {
                        title: 'Development'
                    }
                ],
                page: 1,
                posts: [
                    {
                        postId: 0,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/06/featured_vacation.jpg',
                        title: 'Linkedin Changes Face After 70 Years With New Look',
                        date: 'July 3, 2018',
                        category: 'design',
                        bookmark: true
                    },
                    {
                        postId: 1,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/06/featured_popups.jpg',
                        title: 'Microsoft to buy github; controversy this week',
                        date: 'March 14, 2018',
                        category: 'development',
                        bookmark: false
                    },
                    {
                        postId: 2,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/05/featured_writing-1.jpg',
                        title: '5 ways to improve your sites content without being cheesy',
                        date: 'June 16, 2018',
                        category: 'design',
                        bookmark: false
                    },
                    {
                        postId: 3,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/06/featured_comparemymove.jpg',
                        title: '6 layouts inspired by tech giants today with no bullshit',
                        date: 'February 22, 2018',
                        category: 'development',
                        bookmark: true
                    },
                    {
                        postId: 4,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/06/featured-3.jpg',
                        title: '6 Joomla extensions you cannot live without this in your pocket',
                        date: 'February 28, 2018',
                        category: 'design',
                        bookmark: true
                    },
                    {
                        postId: 5,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/06/featured_adobe.jpg',
                        title: 'Download 10 free images from shutterstock',
                        date: 'January 8, 2018',
                        category: 'design',
                        bookmark: false
                    },
                    {
                        postId: 6,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/06/featured-3.jpg',
                        title: '6 Joomla extensions you cannot live without this in your pocket',
                        date: 'February 28, 2018',
                        category: 'design',
                        bookmark: true
                    },
                    {
                        postId: 7,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/06/featured_adobe.jpg',
                        title: 'Download 10 free images from shutterstock',
                        date: 'January 8, 2018',
                        category: 'design',
                        bookmark: false
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>