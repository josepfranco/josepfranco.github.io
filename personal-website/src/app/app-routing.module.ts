import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/homepage/homepage.module').then(m => m.HomepageModule),
    data: { animation: 'homepage' }
  },
  {
    path: 'experience',
    loadChildren: () => import('./modules/experience/experience.module').then(m => m.ExperienceModule),
    data: { animation: 'experience' }
  },
  {
    path: 'education',
    loadChildren: () => import('./modules/education/education.module').then(m => m.EducationModule),
    data: { animation: 'education' }
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule),
    data: { animation: 'portfolio' }
  },
  {
    path: 'blog',
    loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule),
    data: { animation: 'blog' }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { animation: '404' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
