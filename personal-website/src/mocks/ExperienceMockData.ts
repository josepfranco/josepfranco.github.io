import {CompanyDto} from '../app/services/models/CompanyDto';
import {TagType} from '../app/services/models/TagType';

export const experienceMockData =
  [
    {
      name: 'LaSIGE',
      position: 'Junior Researcher',
      tags: [
        { name: 'Spring',        type: TagType.Technology },
        { name: 'ANTLR4',        type: TagType.Technology },
        { name: 'Android',       type: TagType.Technology },
        { name: 'VueJS',         type: TagType.Technology },
        { name: 'Firebase',      type: TagType.Technology },
        { name: 'Hibernate',     type: TagType.Technology },
        { name: 'Java',          type: TagType.Language },
        { name: 'Python',        type: TagType.Language },
        { name: 'Javascript',    type: TagType.Language },
        { name: 'Client/Server', type: TagType.Architecture },
        { name: 'Backend',       type: TagType.Skill },
        { name: 'Frontend',      type: TagType.Skill }
      ],
      description: 'LASIGE is a Computer Science and Engineering research unit at the Department of Informatics, Faculty of Sciences, ' +
        'University of Lisboa. LASIGE has approximately 140 collaborators, including researchers holding a doctoral degree, ' +
        'those working towards a PhD, MSc students and other junior researchers, project management and sys admin staff.',
      url: 'https://www.lasige.di.fc.ul.pt/about-us',
      imageUrl: 'lasige_logo.png',
      duration: {
        start: new Date(2017, 8, 1),
        end:   new Date(2018, 5, 30)
      }
    } as CompanyDto,
    {
      name: 'Siemens AG',
      position: 'Software Engineer',
      tags: [
        { name: '.NET Core',     type: TagType.Technology },
        { name: 'Angular',       type: TagType.Technology },
        { name: 'AWS',           type: TagType.Technology },
        { name: 'PostgreSQL',    type: TagType.Technology },
        { name: 'Redis',         type: TagType.Technology },
        { name: 'OrchardCore',   type: TagType.Technology },
        { name: 'EFCore',        type: TagType.Technology },
        { name: 'C#',            type: TagType.Language },
        { name: 'Typescript',    type: TagType.Language },
        { name: 'Javascript',    type: TagType.Language },
        { name: 'Microservices', type: TagType.Architecture },
        { name: 'Backend',       type: TagType.Skill },
        { name: 'Frontend',      type: TagType.Skill },
        { name: 'CI/CD',         type: TagType.Skill },
        { name: 'Scrum',         type: TagType.Skill }
      ],
      description: 'Siemens is a global powerhouse focusing on the areas of electrification, automation and digitalization. ' +
        'One of the world’s largest producers of energy-efficient, resource-saving technologies, Siemens is a leading supplier of ' +
        'systems for power generation and transmission as well as medical diagnosis. In infrastructure and industry solutions ' +
        'the company plays a pioneering role.',
      url: 'https://new.siemens.com/global/en/company/about.html',
      imageUrl: 'siemens_logo.svg',
      duration: {
        start: new Date(2019, 8, 2)
      }
    } as CompanyDto
  ];
