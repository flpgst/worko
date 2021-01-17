<template>
  <v-list v-if="post">
    <v-list-item class="my-3">
      <v-card flat color="grey lighten-4" class="px-3 my-2">
        <v-list-item-content>
          <v-row>
            <v-col class="font-weight-bold text-justify">
              {{ getPost().descricao }}
            </v-col>
          </v-row>
          <template v-for="({ texto, resposta, autor }, index) in post">
            <v-list-item-subtitle class="pt-1" :key="index">
              <strong>{{ autor }}</strong> - {{ texto }}
            </v-list-item-subtitle>
            <v-list-item-subtitle :key="autor">
              <strong class="pl-3">{{ getPost().autor }}</strong> -
              {{ resposta }}
            </v-list-item-subtitle>
          </template>
        </v-list-item-content>
        <v-text-field label="Faça seu comentário" append-outer-icon="mdi-send"></v-text-field>
      </v-card>
    </v-list-item>
  </v-list>
</template>

<script>
import comentarios from '../database/comentarios';
import feed from '../database/feed';

export default {
  data() {
    return {
      comentarios,
      feed,
      post: comentarios.find((c) => c.id === Number(this.postId)).comentarios,
    };
  },
  props: {
    postId: String,
  },
  methods: {
    getPost() {
      return this.feed.find((post) => post.id === Number(this.postId));
    },
    log(id) {
      console.log('idLog :>> ', id);
    },
  },
};
</script>

<style></style>
