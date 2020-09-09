import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationDataService } from './data/education-data.service';
import { ExperienceDataService } from './data/experience-data.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    EducationDataService,
    ExperienceDataService
  ]
})
export class ServicesModule { }
