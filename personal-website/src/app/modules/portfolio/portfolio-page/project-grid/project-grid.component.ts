import {Component, Input, OnInit} from '@angular/core';
import {ProjectDto} from '../../../../services/models/dtos/ProjectDto';
import {StringUtilsService} from '../../../../services/utils/string-utils.service';

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss']
})
export class ProjectGridComponent implements OnInit {

  @Input()
  projectList: ProjectDto[];

  constructor(private stringUtilsService: StringUtilsService) { }

  ngOnInit(): void {
  }

  slugify(str: string): string {
    return this.stringUtilsService.slugify(str);
  }
}
