import Vue from 'vue'
import {
    Vuetify,
    VApp,
    VCard,
    VDivider,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VPagination,
    VToolbar,
    VTooltip,
    VTabs,
    transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
    components: {
        VApp,
        VCard,
        VDivider,
        VNavigationDrawer,
        VFooter,
        VList,
        VBtn,
        VIcon,
        VGrid,
        VPagination,
        VToolbar,
        VTooltip,
        VTabs,
        transitions
    },
    theme: {
        primary: '#b71c1c',
        secondary: '#b0bec5',
        accent: '#ED5A73',
        error: '#EF6592'
    }
});
