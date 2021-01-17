<template>
  <v-form>
    <v-card flat color="grey lighten-4" class="px-3 my-2 py-2">
      <v-card-title>Dados Pessoais: </v-card-title>
      <v-text-field label="Nome Completo"> </v-text-field>
      <v-text-field label="Data de Nascimento"> </v-text-field>
      <v-text-field label="CPF"> </v-text-field>
      <v-select
        label="Você tem alguma deficiência?"
        :items="['Sim', 'Não', 'Prefiro não responder']"
      ></v-select>
      <span class="caption"
        >Na Worko valorizamos a diversidade. Para auxiliar nossos índices / métricas internas,
        gostaríamos de saber como você se declara em relação à sua raça. Não há problema se você
        preferir não declarar esta informação.</span
      >
      <v-select
        label="Raça"
        :items="[
          'Preto',
          'Branco',
          'Castanho',
          'Indígena',
          'Asiática',
          'De outros',
          'Eu prefiro não responder',
        ]"
      ></v-select>
    </v-card>
    <v-card flat color="grey lighten-4" class="px-3 my-2 py-2">
      <v-card-title>Endereço</v-card-title>
      <v-text-field label="Rua"> </v-text-field>
      <v-text-field label="Número"> </v-text-field>
      <v-text-field label="Cidade"> </v-text-field>
      <v-text-field label="Estado"> </v-text-field>
      <v-text-field label="CEP"> </v-text-field>
    </v-card>
    <v-card flat color="grey lighten-4" class="px-3 my-2 py-2">
      <v-card-title>Educação</v-card-title>
      <v-text-field label="Onde você estuda?"> </v-text-field>
      <v-select
        label="Em qual ano escolar?"
        :items="['6º ano', '7º ano', '8º ano', '9º ano', 'Faculdade']"
      >
      </v-select>
    </v-card>

    <v-card flat color="grey lighten-4" class="px-3 my-2 py-2">
      <v-card-title>Dados complementares</v-card-title>
      <v-text-field label="Nome do curso" placeholder="Ex.: Curso de Excel Básico"> </v-text-field>
      <v-text-field label="Inicio e Conclusão do Curso"> </v-text-field>
      <v-select
        label="Tipo de Formação"
        :items="['Curso Curta Duração', 'Curso Técnico', 'Ensino Regular']"
      >
      </v-select>
      <v-text-field label="Cidade"> </v-text-field>
      <v-text-field label="Estado"> </v-text-field>
      <v-text-field label="CEP"> </v-text-field>
    </v-card>
    <v-card flat color="grey lighten-4" class="px-3 my-2 py-2">
      <v-card-title>Com quais dessas características você se identifica?</v-card-title>
      <v-chip-group multiple active-class="accent--text" column>
        <v-chip
          v-for="(caracteristica, index) in caracteristicas"
          :key="index"
          :color="color"
          class="mt-2"
        >
          {{ caracteristica }}
        </v-chip>
      </v-chip-group>
    </v-card>
    <v-card flat color="grey lighten-4" class="px-3 my-2 py-2">
      <v-card-title>Selecione algumas competências</v-card-title>
      <v-chip-group multiple active-class="accent--text" column>
        <v-chip
          v-for="(competencia, index) in competencias"
          :key="index"
          :color="color"
          class="mt-2"
        >
          {{ competencia }}
        </v-chip>
      </v-chip-group>
    </v-card>
    <v-row class="ma-0">
      <v-col class="d-flex justify-end">
        <v-btn rounded depressed color="accent">Cadastrar</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    caracteristicas: [
      'Criatividade',
      'Organização',
      'Comunicação',
      'Colaboração',
      'Adaptabilidade',
      'Receptividade a feedback',
      'Negociação',
      'Flexibilidade',
      'Liderança',
      'Trabalho em equipe',
      'Exatas',
      'Linguística',
      'Falar em público',
    ],
    competencias: [
      'Pacote Office',
      'E-mail',
      'Design',
      'Pesquisa',
      'Redes sociais',
      'Resolução de problemas',
      'Brainstorming ',
      'Word',
      'Outlook',
      'Excel',
      'Powerpoint',
      'Inglês',
      'Espanhol',
      'Alemão',
      'Italiano',
      'Mandarim',
      'Programação',
      'Photoshop',
      'Falar em público',
    ],
    color: null,
  }),
  methods: {
    changeChipColor() {
      this.color = 'accent';
    },
  },
};
</script>
