<template>
  <v-list>
    <v-list-item
      v-for="{
        id,
        titulo,
        autor,
        data,
        imagem,
        descricao,
        atribuicoes,
        qualificacoes,
        habilidadesDesenvolvidas,
      } in vagas"
      :key="id"
      class="my-3"
    >
      <v-card flat color="grey lighten-4" class="px-3 my-2">
        <v-list-item-content>
          <v-list-item-title v-text="titulo" class="font-weight-bold" />

          <v-row class="my-0 mt-2">
            <v-col cols="12" class="caption py-0">
              Postado por:
              <strong>{{ autor }} </strong>,
              {{ data }}
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="auto">
              <v-img :src="imagem" width="380" alt="Grupo Boticário" contain />
            </v-col>
          </v-row>

          <v-row justify="end">
            <v-col cols="auto">
              <v-btn icon><v-icon>mdi-bookmark-multiple</v-icon></v-btn>
              <v-btn rounded depressed color="accent">Candidatar-se</v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col v-text="descricao" class="text-justify" />
          </v-row>

          <v-row class="mt-1">
            <v-col cols="12" v-text="'Responsabilidades e atribuições'" class="font-weight-bold" />
            <v-col class="py-0">
              <v-col
                v-for="atribuicao in atribuicoes"
                cols="12"
                class="pa-0 pb-2"
                :key="atribuicao"
                v-text="`- ${atribuicao}`"
              />
            </v-col>
          </v-row>

          <v-row class="mt-1">
            <v-col cols="12" v-text="'Requisitos e qualificações'" class="font-weight-bold" />
            <v-col class="pa-0 pl-5">
              <v-col
                v-for="qualificacao in qualificacoes"
                cols="12"
                class="pa-0 pb-2"
                :key="qualificacao"
                v-text="`- ${qualificacao}`"
              />
            </v-col>
          </v-row>

          <v-row class="mt-1" align="center">
            <v-col cols="auto" v-text="'Habilidades desenvolvidas: '" class="font-weight-bold" />
            <v-chip
              v-for="habilidade in habilidadesDesenvolvidas"
              :key="habilidade"
              color="light-blue"
            >
              {{ habilidade }}
            </v-chip>
          </v-row>
        </v-list-item-content>
      </v-card>
    </v-list-item>
  </v-list>
</template>

<script>
import vagas from '@/database/vagas';

export default {
  name: 'vagas',
  data: () => ({
    vagas,
  }),
  methods: {
    getImageLink(name) {
      return `./../database/images/vagas/${name}.png`;
    },
  },
};
</script>
