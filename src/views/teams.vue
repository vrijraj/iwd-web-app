<template>
    <v-slide-y-reverse-transition>
    <v-container fluid class="mt-3" v-show="show" >
        <v-layout wrap align-center justify-center row fill-height class="pa-3">
            
            <v-flex xs12 md2 lg2 class="pa-3 hidden-sm-and-down">
                <v-img
                    width="100%"
                    :src="require('@/assets/imgs/svg/getting-started_bg.svg')"
                    :lazy-src="require('@/assets/imgs/svg/getting-started_bg.svg')">

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

            <v-flex xs12 md8 lg8 class="">
                <span class="pa-2 google-font" style="border-radius:8px;background-color:#FFEBEE;color:#B71C1C;font-size:150%">Team</span>
                <p class="google-font mt-2" style="color:#37474F;font-size:150%">Our goal is to organize space to connect the best industry experts with audience to boost development of IT.</p>
                <p class="mt-0 google-font subheading">Google is known all around the world. Everyone is 'googling', checking on 'maps' and communicating in 'gmail'. For simple users, they are services that just works, but not for us. Developers see much more: APIs, scalability issues, complex technology stacks. And that is what GDG is about.</p>
                <v-divider></v-divider>
            </v-flex>

            <v-flex xs12 md10 lg10 class="mt-3">     
                <v-layout wrap row fill-height class="pa-0">
                    <v-flex xs6 sm4 md2 lg2 v-for="(item) in speakersData" :key="item.name" class="text-xs-center" >
                        <v-hover>
                        <div 
                            slot-scope="{ hover }"
                            :class="`elevation-${hover ? 0 : 0}`" 
                            class="text-xs-center ma-1 py-5 my-0" 
                            style="text-align:center;border: 1px solid #f5f6f7;min-height:250px;border-radius:7px">
                            <v-avatar size="110">
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
                            <p class="mt-3 mb-0 google-font" style="font-size:140%">{{item.name}}</p>
                            <p class="mt-1 mb-0 google-font">{{item.designation}}</p>

                            <v-btn class="mt-0 mx-0 mb-0" icon v-if="(item.twitter).length>0" :href="item.twitter" target="_blank">
                                <i class="fab fa-twitter" style="color:#1da1f2"></i>
                            </v-btn>

                            <v-btn class="mt-0 mx-0 mb-0" icon :href="item.linkedin" target="_blank">
                                <i class="fab fa-linkedin-in" style="color:#0077b5"></i>
                            </v-btn>

                            <v-btn class="mt-0 mx-0 mb-0" icon :href="item.github" target="_blank">
                                <i class="fab fa-github" style="color:#333"></i>
                            </v-btn>
                        </div>
                        </v-hover>
                      
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
import teamdata from '@/assets/data/team.json'
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
                return require('@/assets/imgs/teams/'+pic)
            }else{
                return require('@/assets/imgs/speakers/avatar.png')
            }
        },
    }
}
</script>
