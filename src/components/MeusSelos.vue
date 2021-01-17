<template>
  <v-card outlined class="ma-2 pa-2">
    <v-card-title class="primary--text pa-0 font-weight-bold body-2">Seus Selos: </v-card-title>
    <v-row justify="center" align="center">
      <v-col cols="2"> <v-img :src="s01Active" max-width="40" /></v-col>
      <v-col cols="2"> <v-img :src="s02Active" max-width="40" /></v-col>
      <v-col cols="2"> <v-img :src="s03Active" max-width="40" /></v-col>
      <v-col cols="2"> <v-img :src="s04Disabled" max-width="40" /></v-col>
      <v-col cols="2"> <v-img :src="s05Disabled" max-width="40" /></v-col>
      <v-col cols="2"> <v-img :src="s06Disabled" max-width="40" /></v-col>
    </v-row>
  </v-card>
</template>

<script>
import s01Active from '@/database/images/selos/01-active.png';
import s02Active from '@/database/images/selos/02-active.png';
import s03Active from '@/database/images/selos/03-active.png';
import s02Disabled from '@/database/images/selos/02-disabled.png';
import s03Disabled from '@/database/images/selos/03-disabled.png';
import s04Disabled from '@/database/images/selos/04-disabled.png';
import s05Disabled from '@/database/images/selos/05-disabled.png';
import s06Disabled from '@/database/images/selos/06-disabled.png';

export default {
  data: () => ({
    s01Active,
    s02Active,
    s03Active,
    s02Disabled,
    s03Disabled,
    s04Disabled,
    s05Disabled,
    s06Disabled,
  }),
};
</script>

<style></style>
