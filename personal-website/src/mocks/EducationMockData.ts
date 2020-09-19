import { SchoolDto } from '../app/services/models/dtos/SchoolDto';

export const educationMockData =
  [
    {
      id: 'esfga',
      name: 'ESFGA',
      description: 'Basic Education at Escola Frei Gonçalo de Azevedo',
      imageUrl: 'esfga_logo.jpg',
      duration: {
        start: new Date(2007, 8, 1),
        end:   new Date(2013, 6, 1)
      }
    } as SchoolDto,
    {
      id: 'bsc-fcul',
      name: 'BSc FCUL',
      description: 'Bachelors in Software Engineering at Faculdade de Ciências da Universidade de Lisboa',
      imageUrl: 'fcul_logo.png',
      duration: {
        start: new Date(2013, 8, 1),
        end:   new Date(2016, 6, 1)
      }
    } as SchoolDto,
    {
      id: 'msc-fcul',
      name: 'MSc FCUL',
      description: 'Masters in Software Engineering at Faculdade de Ciências da Universidade de Lisboa (incomplete)',
      imageUrl: 'fcul_logo.png',
      duration: {
        start: new Date(2016, 8, 1),
        end:   new Date(2019, 8, 1)
      }
    } as SchoolDto
  ];
