<template>
  <div id="nav">
    <v-list>
      <v-list-item-group color="primary">
        <v-list-item
            v-for="(item, i) in nav_items"
            :key="i"
            :to=item.url
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>

          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

  </div>
</template>

<script>
  export default {
    name: "Navigation",
    data: () => ({
      nav_items: [
        {title: 'Главная', icon: 'mdi-home', url: '/'},
        {title: 'Управление', icon: 'mdi-pipe-wrench', url: '/manage'},
        {title: 'Вход', icon: 'mdi-login', url: '/login'},
        {title: 'О сайте', icon: 'mdi-help-box', url: '/about'}
      ]
    }),
  }
</script>