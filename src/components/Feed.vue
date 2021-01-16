<template>
  <v-list three-line>
    <template v-for="(post, index) in feed">
      <v-list-item :key="post.titulo">
        <v-list-item-content>
          <v-list-item-title v-html="post.titulo"></v-list-item-title>
          <v-list-item-subtitle v-html="post.descricao"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item-action :key="post.likes">
        <v-list-item-action-text v-text="post.likes"></v-list-item-action-text>
        <v-btn icon>
          <v-icon> mdi-thumb-up-outline </v-icon>
        </v-btn>
      </v-list-item-action>
      <v-list-item-action :key="post.comentarios">
        <v-list-item-action-text v-text="post.comentarios"></v-list-item-action-text>
        <v-btn icon>
          <v-icon>mdi-comment-text-outline</v-icon>
        </v-btn>
      </v-list-item-action>

      <v-divider :key="index"></v-divider>
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
