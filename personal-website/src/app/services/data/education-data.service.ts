import { Injectable } from '@angular/core';
import { IDataService } from '../../abstractions/services/IDataService';
import { SchoolDto } from '../models/dtos/SchoolDto';
import {Observable, of} from 'rxjs';
import { educationMockData } from '../../../mocks/EducationMockData';

@Injectable({
  providedIn: 'root'
})
export class EducationDataService implements IDataService<SchoolDto>{

  constructor() { }

  get(id: string): Observable<SchoolDto> {
    return of(educationMockData.find(x => x.id === id));
  }

  getAll(): Observable<SchoolDto[]> {
    return of(educationMockData);
  }
}
