import { IProjectList } from './interfaces';
import starWarsCover from '../assets/star-wars.png';
import pixelsArtsCover from '../assets/pixels-arts.png';
import triviaCover from '../assets/trivia.png';
import contactsFtCover from '../assets/contacts-ft.png';
import contactsBkCover from '../assets/contacts-bk.png';
import storeManagerCover from '../assets/store-manager.png';
import trybesmithCover from '../assets/trybesmith.png';

enum Type {
  Front = 'Front-End',
  Back = 'Back-end',
  Full = 'Full-Stack',
}

enum TechStack {
  js = 'JavaScript',
  ts = 'TypeScript',
  react = 'React',
  redux = 'Redux',
  context = 'ContextAPI',
  htmlCss = 'HTML/CSS',
  materialUi = 'Material-UI',
  bootstrap = 'Bootstrap',
  node = 'Node.js',
  mysql = 'MySQL',
  swagger = 'Swagger',
  jwt = 'JWT',
  express = 'Express',
  mocha = 'Mocha',
  chai = 'Chai',
  sequelize = 'Sequelize',
}

const projectsData: IProjectList = {
  toDisplay: [
    {
      title: 'Star Wars Planets Search',
      description:
        'Desenvolvimento de uma aplicação React visando o consumo de uma API para consulta, filtragem e ordenação de planetas do universo de Star Wars',
      type: Type.Front,
      tech: [
        TechStack.js,
        TechStack.react,
        TechStack.context,
        TechStack.materialUi,
      ],
      cover: starWarsCover,
      deploy: 'https://star-wars-planets-search.herokuapp.com/',
      gitHub: 'https://github.com/1lucascq/StarWarsPlanets',
    },
    {
      title: 'Contacts List (Front)',
      description:
        'Aplicação React que recebia dados através de uma API para exibição de uma lista de contatos, possibilitando também a adição, edição e deleção de dados. Estilização desenvolvida através do conceito Mobile-First',
      type: Type.Front,
      tech: [
        TechStack.js,
        TechStack.react,
        TechStack.context,
        TechStack.materialUi,
      ],
      cover: contactsFtCover,
      deploy: 'https://contacts-ft.netlify.app/',
      gitHub: 'https://github.com/1lucascq/Contacts-ft',
    },

    {
      title: 'Contacts List (Back)',
      description:
        'RESTful API com as funcionalidades CRUD básicas que se conecta com um banco de dados MySQL para fornecer uma lista de contatos.',
      type: Type.Back,
      tech: [
        TechStack.ts,
        TechStack.node,
        TechStack.mysql,
        TechStack.express,
        TechStack.swagger,
      ],
      cover: contactsBkCover,
      deploy: 'https://contacts-bk.herokuapp.com/api-docs/',
      gitHub: 'https://github.com/1lucascq/Contacts-bk',
    },

    {
      title: 'TrybeSmith',
      description:
        'Criação de uma RESTful API com POO que realizava o gerenciamento de dados de uma loja de armas medievais.',
      type: Type.Back,
      tech: [
        TechStack.ts,
        TechStack.node,
        TechStack.mysql,
        TechStack.express,
        TechStack.jwt,
      ],
      cover: trybesmithCover,
      deploy: 'https://github.com/1lucascq/TrybeSmith',
      gitHub: 'https://github.com/1lucascq/TrybeSmith',
    },

    {
      title: 'Store Manager',
      description:
        'Criação de uma RESTful API e testes do seu funcionamento que realizava o gerenciamento de dados de uma loja.',
      type: Type.Back,
      tech: [
        TechStack.ts,
        TechStack.node,
        TechStack.mysql,
        TechStack.express,
        TechStack.chai,
        TechStack.mocha,
      ],
      cover: storeManagerCover,
      deploy: 'https://github.com/1lucascq/StoreManager',
      gitHub: 'https://github.com/1lucascq/StoreManager',
    },
  ],
  toStore: [
    {
      title: 'Pixels Arts',
      description:
        'Aplicação de manejo do DOM, JavaScript e CSS para criação de desenhos em um quadro de pixels.',
      type: Type.Front,
      tech: [
        TechStack.js,
        TechStack.htmlCss,
      ],
      cover: pixelsArtsCover,
      deploy: 'https://pixels-arts.herokuapp.com/',
      gitHub: 'https://github.com/1lucascq/PixelsArt',
    },
    {
      title: 'Trivia',
      description:
        'Aplicação desenvolvida em grupo seguindo metodologias ágeis e visava implementar um jogo de Trivia com manejo do estado global pelo Redux.',
      type: Type.Front,
      tech: [
        TechStack.js,
        TechStack.react,
        TechStack.redux,
        TechStack.bootstrap,
      ],
      cover: triviaCover,
      deploy: 'https://redux-trivia.netlify.app/',
      gitHub: 'https://github.com/1lucascq/TriviaReactRedux',
    },

  ],
};
export default projectsData;
