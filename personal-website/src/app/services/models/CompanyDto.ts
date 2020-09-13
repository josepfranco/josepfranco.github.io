import {Duration} from '../../abstractions/models/Duration';
import {TagDto} from './TagDto';

export interface CompanyDto {
  name: string;
  imageUrl: string;
  position: string;
  tags: TagDto[];
  description: string;
  url: string;
  duration: Duration;
}
