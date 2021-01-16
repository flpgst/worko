<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="drawer = true" dark />

      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div> -->
      <v-toolbar-title class="white--text font-weight-bold"> WORKO </v-toolbar-title>

      <v-navigation-drawer v-model="drawer" absolute app>
        <v-list nav dense>
          <v-list-item-group v-model="group">
            <v-list-item v-for="{ nome, icon, path } in menus" :to="path" :key="nome">
              <v-list-item-icon>
                <v-icon>{{ icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ nome }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import menus from '@/database/menus';

export default {
  name: 'App',

  components: {},

  data: () => ({
    drawer: false,
    group: null,
    menus,
  }),
};
</script>
