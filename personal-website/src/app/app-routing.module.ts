import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '',           loadChildren: () => import('./modules/homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'experience', loadChildren: () => import('./modules/experience/experience.module').then(m => m.ExperienceModule) },
  { path: 'portfolio',  loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: '**',        component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
