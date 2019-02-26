<template>
    <v-container fluid class="mt-3">
        <v-layout wrap row>
            <v-flex xs12 md12>
                <p class="google-font mt-2" style="color:#37474F;font-size:150%">Featured Sessions & Workshop from:</p>
            </v-flex>
            
            <v-flex xs12 md10 lg10 class="mt-3">
                <v-expansion-panel >
                    <v-expansion-panel-content
                    v-for="item in contents"
                    :key="item.title"
                    class="elevation-0"
                    
                    >
                        <div class="google-font" style="font-size:130%" slot="header">{{item.title}}</div>
                        <v-card>
                            <v-card-text class="grey lighten-3 google-font" style="font-size:120%">{{item.description}}</v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex>
           

           
        </v-layout>
    </v-container>
</template>

<script>
import data from '@/assets/data/features-content.json'
export default {
    data() {
        return {
            contents: data
        }
    },
    
}
</script>



