<template>
    <v-slide-y-reverse-transition>
    <v-container fluid class="mt-3" v-show="show">
        <v-layout wrap align-center justify-center row fill-height class="pa-3">
            <v-flex xs12 md8 lg8>
                <span class="pa-2 google-font" style="border-radius:8px;background-color:#F9FBE7;color:#827717;font-size:150%">Speakers</span>
                <p class="google-font mt-2" style="color:#37474F;font-size:150%">Our lineup of big thinkers and even bigger doers</p>
                <p class="mt-0 google-font subheading">Get ready to be inspired by speakers who are building a cloud full of opportunity with our partners and customers. Stay tuned as we add more dynamic speakers to our lineup..</p>
            </v-flex>

            <v-flex xs12 md2 lg2 class="pa-3">
                <v-img
                    width="100%"
                    :src="require('@/assets/imgs/svg/solutions_bg.svg')"
                    :lazy-src="require('@/assets/imgs/svg/solutions_bg.svg')"
                    class="hidden-md-and-down">

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
            </v-flex>

            <v-flex xs12 md10 lg10>     
                <v-layout wrap row fill-height class="pa-0">
                    <v-flex xs6 sm3 md2 lg2 v-for="(item) in speakersData" :key="item.name" class="text-xs-center" style="text-align:center">
                        <div 
                            class="text-xs-center ma-1 py-5 my-0" 
                            style="text-align:center;border: 1px solid #e0e0e0;min-height:250px;border-radius:7px">
                            <v-avatar size="100">
                                <v-img
                                :src="getImgUrl(item.profileImage)"
                                :lazy-src="getImgUrl(item.profileImage)">

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
                            </v-avatar>
                            <p class="mt-3 mb-0 google-font" style="font-size:120%">{{item.name}}</p>
                            <p class="mt-1 mb-0 google-font">{{item.company}}</p>

                            <v-btn class="mt-0 mx-0" icon v-if="(item.twitter).length>0" :href="item.twitter" target="_blank">
                                <i class="fab fa-twitter" style="color:#1da1f2"></i>
                            </v-btn>

                            <v-btn class="mt-0 mx-0" icon v-if="(item.linkedin).length>0" :href="item.linkedin" target="_blank">
                                <i class="fab fa-linkedin-in" style="color:#0077b5"></i>
                            </v-btn>

                            <v-btn class="mt-0 mx-0" icon v-if="(item.github).length>0" :href="item.github" target="_blank">
                                <i class="fab fa-github" style="color:#333"></i>
                            </v-btn>
                        </div>
                    </v-flex>
                </v-layout>
            </v-flex>
           
        </v-layout>
    </v-container>
    </v-slide-y-reverse-transition>
</template>

<script>
import teamdata from '@/assets/data/speakers.json'
export default {
    components:{
    },
    data() {
        return {
            show:false,
            dialog: false,
            speakersData: teamdata,
        }
    },
    mounted(){
        this.show = true
    },
    methods:{
        getImgUrl(pic) {
            if(pic.length>0){
                return require('@/assets/imgs/speakers/'+pic)
            }else{
                return require('@/assets/imgs/speakers/avatar.png')
            }
        },
    }
}
</script>
