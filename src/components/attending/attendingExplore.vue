<template>
    <v-container fluid class="mt-4" >
        <v-layout wrap row>
            <v-flex xs12 md3 class="mb-3">
                <p class="google-font mt-2 mb-0" style="font-size:150%">What to expect & explore</p>   
                <p class="google-font" style="font-size:120%">{{data.eventName}} features hands-on learning, latest developer products, and technical talks & workshops given by the engineers who are developing our latest APIs and tools — plus a few surprises along the way.</p>
            </v-flex>

            <v-flex xs12 md9>
               <v-layout  wrap justify-center row fill-height>
                    <v-flex xs6 class="pa-2">
                        <span class="pa-2 google-font" style="border-radius:8px;background-color:#d2e3fc;color:#174ea6;font-size:150%">{{data.stats[0].name}}</span>

                        <p class="google-font mt-3" style="font-size:120%">{{data.stats[0].longDes}}</p>
                    </v-flex>
                    <v-flex xs6 class="pa-2">
                        <span class="pa-2 google-font" style="border-radius:8px;background-color:#fef7e0;color:#b06000;font-size:150%">{{data.stats[1].name}}</span>

                        <p class="google-font mt-3" style="font-size:120%">{{data.stats[1].longDes}}</p>
                    </v-flex>
                    <v-flex xs6 class="pa-2">
                        <span class="pa-2 google-font" style="border-radius:8px;background-color:#fce8e6;color:#b31412;font-size:150%">{{data.stats[2].name}}</span>

                        <p class="google-font mt-3" style="font-size:120%">{{data.stats[2].longDes}}</p>
                    </v-flex>
                    <v-flex xs6 class="pa-2">
                        <span class="pa-2 google-font" style="border-radius:8px;background-color:#ceead6;color:#0d652d;font-size:150%">{{data.stats[3].name}}</span>

                        <p class="google-font mt-3" style="font-size:120%">{{data.stats[3].longDes}}</p>
                    </v-flex>
                    
                </v-layout>
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
