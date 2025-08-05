import { Expose, Type } from 'class-transformer';

export class ReviewResponseDto {
  @Expose()
  id: number;

  @Expose()
  text: string;

  @Expose()
  rating: number;

  @Expose()
  createdAt: Date;

  @Expose()
  @Type(() => AuthorDto)
  author: AuthorDto;
}

class AuthorDto {
  @Expose()
  id: number;

  @Expose()
  name: string;
}
