import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input()
  title: string;

  @Input()
  isInverted: boolean;

  @Input()
  imageUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
