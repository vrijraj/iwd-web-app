<template>
  <v-app class="white">
    <navbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <bottomNavbar/>
    <cofooter/>
  </v-app>
</template>

<script>
import navbar from './components/navbar'
import bottomNavbar from './components/bottom-footer'
import cofooter from './components/footer'

export default {
  name: 'App',
  components: {
    navbar,
    bottomNavbar,
    cofooter
  },
  data () {
    return {
      //
    }
  }
}
</script>
