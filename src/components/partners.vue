<template>
    <v-container fluid class="mt-3">
        <v-layout wrap align-center justify-center row fill-height>
            <v-flex xs12 md12>
                <p class="google-font mt-2 mb-0" style="font-size:160%;color:#37474F;" >Partners</p>
                <p class="google-font mt-1 mb-0" style="font-size:120%">A very big thank you to all our partners for their continued partnership.</p>
                <p class="google-font mt-0" style="font-size:120%">If you’re interested in being showcased throughout <b>{{homeData.eventName}}</b>, contact <a style="color:#1565C0;text-decoration: none;" :href="`mailto:${homeData.email}`">{{homeData.email}}</a> to discuss sponsorship opportunities.</p>
            </v-flex>

            <v-flex xs12 md12 class="mt-2">
                <p class="google-font mt-2" style="font-size:110%">General Creator</p>
                

                <v-layout >
                    <v-flex xs12 sm6 class="elevation-0">
                        <v-card class="elevation-0 pa-0">
                            <v-container grid-list-sm fluid class="pa-0">
                                <v-layout row wrap class="ma-1">
                                    <v-flex
                                        v-for="itemp in partnerData" :key="itemp.name"
                                        xs4
                                        md3
                                        d-flex
                                        class="pa-2 mr-2"
                                        style="border-radius:8px;border-color:#e0e0e0;border-width: 1px; border-style: solid;"
                                    >
                                    <v-card flat tile class="d-flex" >
                                        <a v-bind:href="itemp.link" target="_blank">
                                        <v-img
                                        :src="getImgUrl(itemp.img)"
                                        :lazy-src="getImgUrl(itemp.img)"
                                        aspect-ratio="2.9"
                                        class="white"
                                        >
                                            <v-layout
                                                slot="placeholder"
                                                fill-height
                                                align-center
                                                justify-center
                                                ma-0
                                            >
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-layout>
                                        </v-img>
                                        </a>
                                    </v-card>
                                    </v-flex>

                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>
                </v-layout>

            </v-flex>

            <v-flex xs12 md12 class="mt-2">
                <p class="google-font mt-2" style="font-size:110%">Template Creator</p>

                <v-layout >
                    <v-flex xs12 sm10 class="elevation-0">
                        <v-card class="elevation-0 pa-0">
                            <v-container grid-list-sm fluid class="pa-0">
                                <v-layout row wrap class="ma-1">
                                    <v-flex
                                        xs4
                                        md2
                                        d-flex
                                        class="pa-2 mr-2"
                                        style="border-radius:8px;border-color:#e0e0e0;border-width: 1px; border-style: solid;"
                                    >
                                    <v-card flat tile class="d-flex" >
                                        <a href="https://gdgjalandhar.com" target="_blank">
                                        <v-img
                                            :src="require('../assets/imgs/partners/gdgjalandhar.png')"
                                            :lazy-src="require('../assets/imgs/partners/gdgjalandhar.png')"
                                            aspect-ratio="2.9"
                                            class="white"
                                        >
                                            <v-layout
                                                slot="placeholder"
                                                fill-height
                                                align-center
                                                justify-center
                                                ma-0
                                            >
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                            </v-layout>
                                        </v-img>
                                        </a>
                                    </v-card>
                                    </v-flex>

                                </v-layout>
                            </v-container>
                        </v-card>
                    </v-flex>
                </v-layout>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import datap from '@/assets/data/partners.json'
import homeData from '@/assets/data/home.json'
export default {
    data() {
        return {
            partnerData: datap,
            homeData: homeData
        }
    },
    methods:{
        getImgUrl(pic) {
            return require('../assets/imgs/partners/'+pic)
        },
    }
}
</script>
