<template>
    <v-slide-y-reverse-transition>
    <v-container fluid class="mt-3" v-show="show">
        <v-layout wrap align-center justify-center row fill-height class="pa-3">
            <v-flex xs12 md10 lg10>
                <span class="pa-2 google-font" style="border-radius:8px;background-color:#F9FBE7;color:#827717;font-size:150%">Speakers</span>
                <p class="google-font mt-2" style="color:#37474F;font-size:200%">Our lineup of big thinkers and even bigger doers</p>
                <p class="mt-0 google-font subheading">Get ready to be inspired by speakers who are building a cloud full of opportunity with our partners and customers. Stay tuned as we add more dynamic speakers to our lineup..</p>
            </v-flex>

            <v-flex xs12 md10 lg10>     
                <v-layout wrap row fill-height class="pa-0">
                    <v-flex xs6 sm2 md2 lg2 v-for="(item) in speakersData" :key="item.name" class="text-xs-center py-4 pa-4" style="text-align:center">
                        <v-avatar size="120">
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
                            <!-- <img :src="getImgUrl(item.profileImage)" alt="avatar"> -->
                        </v-avatar>
                        <p class="mt-3 mb-0 google-font" style="font-size:140%">{{item.name}}</p>
                        <p class="mt-1 mb-0 google-font">{{item.company}}</p>

                        <v-btn class="mt-0 mx-0" icon v-if="(item.twitter).length>0" :href="item.twitter" target="_blank">
                            <i class="fab fa-twitter" style="color:#1da1f2"></i>
                        </v-btn>

                        <v-btn class="mt-0 mx-0" icon :href="item.linkedin" target="_blank">
                            <i class="fab fa-linkedin-in" style="color:#0077b5"></i>
                        </v-btn>

                        <v-btn class="mt-0 mx-0" icon :href="item.github" target="_blank">
                            <i class="fab fa-github" style="color:#333"></i>
                        </v-btn>
                      
                    </v-flex>
                </v-layout>
            </v-flex>

            <!-- <v-flex xs12>
                <partners/>
            </v-flex> -->
           
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
