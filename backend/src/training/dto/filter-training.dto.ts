export class FilterTrainingDto {
  minPrice?: number;
  maxPrice?: number;
  sort?: 'price' | 'duration';
}
