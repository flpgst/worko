import s01Active from '@/database/images/selos/01-active.png';
import s02Active from '@/database/images/selos/02-active.png';
import s03Active from '@/database/images/selos/03-active.png';

export default [
  {
    titulo: 'Start na Carreira',
    descrição: 'Assistia 2 palestras sobre desenvolvimento profissional',
    nivel: 100,
    imagem: s01Active,
    conquistas: [
      {
        titulo: 'Assistiu 2 palestras sobre desenvolvimento profissional',
        completo: true,
      },
    ],
  },
  {
    titulo: 'Sedento por Conhecimento',
    descricao: 'Leia  1 livro e faça 3 cursos para ganhar o Selo de Sedento por Conhecimento',
    imagem: s02Active,
    nivel: '20',
    conquistas: [
      {
        titulo: 'Leu 1 livro e postou uma Review',
        completo: true,
      },
      {
        titulo: 'Fez 3 cursos e anexou os certificados',
        completo: false,
      },
    ],
  },
  {
    titulo: 'Estudante dedicado',
    descricao: 'Faça 5 cursos e anexou os certificados',
    imagem: s03Active,
    nivel: '0',
    conquistas: [
      {
        titulo: 'Fez 5 cursos e anexou os certificados',
        completo: false,
      },
    ],
  },
];
