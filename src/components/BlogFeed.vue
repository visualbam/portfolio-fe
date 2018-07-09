<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 xl3 d-flex v-for="post in feed" :key="post.postId">
                <v-card dark v-bind:class="post.category">
                    <v-card-media height="125px" :src="post.image"></v-card-media>
                    <v-card-title>
                        <span class="grey--text">{{post.published}}</span><br>
                        <router-link :to="'/blog/' + post.postId" @click.native="scrollTo(0, 220)" @click="$parent.$emit('setPost', post)">
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
</template>
<script>
    import { scrollTo, kebabify, prettyDate } from '../helpers';
    export default {
        name: 'blog-feed',
        resource: 'BlogFeed',
        props: {
            filters: {
                type: Object,
                default: () => {}
            }
        },
        transition: 'preview-appear',
        methods: {
            scrollTo,
            kebabify,
            prettyDate,
            getBgImg(src) {
                return { backgroundImage: `url(${src})` }
            },
            stackPosts(posts) {
                let interval;
                const stack = () => {
                    this.posts.push(posts.shift());
                    if (!posts.length) {
                        this.transition = 'preview';
                        clearInterval(interval);
                    }
                };
                interval = setInterval(stack, 125)
            }
        },
        computed: {
            feed() {
                const filterBy = {
                    post: (filter, { id }) => filter === id
                };
                if (!Object.keys(this.filters).length) return this.posts;
                return this.posts.filter(post => {
                    return Object.keys(this.filters).every(filter => {
                        console.log(filter);
                        // return filterBy[filter](this.filters[filter], post)
                    })
                })
            }
        },
        beforeMount() {
            if (!Object.keys(this.filters).length) {
                // this.stackPosts(this.posts)
            } else {
                this.transition = 'preview'
            }
        },
        data() {
            return {
                posts: [
                    {
                        postId: 0,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/06/featured_vacation.jpg',
                        title: 'Linkedin Changes Face After 70 Years With New Look',
                        published: 'July 3, 2018',
                        category: 'design',
                        bookmark: true
                    },
                    {
                        postId: 1,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/06/featured_popups.jpg',
                        title: 'Microsoft to buy github; controversy this week',
                        published: 'March 14, 2018',
                        category: 'development',
                        bookmark: false
                    },
                    {
                        postId: 2,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/05/featured_writing-1.jpg',
                        title: '5 ways to improve your sites content without being cheesy',
                        published: 'June 16, 2018',
                        category: 'design',
                        bookmark: false
                    },
                    {
                        postId: 3,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/06/featured_comparemymove.jpg',
                        title: '6 layouts inspired by tech giants today with no bullshit',
                        published: 'February 22, 2018',
                        category: 'development',
                        bookmark: true
                    },
                    {
                        postId: 4,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/06/featured-3.jpg',
                        title: '6 Joomla extensions you cannot live without this in your pocket',
                        published: 'February 28, 2018',
                        category: 'design',
                        bookmark: true
                    },
                    {
                        postId: 5,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/06/featured_adobe.jpg',
                        title: 'Download 10 free images from shutterstock',
                        published: 'January 8, 2018',
                        category: 'design',
                        bookmark: false
                    },
                    {
                        postId: 6,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/06/featured-3.jpg',
                        title: '6 Joomla extensions you cannot live without this in your pocket',
                        published: 'February 28, 2018',
                        category: 'design',
                        bookmark: true
                    },
                    {
                        postId: 7,
                        image: 'https://www.webdesignerdepot.com/cdn-origin/uploads/2018/06/featured_adobe.jpg',
                        title: 'Download 10 free images from shutterstock',
                        published: 'January 8, 2018',
                        category: 'design',
                        bookmark: false
                    }
                ]
            }
        }
    }
</script>