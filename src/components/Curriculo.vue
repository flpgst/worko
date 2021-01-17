<template>
  <v-card flat color="grey lighten-4">
    <v-row v-if="usuario">
      <v-col cols="12" class="py-0">
        <v-col cols="12" v-text="'Apresentação'" class="primary--text font-weight-bold pb-0 mt-2" />
        <v-col v-text="usuario.apresentacao" class="text-justify" />
      </v-col>

      <v-col cols="12" class="px-5">
        <v-divider class="primary" />
      </v-col>

      <v-col cols="12" class="py-0">
        <v-col cols="12" v-text="'Educação'" class="primary--text font-weight-bold pb-0 mt-2" />
        <v-list color="grey lighten-4">
          <v-list-item
            v-for="{ id, instituicao, curso, inicio, conclusao, concluido } in usuario.educacao"
            class="mb-3"
            :key="id"
          >
            <v-list-item-content class="body-2">
              <v-list-item-title v-text="instituicao" class="font-weight-bold" />
              <v-row>
                <v-col cols="12" class="pb-0">
                  {{ curso }} | {{ inicio }} -
                  {{ concluido ? conclusao : `(Previsão de Conclusão: ${conclusao})` }}
                </v-col>

                <v-col
                  v-if="concluido"
                  cols="12"
                  v-text="'VER CERTIFICADO'"
                  class="py-0 caption primary--text font-weight-bold"
                />
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>

      <v-col cols="12" class="px-5">
        <v-divider class="primary" />
      </v-col>

      <v-col cols="12" class="py-0">
        <v-col
          cols="12"
          v-text="'Cursos Extracurriculares'"
          class="primary--text font-weight-bold pb-0 mt-2"
        />
        <v-list color="grey lighten-4">
          <v-list-item
            v-for="{
              id,
              instituicao,
              curso,
              dataObtencao,
              competencias,
            } in usuario.extracurriculares"
            :key="id"
            class="mb-3"
          >
            <v-list-item-content class="body-2">
              <v-list-item-title v-text="curso" class="font-weight-bold" />
              <v-row>
                <v-col cols="12" class="pb-0"> {{ instituicao }} | {{ dataObtencao }} </v-col>
                <v-col class="caption pb-0">
                  Competencias Desenvolvidas:
                  <v-chip
                    v-for="competencia in competencias"
                    :key="competencia"
                    small
                    class="mr-1 mb-1"
                    color="light-blue"
                  >
                    {{ competencia }}
                  </v-chip>
                </v-col>

                <v-col
                  cols="12"
                  v-text="'VER CERTIFICADO'"
                  class="py-0 caption primary--text font-weight-bold"
                />
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'curriculo',
  props: {
    usuario: {
      type: Object,
      default: null,
    },
  },
};
</script>
