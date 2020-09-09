import { Injectable } from '@angular/core';
import { IDataService } from '../../abstractions/services/IDataService';
import { CompanyDto } from '../models/CompanyDto';
import {Observable, of} from 'rxjs';
import {experienceMockData} from '../../../mocks/ExperienceMockData';

@Injectable({
  providedIn: 'root'
})
export class ExperienceDataService implements IDataService<CompanyDto>{

  constructor() { }

  get(id: string): Observable<CompanyDto> {
    return of(experienceMockData[0]);
  }

  getAll(): Observable<CompanyDto[]> {
    return of(experienceMockData);
  }
}
