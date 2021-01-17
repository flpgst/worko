import avatarUser1 from '@/database/images/usuarios/1.png';

export default [
  {
    id: 1,
    avatar: avatarUser1,
    nome: 'Claudia Maria',
    idade: '17',
    telefone: '(11) 95482-5189',
    email: 'claudiamar@gmail.com',
    habilidades: ['Pacote Office', 'Espanhol', 'Organização', 'Adaptabilidade'],
    apresentacao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus tincidunt dignissim adipiscing dignissim nisl, feugiat. Enim volutpat velit ac sed quis. Pellentesque et, morbi mattis eget elementum est arcu non nunc. In dui pulvinar gravida a sed turpis in vulputate cras.',
    educacao: [
      {
        instituicao: 'Escola Estadual Carlos da Costa Simas',
        id: 1,
        curso: 'Ensino Médio',
        inicio: '2019',
        conclusao: '12/2021',
        concluido: false,
      },
      {
        instituicao: 'ETEC Chromatica',
        id: 2,
        curso: 'Técnico em Administração',
        inicio: '2020',
        conclusao: '06/2021',
        concluido: false,
      },
      {
        instituicao: 'CEL - Centro de Estudos de linguas',
        id: 3,
        curso: 'Espanhol',
        inicio: '2018',
        conclusao: '2020',
        concluido: true,
      },
    ],
    extracurriculares: [
      {
        curso: 'Pacote Office 365',
        instituicao: 'Udemy',
        id: 4,
        dataObtencao: '12/2020',
        competencias: [
          'Criação e edição de planilhas',
          'Apresentações em Powerpoint',
          'Criação e edição...',
        ],
      },
      {
        curso: 'Introdução à Comunicação Empresarial',
        instituicao: 'Fundação Bradesco',
        id: 5,
        dataObtencao: '11/2020',
        competencias: ['Oratória', 'Apresentações em Powerpoint', 'Criação e edição...'],
      },
    ],
  },
];
