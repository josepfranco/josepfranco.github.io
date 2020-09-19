import {TagDto} from './TagDto';
import {ProjectType} from '../enums/ProjectType';
import {ProjectState} from '../enums/ProjectState';

export interface ProjectDto {
  id: string;
  name: string;
  type: ProjectType;
  tags: TagDto[];
  description: string;
  url: string;
  sourceUrl: string;
  imageUrl: string;
  state: ProjectState;
  date: Date;
}
