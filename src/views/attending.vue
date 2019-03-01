<template>
    <v-slide-y-reverse-transition>
        <v-container fluid v-show="show" class="mt-3" :style="{'background-image':'url('+require('@/assets/img/svg/a.svg')+')'}" style="background-size:3000px">
            <v-layout wrap align-center justify-center row>
                <v-flex xs12 md10 lg10>
                    <attnedingHome/>
                    <attnedingExplore/>
                    <faq/>  
                </v-flex>
            </v-layout>
        </v-container>
    </v-slide-y-reverse-transition>
</template>

<script>

import faq from '@/components/faq'
import attnedingHome from '@/components/attending/attendingHome'
import attnedingExplore from '@/components/attending/attendingExplore'

export default {
    components:{
        faq,
        attnedingHome,
        attnedingExplore,
    },
    data() {
        return {
            show:false,
            imgPath:{
                src: require('@/assets/img/bg.jpg')
            }
        }
    },
    created(){
        this.show = true
    }
}
</script>
