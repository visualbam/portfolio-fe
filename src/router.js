import Vue from 'vue';
import Router from 'vue-router';
import Blog from './views/Blog.vue';
import Portfolio from './views/Portfolio.vue';
import Resume from './views/Resume.vue';

import Post from './views/Post.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/', redirect: '/blog'
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/blog/:category',
            name: 'category',
            props: true,
            component: Blog
        },
        {
            path: '/blog/:post',
            name: 'post',
            props: true,
            component: Blog
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/resume',
            name: 'resume',
            component: Resume
        }
    ]
})
