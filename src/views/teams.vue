<template>
    <v-slide-y-reverse-transition>
    <v-container fluid class="mt-3" v-show="show">
        <v-layout wrap align-center justify-center row fill-height class="pa-3">
            <v-flex xs12 md3 lg3 class="pa-3">
                <svg aria-hidden="true" width="80%" height="70%" viewBox="0 0 513 409" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <path id="svg-GreenTrapezoids-2M07o7c" d="M.066.79h272.606V366H.066z"></path>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                        <g transform="rotate(-90 278 131)">
                            <mask id="svg-GreenTrapezoids-iG8QODB" fill="#fff">
                                <use xlink:href="#svg-GreenTrapezoids-2M07o7c"></use>
                            </mask>
                            <path d="M110.367.79H.067V366h267.95c3.403 0 5.652-3.536 4.213-6.619L110.367.79zm-6.719 10.407l155.456 344.396H10.47V11.197h93.177z" fill="#34A853" mask="url(#svg-GreenTrapezoids-iG8QODB)"></path>
                        </g>
                        <path d="M78.5 227.549V408.5h289V65.164c0-3.605-3.914-5.845-7.012-4.008L78.5 227.549zm10.402 5.96L357.098 75.253v322.821H88.902V233.51z" fill="#A8DAB5"></path>
                        <path d="M0 409h163.311v-.066H233V4.667c0-3.732-4.157-5.948-7.245-3.864L.019 153.306 0 409zm10.402-10.43l.02-239.714L222.597 15.512v382.992H163.31l-10.403.066H10.403z" fill="#CEEAD6"></path>
                    </g>
                </svg>
            </v-flex>

            <v-flex xs12 md7 lg7>
                <span class="pa-2 google-font" style="border-radius:8px;background-color:#E0F2F1;color:#004D40;font-size:150%">Team</span>
                <p class="google-font mt-2" style="color:#37474F;font-size:200%">Our goal is to organize space to connect the best industry experts with audience to boost development of IT.</p>
                <p class="mt-0 google-font subheading">Google is known all around the world. Everyone is 'googling', checking on 'maps' and communicating in 'gmail'. For simple users, they are services that just works, but not for us. Developers see much more: APIs, scalability issues, complex technology stacks. And that is what GDG is about.</p>
            </v-flex>



            <v-flex xs12 md10 lg10 class="mt-3">     
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
