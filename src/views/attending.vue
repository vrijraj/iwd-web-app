<template>
    <v-container fluid class="pa-0">
        <v-layout wrap align-center justify-center row fill-height>
            <!-- <img :src="imgPath.src" alt=""> -->
            <v-img :src="imgPath.src" class="elevation-1 hidden-sm-and-up">
                <v-layout
                    align-end
                    fill-height 
                    pa-3
                    white--text
                    style="background-image: linear-gradient(transparent, #212121);"
                >
                    <div class="google-font font-weight-light" style="font-size:200%">Attending</div>
                </v-layout>
            </v-img>

            <v-flex xs12 class="pa-0">
                <!-- <img src="@/assets/imgs/bg.jpg" class="ma-0" width="100%" alt=""> -->
            </v-flex>

            <v-flex xs12 md10 class="pa-3">
                <h1 class="google-font hidden-sm-and-down mt-5" >Attending</h1>
                <p class="mt-0 google-font" style="font-size:110%">Women Techmakers is a program created by Google to celebrate International Women's Day and to highlight the talent of women in technology.</p>
    

                <p class="google-font mb-0 mt-1" style="font-size:120%">
                    <v-icon>today</v-icon>&nbsp;Date: 31st March
                </p>
                <p class="google-font mb-0 mt-1" style="font-size:120%">
                    <v-icon>location_on</v-icon>&nbsp;Venue: Venue
                </p>

                <p class="google-font mt-3" style="font-size:100%">Questions? Please contact gdgjalandhar@gmail.com</p>

            </v-flex>

            
            
            <v-layout class="mt-0 pa-0" wrap row>
                    <faq/>
            </v-layout>

           
        </v-layout>
    </v-container>
</template>

<script>

import faq from '@/components/faq'

export default {
    components:{
        faq
    },
    data() {
        return {
            imgPath:{
                src: require('@/assets/imgs/bg.jpg')
                // "../assets/imgs/bg.jpg"
                }
        }
    }
}
</script>
