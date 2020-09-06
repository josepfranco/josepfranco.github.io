import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import {ComponentsModule} from '../../components/components.module';



@NgModule({
  declarations: [
    PageComponent
  ],
    imports: [
        CommonModule,
        PortfolioRoutingModule,
        ComponentsModule
    ]
})
export class PortfolioModule { }
