<template>
    <div class="resume">
        <v-card class="pt-5 pr-5 pl-5">
            <h2>Bruce McElroy</h2>
            <span class="grey--text"><strong>Software Engineer</strong> - Greater Pittsburgh Area </span><br><br>
            <p>I am a front end developer by day... and a front end developer by night. I continue working on personal projects after "work" hours. I strive to be challenged and I am very self motivated. My goal is to be an asset to your company and wear multiple hats to help streamline projects. Currently I'm deep diving into Javascript and exploring design patterns. I'm also a proficient designer with a focus on UI/UX.</p>
            <v-divider></v-divider>
            <v-container>
                <v-layout style="align-items: center;">
                    <v-flex pa-4 s12 md3>
                        <img src="@/assets/ptc-full-logo.svg" alt="">
                    </v-flex>
                    <v-flex pa-4 s12 md3>
                        <img src="@/assets/ppg-logo.svg" alt="">
                    </v-flex>
                    <v-flex pa-4 s12 md3>
                        <img src="@/assets/bb-logo.svg" alt="">
                    </v-flex>
                    <v-flex pa-4 s12 md3>
                        <img src="@/assets/acatar-logo.svg" alt="">
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        <v-card class="ma-5 pa-4">
            <h3> <v-icon>work</v-icon>  Work Experience</h3>
            <br>
            <v-list three-line>
                <template v-for="company in companies">
                    <v-subheader>
                        {{company.position}}
                    </v-subheader>

                    <v-divider></v-divider>

                    <v-list-tile>
                        <v-list-tile-avatar>
                            <img :src="company.logo" alt="">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{company.startDate}} - {{company.endDate}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{company.name}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'Resume',
        data() {
            return {
                companies: [
                    {
                        logo: '',
                        name: 'FI360',
                        position: 'Software Engineer',
                        startDate: 'Jan 2018',
                        endDate: 'Present'
                    },
                    {
                        logo: '',
                        name: 'Berryville Holdings, LLC',
                        position: 'Software Engineer',
                        startDate: 'February 2016',
                        endDate: 'November 2017'
                    },
                    {
                        logo: '@/assets/acatar-icon-logo.svg',
                        name: 'Acatar',
                        position: 'Software Engineer',
                        startDate: 'January 2015',
                        endDate: 'January 2016'
                    },
                    {
                        logo: '@/assets/acatar-icon-logo.svg',
                        name: 'Branding Brand',
                        position: 'Frontend Web Developer',
                        startDate: 'November 2013',
                        endDate: 'August 2014'
                    },
                    {
                        logo: '@/assets/acatar-icon-logo.svg',
                        name: 'PPG Architectural Coatings',
                        position: 'Frontend Web Developer',
                        startDate: 'August 2012',
                        endDate: 'November 2013'
                    },
                    {
                        logo: '@/assets/acatar-icon-logo.svg',
                        name: 'Kolano Design',
                        position: 'Graphic Designer / Frontend Web Developer',
                        startDate: 'August 2011',
                        endDate: 'November 2013'
                    },
                    {
                        logo: '@/assets/acatar-icon-logo.svg',
                        name: 'Pittsburgh Technical College',
                        position: 'Visual Communications Assistant',
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