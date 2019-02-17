<template>
  <v-container>
    <startscreen/>
    <stats/>
    <homespeaker/>
    <featureListing/>
    <partners/>

  </v-container>
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
  }
</script>
