<template>
  <v-card flat color="grey lighten-3">
    <v-row justify="space-around" align="center" class="mb-3">
      <v-col cols="auto">
        <v-img :src="selo01Active" width="100" />
      </v-col>
      <v-col cols="auto">
        <v-img :src="selo02Disabled" width="100" />
      </v-col>
    </v-row>

    <v-row justify="space-around" align="center" class="mb-3">
      <v-col cols="auto">
        <v-img :src="selo03Disabled" width="100" />
      </v-col>
      <v-col cols="auto">
        <v-img :src="selo04Disabled" width="100" />
      </v-col>
    </v-row>

    <v-row justify="space-around" align="center" class="mb-3">
      <v-col cols="auto">
        <v-img :src="selo05Disabled" width="100" />
      </v-col>
      <v-col cols="auto">
        <v-img :src="selo06Disabled" width="100" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import selo01Active from '@/database/images/selos/01-active.png';
import selo02Disabled from '@/database/images/selos/02-disabled.png';
import selo03Disabled from '@/database/images/selos/03-disabled.png';
import selo04Disabled from '@/database/images/selos/04-disabled.png';
import selo05Disabled from '@/database/images/selos/05-disabled.png';
import selo06Disabled from '@/database/images/selos/06-disabled.png';

export default {
  name: 'selos-usuario',
  data: () => ({
    selo01Active,
    selo02Disabled,
    selo03Disabled,
    selo04Disabled,
    selo05Disabled,
    selo06Disabled,
  }),
};
</script>
