import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#037f8c',
        'primary-variant': '#038c8c',
        accent: '#f27405',
        'accent-variant': '#f28705',
        secondary: '#f2c335',
      },
    },
  },
};

export default new Vuetify(opts);
