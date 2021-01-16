<template>
  <v-app>
    <v-app-bar app color="primary" dark>
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

      <v-toolbar-title> WORKO </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn dark color="primary" depressed to="/">
          <v-icon>mdi-account-outline</v-icon>
          Feed
        </v-btn>
        <v-btn dark color="primary" depressed to="/atividades">
          <v-icon>mdi-checkbox-marked-outline</v-icon>
          Atividades
        </v-btn>
        <v-btn dark color="primary" depressed to="/perfil">
          <v-icon>mdi-account-outline</v-icon>
          Perfil
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>
