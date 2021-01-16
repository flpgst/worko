<template>
  <v-list three-line>
    <template v-for="(post, index) in feed">
      <v-list-item :key="post.titulo">
        <v-list-item-content>
          <v-list-item-title v-html="post.titulo"></v-list-item-title>
          <v-list-item-subtitle v-html="post.descricao"></v-list-item-subtitle>

          <v-row>
            <v-col cols="2">
              <v-list-item-action>
                <v-btn icon>
                  <v-icon> mdi-thumb-up-outline </v-icon>
                  {{ post.likes }}
                </v-btn>
              </v-list-item-action>
            </v-col>
            <v-col cols="2">
              <v-list-item-action>
                <v-btn icon>
                  <v-icon>mdi-comment-text-outline</v-icon>
                  {{ post.comentarios }}
                </v-btn>
              </v-list-item-action>
            </v-col>
          </v-row>
          <v-divider :key="index"></v-divider>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import feed from '../database/feed';

export default {
  data: () => ({
    feed,
  }),
};
</script>

<style></style>
