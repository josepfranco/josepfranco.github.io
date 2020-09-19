import { Injectable } from '@angular/core';
import {IDataService} from '../../abstractions/services/IDataService';
import {ProjectDto} from '../models/dtos/ProjectDto';
import {Observable, of, throwError} from 'rxjs';
import {portfolioMockData} from '../../../mocks/PortfolioMockData';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService implements IDataService<ProjectDto>{

  constructor() { }

  get(id: string): Observable<ProjectDto> {
    const project = portfolioMockData.find(x => x.id === id);
    if (project) { return of(project); }
    else { return throwError('Project not found'); }
  }

  getAll(): Observable<ProjectDto[]> {
    return of(portfolioMockData);
  }
}
