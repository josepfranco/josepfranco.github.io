import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { HomepageRoutingModule } from './homepage-routing.module';



@NgModule({
  declarations: [
    ProfileCardComponent
  ],
  exports: [
    ProfileCardComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
