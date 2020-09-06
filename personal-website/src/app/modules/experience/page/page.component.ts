import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import * as ScrollMagic from 'scrollmagic';

@Component({
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, OnDestroy {

  @HostBinding('style.width')
  parentWidth = '100%';

  @HostBinding('style.height')
  parentHeight = '100%';

  private scrollMagicController: any;

  constructor() { }

  ngOnInit(): void {
    // this.scrollMagicController = new ScrollMagic.Controller({
    //   globalSceneOptions: {
    //     triggerHook: 'onLeave',
    //     duration: '200%'
    //   }
    // });
    //
    // // get all slides
    // // TODO: make this dynamic
    // const siemensElement = document.getElementById('siemens');
    // const lasigeElement = document.getElementById('lasige');
    // const slides = [siemensElement, lasigeElement];
    //
    // for (const slide of slides) {
    //   new ScrollMagic.Scene({
    //     triggerElement: slide
    //   }).setPin(slide, { pushFollowers: false })
    //     .addTo(this.scrollMagicController);
    // }
  }

  ngOnDestroy(): void {
  }
}
