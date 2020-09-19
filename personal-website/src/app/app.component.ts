import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {transformAnimation} from './animations/transformer.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    transformAnimation
  ]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet): string {
    return outlet?.activatedRouteData?.animation;
  }
}
