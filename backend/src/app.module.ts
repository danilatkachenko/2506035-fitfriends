import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TrainingModule } from './training/training.module';
import { CommentModule } from './comment/comment.module';
import { FavoriteModule } from './favorite/favorite.module';
import { OrderModule } from './order/order.module';
import { BalanceModule } from './balance/balance.module';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // чтобы ConfigService работал в любом модуле
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('POSTGRES_HOST'),
        port: parseInt(config.get<string>('POSTGRES_PORT') || '5432'),
        username: config.get<string>('POSTGRES_USER'),
        password: config.get<string>('POSTGRES_PASSWORD'),
        database: config.get<string>('POSTGRES_DB'),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    TrainingModule,
    CommentModule,
    FavoriteModule,
    OrderModule,
    BalanceModule,
    QuestionnaireModule,
  ],
})
export class AppModule {}
