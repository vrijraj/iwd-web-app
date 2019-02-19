<template>
    <v-container fluid class="pa-0">
        <v-layout wrap align-center justify-center row fill-height>
            <v-img :src="imgPath.src" class="elevation-1 hidden-sm-and-up">
                <v-layout
                    align-end
                    fill-height 
                    pa-3
                    white--text
                    style="background-image: linear-gradient(transparent, #212121);"
                >
                    <div class="google-font font-weight-light" style="font-size:200%">Sessions</div>
                </v-layout>
            </v-img>


            <v-flex xs12 class="pa-0">
                <v-tabs
                    v-model="active"
                    color="indigo"
                    slot="extension"
                    grow
                    dark
                    slider-color="yellow"
                >

                    <v-tab ripple>
                        Schedule
                    </v-tab>
                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>
                                <v-layout row wrap v-for="item in sessions" :key="item.title">
                                    <v-flex xs12 sm3 md3 lg3 offset-sm3 >
                                        <v-card>
                                            <v-card-title primary-title>
                                            <div>
                                                <h3 class="headline mb-0">{{item.title}}</h3>
                                                <div>{{item.des}}</div>
                                            </div>
                                            </v-card-title>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>

                    <v-tab ripple>
                        Session
                    </v-tab>
                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>Seessions Data</v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
                <!-- <img src="@/assets/imgs/bg.jpg" class="ma-0" width="100%" alt=""> -->
            </v-flex>

           
        </v-layout>
    </v-container>
</template>

<script>

import data from '@/assets/data/sessions.json'
export default {
    data() {
        return {
            imgPath:{
                src: require('@/assets/imgs/bg.jpg')
                // "../assets/imgs/bg.jpg"
                },
                active: null,
                sessions:data
        }
    }
}
</script>
