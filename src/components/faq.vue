<template>
    <v-container fluid>
        <v-layout wrap row class="pa-0">
            <v-flex xs12 md12>
                <h2 class="google-font mt-2" >Frequently Asked Questions</h2>
            </v-flex>
            
            <v-flex xs12 md10 lg10 class="mt-3">
                <v-expansion-panel>
                    <v-expansion-panel-content
                    v-for="item in contents"
                    :key="item.question"
                    >
                        <div class="google-font" style="font-size:120%" slot="header">{{item.question}}</div>
                        <v-card>
                            <v-card-text class="grey lighten-3 google-font" style="font-size:110%">{{item.ans}}</v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex>
           

           
        </v-layout>
    </v-container>
</template>

<script>
import data from '@/assets/data/faq.json'
export default {
    data() {
        return {
            contents: data
        }
    },
    
}
</script>



