<template>
    <v-container fluid class="elevation-0 mt-3" style="border-radius:8px;border-color:#e0e0e0;border-width: 1px; border-style: solid;">
        <v-layout wrap align-center justify-center row fill-height class="pa-3">
            <v-flex xs12 md4 >
                <p class="google-font mb-0">Explore themes</p>
                <h2 class="google-font mt-0" style="font-size:200%;color:#17ACB6">{{data.themeTitle}}</h2>
                <p class="google-font mt-2" style="font-size:120%">{{data.aboutWTMProgram}}</p>
            </v-flex>
            <v-flex xs12 md8>
                <v-layout  wrap justify-center row fill-height>
                    <v-flex xs6 class="pa-2">
                        <span class="pa-2 google-font" style="border-radius:8px;background-color:#d2e3fc;color:#174ea6;font-size:150%">{{data.stats[0].name}}</span>

                        <p class="google-font mt-3" style="font-size:120%">{{data.stats[0].des}}</p>
                    </v-flex>
                    <v-flex xs6 class="pa-2">
                        <span class="pa-2 google-font" style="border-radius:8px;background-color:#fef7e0;color:#b06000;font-size:150%">{{data.stats[1].name}}</span>

                        <p class="google-font mt-3" style="font-size:120%">{{data.stats[1].des}}</p>
                    </v-flex>
                    <v-flex xs6 class="pa-2">
                        <span class="pa-2 google-font" style="border-radius:8px;background-color:#fce8e6;color:#b31412;font-size:150%">{{data.stats[2].name}}</span>

                        <p class="google-font mt-3" style="font-size:120%">{{data.stats[2].des}}</p>
                    </v-flex>
                    <v-flex xs6 class="pa-2">
                        <span class="pa-2 google-font" style="border-radius:8px;background-color:#ceead6;color:#0d652d;font-size:150%">{{data.stats[3].name}}</span>

                        <p class="google-font mt-3" style="font-size:120%">{{data.stats[3].des}}</p>
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
