<template>
  <v-app class="white">

    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
      disable-resize-watcher
      disable-route-watcher
      class="hidden-sm-and-up"
    >
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile
            v-for="item in items"
            :key="item.title"
            router :to="item.route"
        >   
            <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
      </v-list>  
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="white"
      app
      scroll-off-screen
      fixed
      height="55px"
    >
      <v-toolbar-side-icon class="hidden-sm-and-up" @click.stop="drawer =!drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="ml-0 pl-1 mr-1">   
        <span>
          
        </span>
        <span class="google-font">IWD19 Jalandhar</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mx-1 hidden-sm-and-down google-font" 
        flat v-for="(item, i) in items" 
        
        :key="i" 
        router  
        style="text-transform: capitalize;"    
        :to="item.route">
        <!-- <v-icon small left>{{item.icon}}</v-icon> -->
        {{item.title}}
      </v-btn>
      <!-- <v-btn
        v-for="(item, i) in items"
        :key="i"
        :to="item.route"
        class="ml-0 hidden-sm-and-down"
        flat
        @click="onClick($event, item)"
      >
        {{ item.itile }}
      </v-btn> -->

       <!-- <v-toolbar-items class="hidden-sm-and-down google-font ml-3">
        <v-btn flat route to="/home">Home</v-btn>
        <v-btn flat route to="/attending">Attending</v-btn>
        <v-btn flat route to="/sessions">Sessions</v-btn>
        <v-btn flat route to="/speakers">Speakers</v-btn>
      </v-toolbar-items> -->
    </v-toolbar>

    <v-content transition="slide-y-transition">
      <router-view></router-view>
    </v-content>

    <bottomNavbar/>
    <cofooter/>
  </v-app>
</template>

<script>

import bottomNavbar from './components/bottom-footer'
import cofooter from './components/footer'

export default {
  name: 'App',
  components: {
    bottomNavbar,
    cofooter,
  },
  data: () => ({
      drawer: false,
      items: [
            { title: 'Home', icon: 'dashboard', route:"/home" },
            { title: 'Attending', icon: 'rounded_corner', route:"/attending" },
            { title: 'Agenda', icon: 'toc', route:"/agenda" },
            { title: 'Speakers', icon: 'group', route:"/speakers" }
        ],
    }),
    methods:{
      // onClick (e, item) {
      //   e.stopPropagation()
      //   if (item.route || !item.href) return
      //   this.$vuetify.goTo(item.route)
      // }
    }
    
}
</script>
