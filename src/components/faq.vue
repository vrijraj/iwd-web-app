<template>
    <v-container fluid>
        <v-layout wrap class="pa-0" align-center justify-center row fill-height>
            <v-flex xs12>
                <p class="google-font mt-2 mb-0" style="font-size:150%">Frequently Asked Questions</p> 
            </v-flex>
            
            <v-flex xs12 class="mt-3">
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



