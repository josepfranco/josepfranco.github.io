import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import {ComponentsModule} from '../../components/components.module';
import { ProjectComponent } from './portfolio-page/project/project.component';
import { FilteringPanelComponent } from './portfolio-page/filtering-panel/filtering-panel.component';
import { ProjectGridComponent } from './portfolio-page/project-grid/project-grid.component';
import { ProjectTypeTagComponent } from './portfolio-page/project-type-tag/project-type-tag.component';
import { ProjectPageComponent } from './project-page/project-page.component';



@NgModule({
  declarations: [
    PortfolioPageComponent,
    ProjectComponent,
    FilteringPanelComponent,
    ProjectGridComponent,
    ProjectTypeTagComponent,
    ProjectPageComponent
  ],
    imports: [
        CommonModule,
        PortfolioRoutingModule,
        ComponentsModule
    ]
})
export class PortfolioModule { }
