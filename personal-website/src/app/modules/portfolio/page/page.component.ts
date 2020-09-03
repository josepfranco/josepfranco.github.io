import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {

  @HostBinding('style.width')
  parentWidth = '100%';

  @HostBinding('style.height')
  parentHeight = '100%';

  constructor() { }

  ngOnInit(): void {
  }
}
