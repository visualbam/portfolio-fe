<template>
    <transition name="post">
        <article v-if="post" class="post">
            <header class="post__header">
                <h2>Hello</h2>
                <h2 class="post__title">{{ title }}</h2>
                <blockquote class="post__subtitle">{{ description }}</blockquote>
            </header>
            <section class="post__body rte" v-html="content"></section>
        </article>
    </transition>
</template>

<script>
    import VueDisqus from 'vue-disqus/dist/vue-disqus';
    import { kebabify, prettyDate } from '../helpers'
    export default {
        name: 'blog-post',
        resource: 'BlogPost',
        components: { VueDisqus },
        props: { post: String },
        data() {
            return {
                title: '',
                content: '',
                published: '',
                description: '',
                commentsReady: false
            }
        },
        watch: {
            post(to, from) {
                if (to === from || !this.post) return;
                this.commentsReady = false
            }
        },
        methods: {
            prettyDate,
            showComments() {
                setTimeout(() => {
                    this.commentsReady = true
                }, 1000)
            }
        },
        beforeMount() {

        }
    }
</script>

<style scoped>

</style>