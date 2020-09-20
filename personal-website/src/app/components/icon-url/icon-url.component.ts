import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-url',
  templateUrl: './icon-url.component.html',
  styleUrls: ['./icon-url.component.scss']
})
export class IconUrlComponent implements OnInit {

  @Input()
  url: string;

  @Input()
  icon: string;

  constructor() { }

  ngOnInit(): void {
  }
}
