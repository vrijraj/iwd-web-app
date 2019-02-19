<template>
    <v-container fluid class="mt-3">
        <v-layout wrap align-center justify-center row fill-height>
            <v-flex xs12 md12>
                <h1 class="google-font mt-2" >Partners</h1>
            </v-flex>

            <v-flex xs12 md12 class="mt-2">
                <p class="google-font mt-2" >Genral Creator</p>
                
                <v-layout row wrap>
                    <v-flex xs6 sm2 md2 lg2 v-for="itemp in partnerData" :key="itemp.name" class="pa-1">
                        <a v-bind:href="itemp.link" target="_blank">
                            <div class="elevation-1 pa-2">
                                {{itemp.img}}
                                <img :src="itemp.img" width="100%" alt="" srcset="">
                            </div>
                        </a>
                    </v-flex>
                </v-layout>
            </v-flex>

            <v-flex xs12 md12 class="mt-2">
                <p class="google-font mt-2" >Template Creator</p>
                
                <v-layout row wrap class="mt-0">
                    <v-flex xs6 sm2 md2 lg2>
                        <a href="https://gdgjalandhar.com" target="_blank">
                            <div class="elevation-1 pa-2">
                                <img src="@/assets/imgs/partners/gdgjalandhar.png" width="100%" alt="" srcset="">
                            </div>
                        </a>
                    </v-flex>
                </v-layout>
            </v-flex>

        


           
        </v-layout>
    </v-container>
</template>

<script>
import datap from '@/assets/data/partners.json'
export default {
    data() {
        return {
            partnerData: datap,
            imgPath:'@/assets/imgs/partners/'
        }
    },
}
</script>
