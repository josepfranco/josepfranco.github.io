import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoComponent } from './sidebar/logo/logo.component';
import { ItemComponent } from './sidebar/item/item.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    CardComponent,
    NotFoundComponent,
    SidebarComponent,
    LogoComponent,
    ItemComponent
  ],
  exports: [
    CardComponent,
    NotFoundComponent,
    SidebarComponent,
    LogoComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
