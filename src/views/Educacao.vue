<template>
  <v-row class="ma-0">
    <v-card
      v-for="({ titulo, descricao, imagem, data, tags }, index) in educacao"
      :key="index"
      flat
      color="grey lighten-4"
      class="px-3 my-2 py-2"
    >
      <v-row>
        <v-card-title class="body-1 font-weight-medium">
          {{ titulo }}
        </v-card-title>
        <v-card-subtitle class="caption"> Data do post: {{ data }} </v-card-subtitle>
      </v-row>
      <v-row>
        <v-col cols="12" align-self="center">
          <v-col align-self="center" v-if="imagem">
            <v-img :src="imagem" max-width="550"></v-img>
          </v-col>
          <v-card-text class="py-0">{{ descricao }}</v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <span class="caption"> TAGS:</span>
          <v-chip
            v-for="(tag, index) in tags"
            :key="index"
            color="secondary"
            class="black--text ml-2 mb-2"
            small
          >
            {{ tag }}
          </v-chip>
        </v-col>
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
import educacao from '../database/educacao';

export default {
  data: () => ({
    educacao,
  }),
};
</script>

<style></style>
