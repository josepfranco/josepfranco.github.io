import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PageComponent } from './page/page.component';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ComponentsModule
  ]
})
export class BlogModule { }
