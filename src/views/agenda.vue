<template>
    <v-slide-y-reverse-transition>
    <v-container fluid class="pa-0"  v-show="show">
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

        
            <v-flex xs12 md9 sm10 lg10 class="pa-0">
                <v-tabs
                    v-model="active"
                    color="grey lighten-5"
                    slider-color="yellow">

                    <v-tab ripple style="text-transform: capitalize;" >
                        Schedule
                    </v-tab>

                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>
                                <v-layout justify-start row fill-height wrap>
                                    
                                    <v-flex xs12 sm4 md3 lg3 class="pa-2" v-for="(item,i) in sessions" :key="i">
                                        <v-card class="elevation-0" style="border: 1px solid #f5f6f7;min-height:280px;">
                                            <v-card-title primary-title>
                                            <div>
                                                <h4 class="mb-0 google-font" style="font-size:130%;color:#424242">{{item.title}}</h4>
                                                <v-chip v-if="item.track.length>0" label small class="ma-0 my-1" outline :color="showColor(item.track)">
                                                    <v-icon small left>{{showIcon(item.track)}}</v-icon>
                                                    {{item.track}}
                                                </v-chip>
                                                <div class="google-font">{{item.des}}</div>
                                            </div>
                                            </v-card-title>
                                        </v-card>
                                    </v-flex>

                                </v-layout>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>

                    <v-tab ripple style="text-transform: capitalize;" >
                        Session
                    </v-tab>
                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>
                                <v-container style="max-width: 900px;">
                                    
                                    <v-timeline
                                        align-top
                                        dense
                                        v-for="(item,i) in scheduleData" :key="i"
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
                                                            <v-icon small left>{{showIcon(item.tag)}}</v-icon>
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
    </v-slide-y-reverse-transition>
</template>

<script>

import data from '@/assets/data/sessions.json'
import scheduledata from '@/assets/data/schedule.json'
export default {
    data() {
        return {
            show:false,
            imgPath:{
                src: require('@/assets/imgs/bg.jpg')
                // "../assets/imgs/bg.jpg"
                },
                active: null,
                sessions:data,
                scheduleData:scheduledata,
                model: 'tab-2',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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
        },
        showIcon(tag){
            if(tag == "Web"){
                return "code"
            }
            else if(tag == "Mobile"){
                return "stay_primary_portrait"
            }
            else if(tag == "Cloud"){
                return "cloud"
            }
        }
    },
    mounted(){
        this.show = true
    }
}
</script>



