<template>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="white"
      app
      scroll-off-screen
      fixed
    >
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="showDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="ml-0 pl-3">   
        <span class="google-font">IWD19 Jalandhar</span>
      </v-toolbar-title>

       <v-toolbar-items class="hidden-sm-and-down google-font ml-3">
        <v-btn flat route to="/home">Home</v-btn>
        <v-btn flat route to="/attending">Attending</v-btn>
        <v-btn flat route to="/sessions">Sessions</v-btn>
        <v-btn flat route to="/speakers">Speakers</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
  export default {
    data: () => ({
      // drawer: this.$store.state.drawer,
      items: [
            { title: 'Home', icon: 'dashboard', route:"/home" },
            { title: 'Attending', icon: 'rounded_corner', route:"/attending" },
            { title: 'Sessions', icon: 'toc', route:"/sessions" },
            { title: 'Speakers', icon: 'group', route:"/speakers" }
        ],
    }),
    methods:{
      showDrawer(){
        this.$store.commit('changeDrawerState')
        // console.log(this.$store.state.vname)
        return this.$store.state.drawer
      }
    },
  }
</script>