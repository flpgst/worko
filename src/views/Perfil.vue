<template>
  <v-container>
    <v-card rounded flat outlined class="py-2 px-3 border-primary">
      <v-row align="center">
        <v-col cols="4" class="pr-0">
          <v-avatar size="90">
            <v-img :src="usuario.avatar" />
          </v-avatar>
        </v-col>

        <v-col class="pl-0 ml-n2 d-flex flex-wrap">
          <v-col cols="12" v-text="usuario.nome" class="primary--text font-weight-bold pb-0" />
          <v-col cols="auto" v-text="`${usuario.idade} anos |`" class="py-0 pr-1 caption" />
          <v-col v-text="`Telefone: ${usuario.telefone}`" class="py-0 pl-0 caption" />
          <v-col v-text="`Email: ${usuario.email}`" class="caption py-0" />
          <v-col>
            <v-chip
              v-for="habilidade in usuario.habilidades"
              :key="habilidade"
              v-text="habilidade"
              x-small
              color="primary"
              class="mr-1"
            />
          </v-col>
        </v-col>
      </v-row>
    </v-card>

    <v-row no-gutters justify="center" class="my-3">
      <v-col cols="4">
        <v-btn
          block
          small
          tile
          depressed
          :color="tab === 'curriculo' ? 'primary' : null"
          v-text="'Currículo'"
          @click="tab = 'curriculo'"
        />
      </v-col>
      <v-col cols="4">
        <v-btn
          block
          small
          tile
          depressed
          :color="tab === 'selos' ? 'primary' : null"
          v-text="'Selos'"
          @click="tab = 'selos'"
        />
      </v-col>
      <v-col cols="4">
        <v-btn
          block
          small
          tile
          depressed
          :color="tab === 'posts' ? 'primary' : null"
          v-text="'Posts'"
          @click="tab = 'posts'"
        />
      </v-col>
    </v-row>

    <Curriculo v-if="tab === 'curriculo'" :usuario="usuario" />
  </v-container>
</template>

<script>
import Curriculo from '@/components/Curriculo.vue';

import usuarios from '@/database/usuarios/usuarios';

export default {
  name: 'perfil',
  components: {
    Curriculo,
  },
  data: () => ({
    usuario: usuarios[0],
    tab: 'curriculo',
  }),
};
</script>

<style scoped>
.border-primary {
  border-color: #037f8c; /* primary */
}
</style>
