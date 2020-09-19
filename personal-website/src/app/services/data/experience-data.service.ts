import { Injectable } from '@angular/core';
import { IDataService } from '../../abstractions/services/IDataService';
import { CompanyDto } from '../models/dtos/CompanyDto';
import {Observable, of} from 'rxjs';
import {experienceMockData} from '../../../mocks/ExperienceMockData';

@Injectable({
  providedIn: 'root'
})
export class ExperienceDataService implements IDataService<CompanyDto>{

  constructor() { }

  get(id: string): Observable<CompanyDto> {
    return of(experienceMockData.find(x => x.id === id));
  }

  getAll(): Observable<CompanyDto[]> {
    return of(experienceMockData);
  }
}
