<template>
  <v-container>
    <v-row justify="center">
      <v-col class="d-flex align-start justify-center">
        <v-btn
          tile
          depressed
          small
          min-width="200"
          :class="feed ? 'primary--text' : null"
          :color="!feed ? 'primary' : null"
          @click="feed = false"
          >VAGAS</v-btn
        >
        <v-btn
          tile
          depressed
          small
          :class="!feed ? 'primary--text' : null"
          :color="feed ? 'primary' : null"
          @click="feed = true"
          >POST DA COMUNIDADES</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    feed: true,
  }),
};
</script>
