import {Component, OnDestroy, OnInit} from '@angular/core';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-background-parallax',
  templateUrl: './background-parallax.component.html',
  styleUrls: ['./background-parallax.component.scss']
})
export class BackgroundParallaxComponent implements OnInit, OnDestroy {

  private parallax: any;

  constructor() { }

  ngOnInit(): void {
    const background = document.getElementById('backgroundId');
    this.parallax = new Parallax(background, {
      hoverOnly: true,
      relativeInput: true,
      clipRelativeInput: true,
      calibrateX: true,
      calibrateY: true,
      invertX: true,
      invertY: true
    });
    this.parallax.enable();
  }

  ngOnDestroy(): void {
    this.parallax.disable();
    this.parallax.destroy();
  }

}
