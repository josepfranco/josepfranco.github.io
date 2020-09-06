import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { PageComponent } from './page/page.component';
import { ComponentsModule } from '../../components/components.module';
import {CompanyComponent} from './company/company.component';


@NgModule({
  declarations: [
    PageComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    ComponentsModule
  ]
})
export class ExperienceModule { }
