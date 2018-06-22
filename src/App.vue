<template>
    <v-app>
        <v-navigation-drawer
                persistent
                :mini-variant="miniVariant"
                :clipped="clipped"
                v-model="drawer"
                width="250"
                mobile-break-point="10"
                disable-resize-watcher
                fixed
                app>
            <v-list>
                <v-list-tile class="vb--logo-container">
                    <v-list-tile-action @click.stop="miniVariant = !miniVariant">
                        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <div class="logo">
                            <img class="logo" src="https://raw.githubusercontent.com/visualbam/portfolio-net/master/assets/logo.png" alt="">
                        </div>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <v-list two-line>
                <router-link v-for="route in routes" :to="route.route" :key="route.route" >
                    <v-list-tile ripple @click="">
                        <v-list-tile-action>
                            <v-icon v-html="route.icon"></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-title>{{route.title}}</v-list-tile-title>
                    </v-list-tile>
                </router-link>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app tabs :clipped-left="clipped">
            <v-tabs height="64" grow>
                <v-tab v-for="category in categories" :key="category.title">
                    {{ category.title }}
                </v-tab>
            </v-tabs>
        </v-toolbar>
        <v-content>
            <router-view/>
        </v-content>
        <v-navigation-drawer temporary :right="right" v-model="rightDrawer" width="250" fixed app>
            <v-list>
                <v-list-tile @click="right = !right">
                    <v-list-tile-action>
                        <v-icon>compare_arrows</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <!--<v-footer :fixed="fixed" app>-->
            <!--<span>&copy; 2017</span>-->
        <!--</v-footer>-->
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                clipped: false,
                drawer: true,
                fixed: false,
                routes: [
                    {
                        icon: 'library_books',
                        route: 'blog',
                        title: 'Blog'
                    },
                    {
                        icon: 'grid_on',
                        route: 'portfolio',
                        title: 'Portfolio'
                    },
                    {
                        icon: 'assignment',
                        route: 'resume',
                        title: 'Resume'
                    }
                ],
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
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'Vuetify.js'
            }
        }
    }
</script>
