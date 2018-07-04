<template>
    <div class="resume">
        <v-card class="pt-5 pr-5 pl-5">
            <h2>Bruce McElroy</h2>
            <span class="grey--text"><strong>Software Engineer</strong> - Greater Pittsburgh Area </span><br><br>
            <p>I am a front end developer by day... and a front end developer by night. I continue working on personal projects after "work" hours. I strive to be challenged and I am very self motivated. My goal is to be an asset to your company and wear multiple hats to help streamline projects. Currently I'm deep diving into Javascript and exploring design patterns. I'm also a proficient designer with a focus on UI/UX.</p>
            <v-divider></v-divider>
            <v-container>
                <v-layout style="align-items: center;">
                    <v-flex pa-4 xs3>
                        <img src="@/assets/ptc-full-logo.svg" alt="">
                    </v-flex>
                    <v-flex pa-4 xs3>
                        <img src="@/assets/ppg-logo.svg" alt="">
                    </v-flex>
                    <v-flex pa-4 xs3>
                        <img src="@/assets/bb-logo.svg" alt="">
                    </v-flex>
                    <v-flex pa-4 xs3>
                        <img src="@/assets/acatar-logo.svg" alt="">
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
        <v-card class="ma-5 pa-4">
            <h3>Experience</h3>
            <v-list three-line>
                <template>
                    <v-subheader>
                        Software Engineer
                    </v-subheader>

                    <v-divider></v-divider>

                    <v-list-tile>
                        <v-list-tile-avatar>
                            <img src="@/assets/acatar-icon-logo.svg" alt="">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>Feb 2016 - Nov 2017</v-list-tile-title>
                            <v-list-tile-sub-title>Acatar</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
                <template>
                    <v-subheader>
                        Software Engineer
                    </v-subheader>

                    <v-divider></v-divider>

                    <v-list-tile>
                        <v-list-tile-avatar>
                            <img src="@/assets/bb-icon-logo.svg" alt="">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>Feb 2016 - Nov 2017</v-list-tile-title>
                            <v-list-tile-sub-title>Branding Brand</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
                <template>
                    <v-subheader>
                        Software Engineer
                    </v-subheader>

                    <v-divider></v-divider>

                    <v-list-tile>
                        <v-list-tile-avatar>
                            <img src="@/assets/ppg-icon-logo.svg" alt="">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>Feb 2016 - Nov 2017</v-list-tile-title>
                            <v-list-tile-sub-title>PPG Architectural Coatings</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </v-card>
    </div>
</template>

<style scoped>

</style>