<template>
<nav>
  <!-- fixed
      stateless -->
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      :mini-variant.sync="mini"
      app
    >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://www.womentechmakers.com/static/images/wtm-icon.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>WomenTechmakers</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

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
      
      <!-- blue darken-3 -->
    </v-navigation-drawer>


    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="white"
      app
      fixed
    >
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <!-- hidden-sm-and-down  -->
      <v-toolbar-title class="">
        
        <span class="google-font">IWD19 Jalandhar</span>
      </v-toolbar-title>
     
      <v-spacer></v-spacer>
      <!-- <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn> -->
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <!-- <v-btn icon large>
        <v-avatar size="32px" tile>
          <img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          >
        </v-avatar>
      </v-btn> -->
    </v-toolbar>
    </nav>
</template>

<script>
  export default {
    data: () => ({
        drawer: true,
        items: [
            { title: 'Home', icon: 'dashboard', route:"/home" },
            { title: 'Attending', icon: 'rounded_corner', route:"/attending" },
            { title: 'Sessions', icon: 'toc', route:"/sessions" },
            { title: 'Speakers', icon: 'group', route:"/speakers" }
        ],
        mini: true,
        right: null
    }),
    props: {
      source: String
    }
  }
</script>