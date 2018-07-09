<template>
    <v-toolbar app tabs>
        <transition-group tag="v-tabs" name="nav__item" class="nav__menu">
            <v-tab v-for="category in categories" :key="category.title">
                {{ category.title }}
            </v-tab>
        </transition-group>
    </v-toolbar>
</template>
<script>
    export default {
        name: 'blog-nav',
        resource: 'BlogNav',
        props: {
            navs: Number,
            content: Object,
            filters: {
                type: Object,
                default: () => {}
            }
        },
        computed: {
            labels() {
                return Object.keys(this.filters)
                    .map(filter => this.content.labels[filter])
            }
        },
        methods: {
            navBack() {
                if (this.navs && !this.filters.category) this.$router.go(-1);
                else this.$router.push('/');
            }
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
                ]
            }
        }
    }
</script>
