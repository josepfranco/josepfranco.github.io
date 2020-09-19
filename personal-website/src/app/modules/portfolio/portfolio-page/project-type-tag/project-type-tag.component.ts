import {Component, Input, OnInit} from '@angular/core';
import {ProjectType} from '../../../../services/models/enums/ProjectType';
import {TagType} from '../../../../services/models/enums/TagType';

@Component({
  selector: 'app-project-type-tag',
  templateUrl: './project-type-tag.component.html',
  styleUrls: ['./project-type-tag.component.scss']
})
export class ProjectTypeTagComponent implements OnInit {

  @Input()
  type: ProjectType;

  ProjectType: ProjectType;

  constructor() { }

  ngOnInit(): void {
  }

  getTypeClass(): string {
    switch (this.type) {
      case ProjectType.Tool:
        return 'tag--cyan';
      case ProjectType.Library:
        return 'tag--red';
      case ProjectType.Game:
        return 'tag--yellow';
      case ProjectType.Website:
        return 'tag--blue';
      case ProjectType.Service:
        return 'tag--pink';
      case ProjectType.Application:
        return 'tag--green';
    }
  }
}
