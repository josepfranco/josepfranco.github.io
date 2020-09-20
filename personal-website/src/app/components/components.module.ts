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
import { TagComponent } from './tag/tag.component';
import { IconUrlComponent } from './icon-url/icon-url.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    SidebarComponent,
    LogoComponent,
    ItemComponent,
    BackgroundParallaxComponent,
    TimelineComponent,
    CardComponent,
    TagComponent,
    IconUrlComponent
  ],
    exports: [
        NotFoundComponent,
        SidebarComponent,
        LogoComponent,
        ItemComponent,
        BackgroundParallaxComponent,
        CardComponent,
        TagComponent,
        IconUrlComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
