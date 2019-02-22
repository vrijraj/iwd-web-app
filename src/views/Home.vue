<template>
  <v-slide-y-reverse-transition>
    <v-container fluid v-show="show">
      <v-layout wrap align-center justify-center row>
        <v-flex xs12 md10 lg10>
          <startscreen/>
          <stats/>
          <homespeaker/>
          <featureListing/>
          <partners/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-slide-y-reverse-transition>
</template>

<script>
  import startscreen from '../components/home/startscreen'
  import stats from '../components/home/stats'
  import homespeaker from '../components/home/home-speakers'
  import featureListing from '../components/home/features-content'
  import partners from '../components/partners'


  export default {
    components: {
      startscreen,
      stats,
      homespeaker,
      partners,
      featureListing
    },
    data(){
      return{
        show:false
      }
    },
    created(){
      this.show = true
    }
  }
</script>
