<template>
    <v-container fluid class="mt-3">
        <v-layout wrap align-center justify-center row fill-height>
            <v-flex xs12 md12 class="pa-4">
                <h1 class="google-font mt-2" >Attending</h1>
                <p class="mt-0 google-font" style="font-size:120%">Women Techmakers is a program created by Google to celebrate International Women's Day and to highlight the talent of women in technology.</p>
    

                <p class="google-font mb-0 mt-1" style="font-size:150%">
                    <v-icon>today</v-icon>Date: 31st March
                </p>
                <p class="google-font mb-0 mt-1" style="font-size:150%">
                    <v-icon>location_on</v-icon>Venue: Venue
                </p>

                <p class="google-font mt-3" style="font-size:120%">Questions? Please contact gdgjalandhar@gmail.com</p>

            </v-flex>
            
            <v-layout wrap row>
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
            
        }
    }
}
</script>
