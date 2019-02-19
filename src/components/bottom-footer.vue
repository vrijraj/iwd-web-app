<template>
  <v-card color="white" height="60px" class="white hidden-sm-and-up" flat>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      app
      dark
      color="indigo"
      class="elevation-2"
      
    >
      <!-- <v-btn
        color="white"
        flat
        v-for="item in items"
        :key="item.route"
        value="item.title"
        router
        :to="item.route"
      >
        <span>{{item.title}}</span>
        <v-icon>{{item.icon}}</v-icon>
      </v-btn> -->

      <v-btn
        color="white"
        flat
        value="Home"
        router
        to="/home"
      >
        <span>Home</span>
        <v-icon>dashboard</v-icon>
      </v-btn>

      <v-btn
        color="white"
        flat
        value="Attending"
        router
        to="/attending"
      >
        <span>Attending</span>
        <v-icon>rounded_corner</v-icon>
      </v-btn>

      <v-btn
        color="white"
        flat
        value="Sessions"
        router
        to="/sessions"
      >
        <span>Sessions</span>
        <v-icon>toc</v-icon>
      </v-btn>

      <v-btn
        color="white"
        flat
        value="Speakers"
        router
        to="/speakers"
      >
        <span>Speakers</span>
        <v-icon>group</v-icon>
      </v-btn>

    </v-bottom-nav>
  </v-card>
</template>


<script>
  export default {
    data () {
      return {
        bottomNav: 'recent',
        items: [
            { title: 'Home', icon: 'dashboard', route:"/home" },
            { title: 'Attending', icon: 'rounded_corner', route:"/attending" },
            { title: 'Sessions', icon: 'toc', route:"/sessions" },
            { title: 'Speakers', icon: 'group', route:"/speakers" }
        ],
      }
    }
  }
</script>