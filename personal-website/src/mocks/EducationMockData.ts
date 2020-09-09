import { SchoolDto } from '../app/services/models/SchoolDto';

export const educationMockData =
  [
    {
      name:        'ESFGA',
      description: 'Basic Education at Escola Frei Gonçalo de Azevedo',
      imageUrl:    'esfga_logo.jpg',
      startDate:   new Date(2007, 9, 1),
      endDate:     new Date(2013, 7, 1)
    } as SchoolDto,
    {
      name:        'BSc FCUL',
      description: 'Bachelors in Software Engineering at Faculdade de Ciências da Universidade de Lisboa',
      imageUrl:    'fcul_logo.png',
      startDate:   new Date(2013, 9, 1),
      endDate:     new Date(2016, 6, 1)
    } as SchoolDto,
    {
      name:        'MSc FCUL',
      description: 'Masters in Software Engineering at Faculdade de Ciências da Universidade de Lisboa (incomplete)',
      imageUrl:    'fcul_logo.png',
      startDate:   new Date(2016, 9, 1),
      endDate:     new Date(2019, 9, 1)
    } as SchoolDto
  ];
