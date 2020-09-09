import { CompanyDto } from '../app/services/models/CompanyDto';

export const experienceMockData =
  [
    {
      name:        'LaSIGE',
      description: 'Junior Researcher working for my Thesis',
      imageUrl:    'lasige_logo.png',
      startDate:   new Date(2017, 9, 1),
      endDate:     new Date(2018, 7, 1)
    } as CompanyDto,
    {
      name:        'Siemens AG',
      description: 'Software Engineer working mostly with .NET Core and Angular in a microservices architecture.',
      imageUrl:    'siemens_logo.svg',
      startDate:   new Date(2019, 9, 2),
      endDate:     new Date()
    } as CompanyDto
  ];
