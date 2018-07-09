<template>
    <main class="blog page">
        <blog-nav :content="content" :filters="filters" :navs="navs"/>
        <blog-feed :filters="filters" @setPost="setPost"/>
        <blog-post :post="post"/>
    </main>
</template>

<script>
    import BlogNav from "../components/BlogNav";
    import BlogFeed from "../components/BlogFeed";
    import BlogPost from "../components/BlogPost";

    export default {
        name: 'Blog',
        components: { BlogFeed, BlogNav, BlogPost },
        resource: 'Blog',
        props: {
            post: String,
            category: String
        },
        data() {
            return {
                navs: 0,
                title: '',
                labels: {
                    post: '',
                    category: ''
                }
            }
        },
        computed: {
            content() {
                return { title: this.title, labels: this.labels }
            },
            filters() {
                let filters = {};
                console.log('poop', this.post);
                if (this.post) filters.post = this.post;
                if (this.category) filters.category = this.category;
                return filters
            }
        },
        watch: {
            '$route.name' (to, from) {
                if (to !== from) this.navs++;
            }
        },
        methods: {
            setPost: (post) => {
                console.log(post);
                this.post = post;
            }
        }
    }
</script>

