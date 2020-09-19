import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import {ProjectPageComponent} from './project-page/project-page.component';

const routes: Routes = [
  { path: '',    component: PortfolioPageComponent, data: { animation: 'portfolio' } },
  { path: ':id', component: ProjectPageComponent, data: { animation: 'project' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
