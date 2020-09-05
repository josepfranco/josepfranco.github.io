import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @HostBinding('class.card')
  hasCardClass = true;

  constructor() { }

  ngOnInit(): void {
  }

}
