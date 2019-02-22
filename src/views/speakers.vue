<template>
    <v-slide-y-reverse-transition>
    <v-container fluid class="mt-3" v-show="show">
        <v-layout wrap align-center justify-center row fill-height class="pa-3">
            <v-flex xs12 md10 lg10>
                <h1 class="google-font mt-2" style="color:#4a4a4a">Our lineup of big thinkers and even bigger doers</h1>
                <p class="mt-0 google-font subheading">Get ready to be inspired by speakers who are building a cloud full of opportunity with our partners and customers. Stay tuned as we add more dynamic speakers to our lineup..</p>
            </v-flex>

            <v-flex xs12 md10 lg10>     
                <v-layout wrap row fill-height class="pa-0">
                    <v-flex xs6 sm2 md2 lg2 v-for="(item) in speakersData" :key="item.name" class="text-xs-center py-4" style="text-align:center">
                        <v-avatar size="130">
                            <img :src=item.profileImage alt="avatar">
                        </v-avatar>
                        <p class="mt-3 mb-0 google-font" style="font-size:140%">{{item.name}}</p>
                        <p class="mt-1 mb-0 google-font">{{item.company}}</p>

                        <v-btn class="mt-0" icon v-if="(item.twitter).length>0" :href="item.twitter" target="_blank">
                            <i class="fab fa-twitter" style="color:#1E88E5"></i>
                        </v-btn>
                        <!-- {{item.linkedin}}
                        {{item.github}} -->

                        <!-- <v-btn class="mt-0" icon v-if="item.linkedin.length>0" :href="item.linkedin" target="_blank">
                            <i class="fab fa-linkedin-in" style="color:#1E88E5"></i>
                        </v-btn>

                        <v-btn class="mt-0" icon v-if="item.github.length>0" :href="item.github" target="_blank">
                            <i class="fab fa-github" style="color:#1E88E5"></i>
                        </v-btn> -->
                      
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
    data() {
        return {
            show:false,
            dialog: false,
            speakersData: teamdata
        }
    },
    mounted(){
        this.show = true
    }
}
</script>
