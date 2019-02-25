
<template>
    <v-slide-y-reverse-transition>
    <v-container fluid class="mt-3" v-show="show">
        <v-layout wrap align-center justify-center row fill-height class="pa-3">
            <v-flex xs12 md10 lg10>
                <span class="pa-2 google-font" style="border-radius:8px;background-color:#FFF3E0;color:#E65100;font-size:150%">Registration</span>
                <p class="google-font mt-2" style="color:#37474F;font-size:200%">Our lineup of big thinkers and even bigger doers</p>
                <p class="mt-0 google-font subheading">Get ready to be inspired by speakers who are building a cloud full of opportunity with our partners and customers. Stay tuned as we add more dynamic speakers to our lineup..</p>
            </v-flex>

            <v-flex xs12 md10 lg10>
                <v-stepper v-model="e6" vertical class="elevation-0">
                    <v-stepper-step :complete="e6 > 1" step="1" class="google-font">
                        Sign In
                        <small>Need to sign in with a Google account or Gmail address of your choosing.</small>
                    </v-stepper-step>

                    <v-stepper-content step="1">
                        <v-card class="mb-5 elevation-0">
                            <p class="google-font" style="font-size:140%">You need to sign in with a Google account or a Gmail address to register for this event.</p>

                            <v-btn color="info" class="ml-0">Sign In</v-btn>

                        </v-card>
                        <!-- <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn> -->
                    </v-stepper-content>

                    <v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this app</v-stepper-step>

                    <v-stepper-content step="2">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>

                    <v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad unit</v-stepper-step>

                    <v-stepper-content step="3">
                    <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                    <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
                    <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>

                    <v-stepper-step step="4">View setup instructions</v-stepper-step>
                    <v-stepper-content step="4">
                    <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                    <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
                    <v-btn flat>Cancel</v-btn>
                    </v-stepper-content>
                </v-stepper>
            </v-flex>

           
           
        </v-layout>
    </v-container>
    </v-slide-y-reverse-transition>
</template>

<script>
export default {
    components:{
    },
    data() {
        return {
            show:false,
            e6: 1
        }
    },
    mounted(){
        this.show = true
    },
    methods:{
        
    }
}
</script>
