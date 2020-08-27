import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import {HomepageModule} from './modules/homepage/homepage.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
