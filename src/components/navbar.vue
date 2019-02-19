<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
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
      fixed
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        
        <span class="hidden-sm-and-down">Google Contacts</span>
      </v-toolbar-title>
    </v-toolbar>
    
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
            { title: 'Home', icon: 'dashboard', route:"/home" },
            { title: 'Attending', icon: 'rounded_corner', route:"/attending" },
            { title: 'Sessions', icon: 'toc', route:"/sessions" },
            { title: 'Speakers', icon: 'group', route:"/speakers" }
        ],
    }),
    props: {
      source: String
    }
  }
</script>