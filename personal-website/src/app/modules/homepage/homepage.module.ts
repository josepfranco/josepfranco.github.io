import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { ProfileCardComponent } from './profile-card/profile-card.component';



@NgModule({
  declarations: [
    PageComponent,
    ProfileCardComponent
  ],
  exports: [
    PageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
