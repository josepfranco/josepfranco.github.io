import { Component, Input, OnInit } from '@angular/core';
import {fadeAnimation } from './animations/fade.animation';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  animations: [
    fadeAnimation
  ]
})
export class ItemComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  icon: string;

  @Input()
  isSidebarExpanded = false;

  constructor() { }

  ngOnInit(): void {
  }

}
