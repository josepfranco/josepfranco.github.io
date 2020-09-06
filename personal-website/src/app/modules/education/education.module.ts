import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { PageComponent } from './page/page.component';
import { ComponentsModule } from '../../components/components.module';
import { SchoolComponent } from './school/school.component';


@NgModule({
  declarations: [
    PageComponent,
    SchoolComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule,
    ComponentsModule
  ]
})
export class EducationModule { }
