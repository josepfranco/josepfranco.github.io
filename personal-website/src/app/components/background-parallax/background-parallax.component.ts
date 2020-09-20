import {Component, OnDestroy, OnInit} from '@angular/core';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-background-parallax',
  templateUrl: './background-parallax.component.html',
  styleUrls: ['./background-parallax.component.scss']
})
export class BackgroundParallaxComponent implements OnInit, OnDestroy {

  private parallax: Parallax;

  constructor() { }

  ngOnInit(): void {
    const background = document.getElementById('backgroundId');
    this.parallax = new Parallax(background, {
      hoverOnly: false,
      relativeInput: false,
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
