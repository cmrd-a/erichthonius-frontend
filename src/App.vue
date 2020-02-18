<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
          v-model="drawer"
          app
          clipped
          mobile-break-point=""
      >
        <Navigation/>
      </v-navigation-drawer>

      <v-app-bar
          app
          clipped-left
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>

      <v-content>
        <v-container
            fluid
            fill-height
        >
          <v-layout>
            <v-flex>
              <router-view/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <!--      <v-footer app>-->
      <!--        <v-layout-->
      <!--            align-center-->
      <!--            justify-center-->
      <!--        >-->
      <!--          <span>&copy; 2020</span>-->
      <!--        </v-layout>-->
      <!--      </v-footer>-->
    </v-app>
  </div>
</template>

<script>
  import Navigation from "./components/Navigation";
  export default {
    name: 'App',
    components: {
      Navigation
    },
    data: () => ({
      drawer: null,
      item: 1,
      items: [
        {text: 'Real-Time', icon: 'mdi-clock'},
        {text: 'Audience', icon: 'mdi-account'},
        {text: 'Conversions', icon: 'mdi-flag'},
      ],
    }),
  };
</script>