<template>
  <v-row class="ma-0" justify="center">
    <meus-selos></meus-selos>
    <v-card
      v-for="({ titulo, descricao, imagem, nivel, conquistas }, index) in atividades"
      :key="index"
      flat
      color="grey lighten-4"
      class="px-3 my-2"
    >
      <v-row>
        <v-col cols="auto" align-self="center">
          <v-img :src="imagem" max-width="55"></v-img>
        </v-col>
        <v-col align-self="center">
          <v-card-title class="pb-0 body-1 font-weight-medium">
            {{ titulo }}
            <v-icon small class="mx-3">mdi-help-circle-outline</v-icon>
          </v-card-title>
          <v-card-text class="py-0">{{ descricao }}</v-card-text>

          <v-card-text
            v-for="conquista in conquistas"
            :key="conquista.titulo"
            class="pt-1 pb-2 caption"
          >
            <v-icon small class="mx-1">{{
              conquista.completo ? 'mdi-checkbox-marked-outline' : 'mdi-checkbox-blank-outline'
            }}</v-icon>
            <span>{{ conquista.titulo }}</span>
          </v-card-text>
          <v-progress-linear class="mb-2" height="20" color="secondary" rounded :value="nivel">
            <template v-slot:default="{ value }">
              <span class="caption font-weight-medium">{{ value }}%</span>
            </template>
          </v-progress-linear>
          <v-row justify="end" class="ma-0 pb-2">
            <v-btn small rounded depressed color="accent">
              <v-icon small>mdi-pencil</v-icon>
              <span class="caption">Atualizar Progresso</span>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-row justify="center" class="mt-5 mb-2">
        <span class="caption">Finalize essas Atividades para desbloquear novas</span>
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
import MeusSelos from '../components/MeusSelos.vue';
import atividades from '../database/atividades';

export default {
  data: () => ({
    atividades,
  }),
  components: {
    MeusSelos,
  },
};
</script>

<style></style>
