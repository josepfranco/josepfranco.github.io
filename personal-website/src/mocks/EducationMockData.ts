import { SchoolDto } from '../app/services/models/SchoolDto';

export const educationMockData =
  [
    {
      name: 'ESFGA',
      description: 'Basic Education at Escola Frei Gonçalo de Azevedo',
      imageUrl: 'esfga_logo.jpg',
      duration: {
        start: new Date(2007, 8, 1),
        end:   new Date(2013, 6, 1)
      }
    } as SchoolDto,
    {
      name: 'BSc FCUL',
      description: 'Bachelors in Software Engineering at Faculdade de Ciências da Universidade de Lisboa',
      imageUrl: 'fcul_logo.png',
      duration: {
        start: new Date(2013, 8, 1),
        end:   new Date(2016, 6, 1)
      }
    } as SchoolDto,
    {
      name: 'MSc FCUL',
      description: 'Masters in Software Engineering at Faculdade de Ciências da Universidade de Lisboa (incomplete)',
      imageUrl: 'fcul_logo.png',
      duration: {
        start: new Date(2016, 8, 1),
        end:   new Date(2019, 8, 1)
      }
    } as SchoolDto
  ];
