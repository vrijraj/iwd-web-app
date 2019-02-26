<template>
    <v-container fluid >
        <v-layout wrap align-center justify-center row fill-height>
            <v-flex xs12 md7>

                <v-img
                    :src="data.eventLogo"
                    :lazy-src="data.eventLogo"
                    width="5vh">
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
                
                <h1 class="google-font mt-0" style="color:#616161">{{data.eventName}}</h1>

                <p class="google-font mb-0" style="font-size:250%;color:#17ACB6;font-weight:700">{{data.themeTitle}}</p>

                <p class="mt-2 google-font" style="font-size:120%">{{data.eventDes}}</p>

                <p class="grey--text google-font mb-0" style="font-size:120%">{{data.eventDate}} | {{data.eventTime}} | {{data.eventVenue}}</p>
                <p class="grey--text google-font mt-1" style="font-size:120%">
                    <span v-for="(hs,i) in data.hashTag" :key="i">
                        {{hs.name}} &nbsp;
                    </span>
                </p>
                <v-btn :href="data.registrationLink" target="_blank" class="ma-0 google-font" color="#2aa1af" style="text-transform: capitalize;border-radius:8px;color:white">Request for an Invitation</v-btn>
                &nbsp;
                <v-btn :href="data.eventMeetupLink" target="_blank" round color="pink" style="text-transform: capitalize;border-radius:8px" flat  class="ml-0" dark>Meetup</v-btn>
            </v-flex>

            <v-flex xs12 md5 class="hidden-sm-and-down pl-5">
                <v-img
                    :src="require('@/assets/imgs/home2.jpg')"
                    :lazy-src="require('@/assets/imgs/home2.jpg')">
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
        </v-layout>
    </v-container>
</template>

<script>
import homeData from '@/assets/data/home.json'
export default {
    data() {
        return {
            data: homeData
        }
    },
}
</script>
