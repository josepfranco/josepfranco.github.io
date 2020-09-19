import {ProjectDto} from '../app/services/models/dtos/ProjectDto';
import {ProjectState} from '../app/services/models/enums/ProjectState';
import {ProjectType} from '../app/services/models/enums/ProjectType';
import {TagType} from '../app/services/models/enums/TagType';

export const portfolioMockData = [
  // -- OFFICIAL JAM RELATED PROJECTS -----------------------------------------
  {
    id: 'lost-in-transmission',
    name: 'Lost in Transmission',
    type: ProjectType.Game,
    state: ProjectState.Complete,
    date: new Date(2018, 0),
    description: '2D puzzle game made for the Global Game Jam 2018',
    tags: [
      { name: 'Unity',          type: TagType.Technology },
      { name: 'C#',             type: TagType.Language },
      { name: 'Game Designer',  type: TagType.Skill },
      { name: 'Programmer',     type: TagType.Skill }
    ],
    url: 'https://gamefeeders.itch.io/lost-in-transmission',
    imageUrl: 'lostintransmission_logo.png'
  } as ProjectDto,
  {
    id: 'mo-amiga',
    name: 'Mão Amiga',
    type: ProjectType.Game,
    state: ProjectState.Complete,
    date: new Date(2018, 3),
    description: '2D clicker/simulator made for Games for Good 2018',
    tags: [
      { name: 'Unity',          type: TagType.Technology },
      { name: 'C#',             type: TagType.Language },
      { name: 'Game Designer',  type: TagType.Skill },
      { name: 'Programmer',     type: TagType.Skill }
    ],
    url: 'https://gamefeeders.itch.io/mao-amiga',
    imageUrl: 'maoamiga_logo.png'
  } as ProjectDto,
  {
    id: 'retwined',
    name: 'Retwined',
    type: ProjectType.Game,
    state: ProjectState.Complete,
    date: new Date(2019, 1),
    description: '2D platformer made for the Global Game Jam 2019',
    tags: [
      { name: 'Unity',          type: TagType.Technology },
      { name: 'C#',             type: TagType.Language },
      { name: 'HLSL',           type: TagType.Language },
      { name: 'Game Designer',  type: TagType.Skill },
      { name: 'Programmer',     type: TagType.Skill }
    ],
    url: 'https://gamefeeders.itch.io/retwined',
    imageUrl: 'retwined_logo.png'
  } as ProjectDto,
  {
    id: 'encotra-me',
    name: 'Encãotra-me',
    type: ProjectType.Game,
    state: ProjectState.Complete,
    date: new Date(2019, 3),
    description: 'Multiplayer family game made for Games for Good 2019',
    tags: [
      { name: 'Unity',          type: TagType.Technology },
      { name: 'Airconsole',     type: TagType.Technology },
      { name: 'C#',             type: TagType.Language },
      { name: 'HTML',           type: TagType.Language },
      { name: 'CSS',            type: TagType.Language },
      { name: 'Javascript',     type: TagType.Language },
      { name: 'Game Designer',  type: TagType.Skill },
      { name: 'Programmer',     type: TagType.Skill }
    ],
    url: 'https://gamefeeders.itch.io/encotra-me',
    imageUrl: 'encaotrame_logo.png'
  } as ProjectDto,
  {
    id: 'inversion',
    name: 'Inversion',
    type: ProjectType.Game,
    state: ProjectState.Complete,
    date: new Date(2020, 1),
    description: '2D platformer made for the Global Game Jam 2020',
    tags: [
      { name: 'Unity',          type: TagType.Technology },
      { name: 'C#',             type: TagType.Language },
      { name: 'HLSL',           type: TagType.Language },
      { name: 'Game Designer',  type: TagType.Skill },
      { name: 'Programmer',     type: TagType.Skill }
    ],
    url: 'https://gamefeeders.itch.io/inversion',
    imageUrl: 'inversion_logo.png'
  } as ProjectDto,
  // --------------------------------------------------------------------------

  // -- PERSONAL JAM RELATED PROJECTS -----------------------------------------
  {
    id: 'crimson-edge',
    name: 'Crimson Edge',
    type: ProjectType.Game,
    state: ProjectState.Incomplete,
    date: new Date(2018, 6),
    description: '2D multiplayer brawl fighting game',
    tags: [
      { name: 'Unity',          type: TagType.Technology },
      { name: 'C#',             type: TagType.Language },
      { name: 'HLSL',           type: TagType.Language },
      { name: 'Game Designer',  type: TagType.Skill },
      { name: 'Programmer',     type: TagType.Skill }
    ],
    url: '',
    imageUrl: 'crimsonedge_logo.png'
  } as ProjectDto,
  {
    id: 'autobreeder',
    name: 'AutoBreeder',
    type: ProjectType.Game,
    state: ProjectState.Incomplete,
    date: new Date(2019, 6),
    description: '2D auto-chess and breeding game',
    tags: [
      { name: 'Unity',          type: TagType.Technology },
      { name: 'C#',             type: TagType.Language },
      { name: 'Game Designer',  type: TagType.Skill },
      { name: 'Programmer',     type: TagType.Skill }
    ],
    url: '',
    imageUrl: 'autobreeder_logo.png'
  } as ProjectDto,
  // --------------------------------------------------------------------------

  // -- PERSONAL GAME PROJECTS ------------------------------------------------
  {
    id: 'unnamed-space-game-1',
    name: 'Unnamed Space Game #1',
    type: ProjectType.Game,
    state: ProjectState.Incomplete,
    date: new Date(2012, 2),
    description: 'First prototype for a 2D space exploration game.',
    tags: [
      { name: 'Love2D',         type: TagType.Technology },
      { name: 'GIMP',           type: TagType.Technology },
      { name: 'Lua',            type: TagType.Language },
      { name: 'Game Designer',  type: TagType.Skill },
      { name: 'Programmer',     type: TagType.Skill },
      { name: 'Artist',         type: TagType.Skill },
    ],
    url: 'https://www.youtube.com/watch?v=4qWFhmfCicc',
    imageUrl: 'programming_logo.jpg'
  } as ProjectDto,
  {
    id: 'unnamed-space-game-2',
    name: 'Unnamed Space Game #2',
    type: ProjectType.Game,
    state: ProjectState.Incomplete,
    date: new Date(2015, 0),
    description: 'Second prototype for a 2D space exploration game.',
    tags: [
      { name: 'LibGDX',         type: TagType.Technology },
      { name: 'GIMP',           type: TagType.Technology },
      { name: 'Java',           type: TagType.Language },
      { name: 'Game Designer',  type: TagType.Skill },
      { name: 'Programmer',     type: TagType.Skill },
      { name: 'Artist',         type: TagType.Skill },
    ],
    url: 'https://twitter.com/josesaysfrankly/status/774346700563607553/video/1',
    imageUrl: 'programming_logo.jpg'
  } as ProjectDto,
  // --------------------------------------------------------------------------

  // -- PERSONAL PROGRAMMING PROJECTS -----------------------------------------
  {
    id: 'jose-franco-2017',
    name: 'José Franco 2017',
    type: ProjectType.Website,
    state: ProjectState.Complete,
    date: new Date(2017, 5),
    description: 'First iteration of my personal website',
    tags: [
      { name: 'jQuery',         type: TagType.Technology },
      { name: 'MaterializeCSS', type: TagType.Technology },
      { name: 'HTML',           type: TagType.Language },
      { name: 'CSS',            type: TagType.Language },
      { name: 'Javascript',     type: TagType.Language },
      { name: 'Frontend',       type: TagType.Skill },
      { name: 'UI/UX',          type: TagType.Skill },
      { name: 'Static Pages',   type: TagType.Architecture },
    ],
    url: 'https://josepfranco.github.io/',
    imageUrl: 'josefranco2017_logo.png'
  } as ProjectDto,
  {
    id: 'hero-roulette',
    name: 'Hero Roulette',
    type: ProjectType.Application,
    state: ProjectState.Complete,
    date: new Date(2019, 4),
    description: 'A team quasi-random, based on user-defined rules, hero selection for Overwatch',
    tags: [
      { name: 'Android',         type: TagType.Technology },
      { name: 'Firebase',        type: TagType.Technology },
      { name: 'Material Design', type: TagType.Technology },
      { name: 'Java',            type: TagType.Language },
      { name: 'XML',             type: TagType.Language },
      { name: 'Frontend',        type: TagType.Skill },
    ],
    imageUrl: 'heroroulette_logo.png'
  } as ProjectDto,
  {
    id: 'stravauto',
    name: 'Stravauto',
    type: ProjectType.Application,
    state: ProjectState.Incomplete,
    date: new Date(2019, 2),
    description: 'Prototype application that tracks your movement behaviour to automatically start/stop Strava.',
    tags: [
      { name: 'Android',         type: TagType.Technology },
      { name: 'Firebase',        type: TagType.Technology },
      { name: 'Java',            type: TagType.Language },
      { name: 'XML',             type: TagType.Language },
      { name: 'Frontend',        type: TagType.Skill },
    ],
    sourceUrl: 'https://github.com/users/josepfranco/projects/1',
    imageUrl: 'programming_logo.jpg'
  } as ProjectDto,
  {
    id: 'gamefeeders-discord-bot',
    name: 'Gamefeeders Discord Bot',
    type: ProjectType.Service,
    state: ProjectState.Complete,
    date: new Date(2018, 3),
    description: 'Discord bot my private discord server. Responsible for allocating new users into a specific god pantheon, based on a quiz.',
    tags: [
      { name: 'Discord API', type: TagType.Technology },
      { name: 'Heroku',      type: TagType.Technology },
      { name: 'PostgreSQL',  type: TagType.Technology },
      { name: 'Python',      type: TagType.Language },
      { name: 'Backend',     type: TagType.Skill },
    ],
    imageUrl: 'programming_logo.jpg'
  } as ProjectDto,
  {
    id: 'champion-roulette',
    name: 'Champion Roulette',
    type: ProjectType.Application,
    state: ProjectState.Incomplete,
    date: new Date(2019, 5),
    description: 'A team quasi-random, based on user-defined rules, champion selection for League of Legends',
    tags: [
      { name: 'Android',           type: TagType.Technology },
      { name: 'Retrofit',          type: TagType.Technology },
      { name: 'Dagger',            type: TagType.Technology },
      { name: 'Jetpack Lifecycle', type: TagType.Technology },
      { name: 'Java',              type: TagType.Language },
      { name: 'XML',               type: TagType.Language },
      { name: 'Frontend',          type: TagType.Skill },
      { name: 'MVVM',              type: TagType.Architecture },
    ],
    imageUrl: 'championroulette_still_1.png'
  } as ProjectDto,
  {
    id: 'champion-roulette-service',
    name: 'Champion Roulette Service',
    type: ProjectType.Service,
    state: ProjectState.Incomplete,
    date: new Date(2019, 5),
    description: 'The monolithic backend, responsible for data-gathering and storage, for the Champion Roulette application',
    tags: [
      { name: 'Spring',     type: TagType.Technology },
      { name: 'Spring JPA', type: TagType.Technology },
      { name: 'Hibernate',  type: TagType.Technology },
      { name: 'H2',         type: TagType.Technology },
      { name: 'Orianna',    type: TagType.Technology },
      { name: 'jsoup',      type: TagType.Technology },
      { name: 'Lombok',     type: TagType.Technology },
      { name: 'Java',       type: TagType.Language },
      { name: 'Backend',    type: TagType.Skill },
      { name: 'Monolithic', type: TagType.Architecture },
      { name: 'N-Layered',  type: TagType.Architecture },
    ],
    imageUrl: 'programming_logo.jpg'
  } as ProjectDto,
  {
    id: 'boilerplate-net-core',
    name: 'Boilerplate .NET Core',
    type: ProjectType.Library,
    state: ProjectState.InProgress,
    date: new Date(2020, 6),
    description: 'A set of packages & specifications to be reused on future .NET Core projects.',
    tags: [
      { name: 'ASP.NET Core',       type: TagType.Technology },
      { name: 'Apache Kafka',       type: TagType.Technology },
      { name: 'RabbitMQ',           type: TagType.Technology },
      { name: 'EFCore',             type: TagType.Technology },
      { name: 'Dapper',             type: TagType.Technology },
      { name: 'Redis',              type: TagType.Technology },
      { name: 'Docker',             type: TagType.Technology },
      { name: 'GitHub Actions',     type: TagType.Technology },
      { name: 'C#',                 type: TagType.Language },
      { name: 'YAML',               type: TagType.Language },
      { name: 'Dockerfile',         type: TagType.Language },
      { name: 'Backend',            type: TagType.Skill },
      { name: 'CI/CD',              type: TagType.Skill },
      { name: 'Architecture',       type: TagType.Skill },
      { name: 'Clean Architecture', type: TagType.Architecture },
      { name: 'Microservices',      type: TagType.Architecture },
    ],
    sourceUrl: 'https://github.com/users/josepfranco/projects/1',
    imageUrl: 'programming_logo.jpg'
  } as ProjectDto,
  {
    id: 'jose-franco-2020',
    name: 'José Franco 2020',
    type: ProjectType.Website,
    state: ProjectState.InProgress,
    date: new Date(2020, 8),
    description: 'Second iteration of my personal website (you\'re seeing it right now!)',
    tags: [
      { name: 'Angular',        type: TagType.Technology },
      { name: 'Parallax.js',    type: TagType.Technology },
      { name: 'Scully',         type: TagType.Technology },
      { name: 'GitHub Actions', type: TagType.Technology },
      { name: 'Typescript',     type: TagType.Language },
      { name: 'HTML',           type: TagType.Language },
      { name: 'Sass',           type: TagType.Language },
      { name: 'YAML',           type: TagType.Language },
      { name: 'Frontend',       type: TagType.Skill },
      { name: 'UI/UX',          type: TagType.Skill },
      { name: 'CI/CD',          type: TagType.Skill },
    ],
    url: 'https://josepfranco.github.io/',
    sourceUrl: 'https://github.com/josepfranco/josepfranco.github.io',
    imageUrl: 'josefranco2020_logo.png'
  } as ProjectDto,
  // --------------------------------------------------------------------------
];
