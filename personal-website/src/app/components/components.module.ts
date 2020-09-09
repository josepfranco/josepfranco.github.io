import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LogoComponent } from './sidebar/logo/logo.component';
import { ItemComponent } from './sidebar/item/item.component';
import { RouterModule } from '@angular/router';
import { BackgroundParallaxComponent } from './background-parallax/background-parallax.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    SidebarComponent,
    LogoComponent,
    ItemComponent,
    BackgroundParallaxComponent,
    TimelineComponent,
    CardComponent
  ],
    exports: [
        NotFoundComponent,
        SidebarComponent,
        LogoComponent,
        ItemComponent,
        BackgroundParallaxComponent,
        CardComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
