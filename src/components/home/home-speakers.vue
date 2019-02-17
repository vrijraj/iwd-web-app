<template>
    <v-container fluid class="mt-5">
        <v-layout wrap align-center justify-center row fill-height>
            <v-flex xs12 md12>
                <h1 class="google-font mt-2" >Our lineup of big thinkers and even bigger doers</h1>
                <p class="mt-0 google-font subheading">Get ready to be inspired by speakers who are building a cloud full of opportunity with our partners and customers. Stay tuned as we add more dynamic speakers to our lineup..</p>
            </v-flex>
            
            <v-layout wrap row>
                <v-flex xs6 sm2 md2 lg2 v-for="item in speakersData.slice(0, 4)" :key="item.name" class="text-xs-center pa-2" style="text-align:center">
                    <v-avatar
                        size="120"
                        >
                        <img :src=item.profileImage alt="avatar">
                    </v-avatar>
                    <p class="mt-3 mb-0 google-font" style="font-size:140%">{{item.name}}</p>
                    <p class="mt-1 google-font">{{item.company}}</p>
                </v-flex>
            </v-layout>

           
        </v-layout>
    </v-container>
</template>

<script>
  import teamdata from '@/assets/data/speakers.json'
export default {
    data() {
        return {
            speakersData: teamdata
        }
    }
}
</script>
