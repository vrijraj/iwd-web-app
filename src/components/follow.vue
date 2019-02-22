<template>
    <v-container fluid>
        <v-layout wrap class="pa-0" row fill-height>
            <v-flex xs12 md4>
                <p class="google-font mt-2 mb-1" style="font-size:120%">Keep in touch with {{data.chapterName}} for the latest announcements & Updates</p> 

                <v-btn class="mt-0 mx-0" large icon :href="data.twitter" target="_blank">
                    <i class="fab fa-1x fa-twitter" style="color:#1da1f2"></i>
                </v-btn>

                <v-btn class="mt-0 mx-0" large icon :href="data.facebook" target="_blank">
                    <i class="fab fa-1x fa-facebook" style="color:#0077b5"></i>
                </v-btn>
                
            </v-flex>
            
            <v-flex xs12 class="mt-3">
                
               
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import data from '@/assets/data/home.json'
export default {
    data() {
        return {
            data: data
        }
    },
    
}
</script>



