<template>
  <v-card flat color="grey lighten-4">
    <v-row>
      <v-col>
        <v-list color="grey lighten-4">
          <v-list-item
            v-for="{ id, titulo, descricao, data, imagem, autor, comentarios, likes } in posts"
            :key="id"
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
                      <v-icon left>mdi-thumb-up-outline</v-icon>
                      {{ likes }}
                    </v-btn>
                  </v-col>
                  <v-col cols="2">
                    <v-btn icon>
                      <v-icon left>mdi-comment-text-outline</v-icon>
                      {{ comentarios }}
                    </v-btn>
                  </v-col>
                  <v-col cols="2">
                    <v-btn icon>
                      <v-icon left>mdi-bookmark-multiple-outline</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-list-item-content>

              <v-divider class="primary" />
            </v-card>
          </v-list-item>
        </v-list>

        <v-row justify="center">
          <v-col cols="auto" v-text="'Não há mais posts para exibir...'" />
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import feed from '../database/feed';

export default {
  name: 'posts-usuario',
  data: () => ({
    posts: feed.filter((post) => post.autorId === 1),
  }),
};
</script>
