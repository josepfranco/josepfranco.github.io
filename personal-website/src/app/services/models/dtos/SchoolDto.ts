import {Duration} from '../../../abstractions/models/Duration';

export interface SchoolDto {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  duration: Duration;
}
