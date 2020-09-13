import {Component, Input, OnInit} from '@angular/core';
import {TagDto} from '../../services/models/TagDto';
import {TagType} from '../../services/models/TagType';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input()
  tag: TagDto;

  constructor() { }

  ngOnInit(): void {
  }

  getTypeClass(): string {
    switch (this.tag?.type) {
      case TagType.Technology:
        return 'tag--red';
      case TagType.Language:
        return 'tag--cyan';
      case TagType.Skill:
        return 'tag--yellow';
      default:
        return 'tag--blue';
    }
  }
}
