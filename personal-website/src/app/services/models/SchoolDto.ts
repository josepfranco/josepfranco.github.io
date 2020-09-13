import {Duration} from '../../abstractions/models/Duration';

export interface SchoolDto {
  name: string;
  imageUrl: string;
  description: string;
  duration: Duration;
}
