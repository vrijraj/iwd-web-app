<template>
    <v-container fluid class="mt-3">
        <v-layout wrap align-center justify-center row fill-height class="pa-3">
            <v-flex xs12 md10 lg10>
                <h1 class="google-font mt-2" >Our lineup of big thinkers and even bigger doers</h1>
                <p class="mt-0 google-font subheading">Get ready to be inspired by speakers who are building a cloud full of opportunity with our partners and customers. Stay tuned as we add more dynamic speakers to our lineup..</p>
            </v-flex>

            <v-flex xs12 md10 lg10>     
                <v-layout wrap row fill-height class="pa-0">
                    <v-flex xs6 sm2 md2 lg2 v-for="(item) in speakersData" :key="item.name" class="text-xs-center py-4" style="text-align:center">
                        <v-avatar
                            size="130"
                            >
                            <img :src=item.profileImage alt="avatar">
                        </v-avatar>
                        <p class="mt-3 mb-0 google-font" style="font-size:140%">{{item.name}}</p>
                        <p class="mt-1 google-font">{{item.company}}</p>
                        <a :href="item.twitter" style="font-size:110%">
                            Twitter
                        </a>
                    </v-flex>
                </v-layout>
            </v-flex>
           
        </v-layout>
    </v-container>
</template>

<script>
  import teamdata from '@/assets/data/speakers.json'
export default {
    data() {
        return {
            dialog: false,
            speakersData: teamdata
        }
    }
}
</script>
