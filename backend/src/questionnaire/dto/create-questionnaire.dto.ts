import { IsEnum, IsInt, Min, Max } from 'class-validator';

export class CreateQuestionnaireDto {
  @IsEnum(['beginner', 'intermediate', 'advanced'])
  trainingLevel: 'beginner' | 'intermediate' | 'advanced';

  @IsEnum(['yoga', 'running', 'boxing', 'stretching', 'strength'])
  trainingType: 'yoga' | 'running' | 'boxing' | 'stretching' | 'strength';

  @IsInt()
  @Min(10)
  @Max(300)
  trainingDuration: number;

  @IsInt()
  @Min(50)
  @Max(5000)
  caloriesToBurn: number;

  @IsInt()
  @Min(1)
  @Max(7)
  daysPerWeek: number;
}
