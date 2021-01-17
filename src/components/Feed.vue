<template>
  <div class="pt-6">
    <v-row justify="center" class="ma-0">
      <v-col cols="11" class="py-0">
        <v-textarea v-model="post" filled label="Escreva seu post aqui" shaped></v-textarea>
      </v-col>
    </v-row>

    <v-row class="mx-3 mt-n6" justify="end">
      <v-col cols="1" class="py-0">
        <v-btn icon small>
          <v-icon small>mdi-share-variant</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="1" class="py-0">
        <v-btn icon small>
          <v-icon small>mdi-image-size-select-actual</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="auto" class="py-0">
        <v-btn color="primary" rounded class="font-weight-bold" :disabled="!post" small>
          <v-icon left>mdi-plus-circle</v-icon>
          Criar Post
        </v-btn>
      </v-col>
    </v-row>
    <v-list>
      <v-list-item
        v-for="{ id, titulo, descricao, data, imagem, autor, comentarios, likes } in feed"
        :key="id"
        class="my-3"
        :to="`/comentarios/${id}`"
      >
        <v-card flat color="grey lighten-4" class="px-3 my-2">
          <v-list-item-content>
            <v-row class="font-weight-bold">
              <v-col>
                {{ titulo }}
              </v-col>
            </v-row>

            <v-row class="">
              <v-col cols="12" class="caption pt-0">
                Postado por:
                <strong>{{ autor }} </strong>,
                {{ data }}
              </v-col>
            </v-row>

            <v-row v-if="imagem">
              <v-col cols="12">
                <v-img :src="imagem" height="280" :alt="titulo" contain />
              </v-col>
            </v-row>

            <v-row>
              <v-col v-html="descricao" class="text-justify" />
            </v-row>

            <v-row>
              <v-col cols="auto">
                <v-btn icon>
                  <v-icon>mdi-thumb-up-outline</v-icon>
                  {{ likes }}
                </v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn icon>
                  <v-icon>mdi-comment-text-outline</v-icon>
                  {{ comentarios }}
                </v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn icon>
                  <v-icon>mdi-bookmark-multiple-outline</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-card>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import feed from '../database/feed';

export default {
  data: () => ({
    feed,
    post: null,
  }),
};
</script>

<style></style>
