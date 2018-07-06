<template>
    <div class="resume">
        <v-card class="pt-5 pr-5 pl-5">
            <v-container grid-list-xl>
                <v-layout row wrap>
                    <v-flex xs12 md8 offset-md2>
                        <h2>Bruce McElroy</h2>
                        <span class="grey--text"><strong>Software Engineer</strong> - Greater Pittsburgh Area </span><br><br>
                        <p>I am a front end developer by day... and a front end developer by night. I continue working on personal projects after "work" hours. I strive to be challenged and I am very self motivated. My goal is to be an asset to your company and wear multiple hats to help streamline projects. Currently I'm deep diving into Javascript and exploring design patterns. I'm also a proficient designer with a focus on UI/UX.</p>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-divider></v-divider>
            <v-container grid-list-lg>
                <v-layout style="align-items: center;" row wrap justify-space-between>
                    <v-flex pa-4 xs12 sm6 md4 lg2 v-for="company in companies" v-if="company.logo">
                        <v-tooltip top color="purple lighten-2">
                            <img  slot="activator" :src="company.logo" alt="">
                            <span>{{company.position}}</span>
                        </v-tooltip>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        <v-container grid-list-lg>
            <v-layout row wrap pa-5>
                <v-flex md-6>
                    <v-card class="pa-4">
                        <h3> <v-icon>work</v-icon>  Work Experience</h3>
                        <br>
                        <v-list three-line>
                            <template v-for="company in companies">
                                <v-subheader>{{company.name}}</v-subheader>
                                <v-divider></v-divider>
                                <v-list-tile>
                                    <v-list-tile-avatar>
                                        <img :src="company.icon" alt="">
                                    </v-list-tile-avatar>
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{company.position}}</v-list-tile-title>
                                        <v-list-tile-sub-title>{{company.startDate}} - {{company.endDate}}</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <a v-if="company.url" :href="company.url" target="_blank">
                                            <v-btn flat icon color="purple lighten-2">
                                                <v-icon>link</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-tile-action>
                                </v-list-tile>
                            </template>
                        </v-list>
                    </v-card>
                </v-flex>
                <v-flex md-6>
                    <v-card class="pa-4">
                        <h3> <v-icon>class</v-icon>  Education</h3>
                        <br>
                        <v-list three-line>
                            <template v-for="school in schools">
                                <v-subheader>{{school.name}}</v-subheader>
                                <v-divider></v-divider>
                                <v-list-tile>
                                    <v-list-tile-content>
                                        <v-list-tile-title>{{school.degree}}</v-list-tile-title>
                                        <v-list-tile-sub-title>{{school.startDate}} - {{school.endDate}}</v-list-tile-sub-title>
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <a v-if="school.url" :href="school.url" target="_blank">
                                            <v-btn flat icon color="purple lighten-2">
                                                <v-icon>link</v-icon>
                                            </v-btn>
                                        </a>
                                    </v-list-tile-action>
                                </v-list-tile>
                            </template>
                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Resume',
        data() {
            return {
                schools: [
                    {
                        name: 'Pittsburgh Technical College',
                        degree: 'Graphic Design',
                        url: 'https://www.ptcollege.edu/',
                        startDate: '2009',
                        endDate: '2011'
                    },
                    {
                        name: 'Mon Valley Career and Technology Center',
                        degree: 'Multimedia',
                        url: 'https://monvalleyctc.org/',
                        startDate: '2006',
                        endDate: '2008'
                    }
                ],
                companies: [
                    {
                        icon: require('@/assets/fi360-icon.svg'),
                        logo: require('@/assets/fi360-logo.svg'),
                        name: 'Fi360',
                        position: 'Software Engineer',
                        url: 'https://www.fi360.com/',
                        startDate: 'Jan 2018',
                        endDate: 'Present'
                    },
                    {
                        icon: require('@/assets/bvhllc-icon.svg'),
                        logo: require('@/assets/bvhllc-logo.svg'),
                        name: 'Berryville Holdings, LLC',
                        position: 'Software Engineer',
                        url: 'http://bvhllc.com/',
                        startDate: 'February 2016',
                        endDate: 'November 2017'
                    },
                    {
                        icon: require('@/assets/acatar-icon.svg'),
                        logo: require('@/assets/acatar-logo.svg'),
                        name: 'Acatar',
                        position: 'Software Engineer',
                        url: 'https://www.learninghouse.com/',
                        startDate: 'January 2015',
                        endDate: 'January 2016'
                    },
                    {
                        icon: require('@/assets/bb-icon.svg'),
                        logo: require('@/assets/bb-logo.svg'),
                        name: 'Branding Brand',
                        position: 'Frontend Web Developer',
                        url: 'https://www.brandingbrand.com/',
                        startDate: 'November 2013',
                        endDate: 'August 2014'
                    },
                    {
                        icon: require('@/assets/ppg-icon.svg'),
                        logo: require('@/assets/ppg-logo.svg'),
                        name: 'PPG Architectural Coatings',
                        position: 'Frontend Web Developer',
                        url: 'http://corporate.ppg.com/Home.aspx',
                        startDate: 'August 2012',
                        endDate: 'November 2013'
                    },
                    {
                        icon: require('@/assets/ptc-icon.svg'),
                        logo: require('@/assets/ptc-logo.svg'),
                        name: 'Pittsburgh Technical College',
                        position: 'Visual Communications Assistant',
                        url: 'https://www.ptcollege.edu/',
                        startDate: 'August 2012',
                        endDate: 'November 2013'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>