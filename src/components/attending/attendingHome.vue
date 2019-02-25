<template>
    <v-container fluid class="mt-2 grey lighten-5" style="border-radius:8px;border-color:#e0e0e0;border-width: 1px; border-style: solid;">
        <v-layout wrap align-center justify-center row fill-height>
            <v-flex xs12 md3 class="mb-3">
                <v-img
                    :src="require('@/assets/imgs/svg/attendingfront.svg')"
                    :lazy-src="require('@/assets/imgs/svg/attendingfront.svg')"
                    width="80%">
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

            <v-flex xs12 md9>
                <span class="pa-2 google-font" style="border-radius:8px;background-color:#F3E5F5;color:#7B1FA2;font-size:150%">Attending</span>
                <p class="google-font mt-2 mb-0" style="font-size:200%">Join us at the {{data.eventVenue}}, on {{data.eventDate}}.</p>   
                
                <p class="google-font mt-0" style="font-size:120%">On {{data.eventDate}} we’ll be taking technical sessions, hands-on demos, workshops, and some fun activities.</p>

                <v-btn outline class="ma-0 google-font" color="purple darken-2" style="text-transform: capitalize;border-radius:8px">Request for an Invitation</v-btn>
                <v-btn :href="data.eventMeetupLink" target="_blank" color="red" style="text-transform: capitalize;border-radius:8px" flat  class="ml-2 google-font" dark>Meetup</v-btn>
            </v-flex>               
        </v-layout>

    </v-container>
</template>

<script>
// import teamdata from '@/assets/data/speakers.json'
import homeData from '@/assets/data/home.json'

export default {
    data() {
        return {
            data: homeData
        }
    },
   
}
</script>
