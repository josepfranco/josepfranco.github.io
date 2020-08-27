import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {

  @HostBinding('style.width')
  parentWidth = '100%';

  @HostBinding('style.height')
  parentHeight = '100%';

  constructor() { }

  ngOnInit(): void {
  }
}
