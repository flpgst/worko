<template>
  <v-row class="ma-0">
    <meus-selos></meus-selos>
    <v-card>
      <v-row>
        <v-col cols="2">
          <v-img src=""></v-img>
        </v-col>
        <v-col cols="auto">
          <v-card-title> </v-card-title>
          <v-card-text></v-card-text>
          <v-progress-linear color="secondary" rounded value="100"></v-progress-linear>
        </v-col>
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
import MeusSelos from '../components/MeusSelos.vue';

export default {
  data: () => ({}),
  components: {
    MeusSelos,
  },
};
</script>

<style></style>
