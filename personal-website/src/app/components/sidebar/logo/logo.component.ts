import { Component, Input, OnInit } from '@angular/core';
import { SizeState } from './models/SizeState';
import { sizeAnimation } from './animations/size.animation';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  animations: [
    sizeAnimation
  ]
})
export class LogoComponent implements OnInit {

  SizeState = SizeState;

  @Input()
  isSidebarExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }
}
