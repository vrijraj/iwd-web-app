<template>
    <v-container fluid class="pa-0">
        <v-layout wrap align-center justify-center row>

            <v-flex xs12>
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
            </v-flex>
            
            <v-flex xs12 md9 sm10 lg9 class="pa-0">
                <v-tabs
                    v-model="active"
                    color="indigo"
                    slot="extension"
                    dark
                    slider-color="yellow">
                    <v-tab ripple>
                        Schedule
                    </v-tab>
                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>
                                <v-layout row wrap>
                                    <v-flex xs12 sm3 md3 lg3 class="pa-2" v-for="item in sessions" :key="item.title">
                                        <v-card>
                                            <v-card-title primary-title>
                                            <div>
                                                <h3 class="headline mb-0 google-font">{{item.title}}</h3>
                                                <div class="google-font">{{item.des}}</div>
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
                            <v-card-text>
                                <v-container style="max-width: 900px;">
                                    
                                    <v-timeline
                                        align-top
                                        dense
                                        v-for="item in scheduleData" :key="item"
                                        class=""
                                    >
                                        <v-timeline-item
                                            :color="showColor(item.tag)"
                                            small
                                        >
                                            <v-layout pt-3>
                                                <v-flex xs3>
                                                    <strong class="google-font">{{item.startTime}}</strong>
                                                </v-flex>
                                                <v-flex xs9>
                                                    <strong class="google-font">{{item.topic}}</strong>
                                                    <div class="caption">
                                                        <v-chip v-if="item.tag.length>0" label small class="ma-0" outline :color="showColor(item.tag)">
                                                            {{item.tag}}
                                                        </v-chip>
                                                    </div>
                                                    <div class="google-font">{{item.des}}</div>
                                                </v-flex>
                                            </v-layout>
                                        </v-timeline-item>

                                    </v-timeline>

                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
            </v-flex>

           
        </v-layout>
    </v-container>
</template>

<script>

import data from '@/assets/data/sessions.json'
import scheduledata from '@/assets/data/schedule.json'
export default {
    data() {
        return {
            imgPath:{
                src: require('@/assets/imgs/bg.jpg')
                // "../assets/imgs/bg.jpg"
                },
                active: null,
                sessions:data,
                scheduleData:scheduledata
        }
    },
    methods:{
        showColor(tag){
            if(tag == "Web"){
                return "red"
            }
            else if(tag == "Mobile"){
                return "green"
            }
            else if(tag == "Cloud"){
                return "orange"
            }
        }
    }
}
</script>



