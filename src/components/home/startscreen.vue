<template>
    <v-container fluid >
        <v-layout wrap align-center justify-center row fill-height>
            <v-flex xs12 md7>
                <!-- <svg aria-hidden="true" width="80px" height="100px" viewBox="0 0 185 247" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 243.903V0h182.26c2.326 0 3.59 3.074 2.091 5.084L4.826 245.894C3.182 248.1 0 246.787 0 243.904" fill="#62CAE3" fill-rule="evenodd"></path>
                </svg> -->
                <!-- <br> -->
                
                <img :src="data.eventLogo" class="" width="60vh" alt="" srcset="">
                <h1 class="google-font mt-0" style="color:#616161">{{data.eventName}}</h1>

                <p class="google-font mb-0" style="font-size:250%;color:#17ACB6;font-weight:700">{{data.themeTitle}}</p>

                <p class="mt-2 google-font" style="font-size:120%">{{data.eventDes}}</p>

                <p class="grey--text google-font mb-0" style="font-size:120%">{{data.eventDate}} | {{data.eventTime}} | {{data.eventVenue}}</p>
                <p class="grey--text google-font mt-1" style="font-size:120%">
                    <span v-for="(hs,i) in data.hashTag" :key="i">
                        {{hs.name}} &nbsp;
                    </span>
                </p>
                <v-btn href="#" round color="blue" style="text-transform: capitalize;border-radius:8px"   class="ml-0" dark>Request for an Invatation</v-btn>

                <v-btn :href="data.eventMeetupLink" target="_blank" round color="cyan" style="text-transform: capitalize;border-radius:8px" flat  class="ml-0" dark>Meetup</v-btn>
            </v-flex>

            <v-flex xs12 md5 class="hidden-sm-and-down pl-5">
                
                <img src="@/assets/imgs/home2.jpg" width="100%" alt="" srcset="">
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
