import {Component, Input, OnInit} from '@angular/core';
import {ProjectDto} from '../../../../services/models/dtos/ProjectDto';
import {TagDto} from '../../../../services/models/dtos/TagDto';
import {TagType} from '../../../../services/models/enums/TagType';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input()
  project: ProjectDto;

  constructor() { }

  ngOnInit(): void {
  }

  getImportantTags(): TagDto[] {
    const tags = this.project?.tags ?? [];
    const importantTechnology = tags.filter(x => x.type === TagType.Technology)[0];
    const importantLanguage = tags.filter(x => x.type === TagType.Language)[0];
    return [importantTechnology, importantLanguage];
  }

}
