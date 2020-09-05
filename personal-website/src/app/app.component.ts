import { Component, OnInit } from '@angular/core';
import * as Parallax from 'parallax-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const background = document.getElementById('backgroundId');
    const parallax = new Parallax(background, {hoverOnly: true, clipRelativeInput: true});
  }
}
