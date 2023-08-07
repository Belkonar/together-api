import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupService } from './group/group.service';
import { GroupController } from './group/group.controller';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { AuthMiddleware } from './auth/auth.middleware';
import { Db, MongoClient } from 'mongodb';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [],
  controllers: [AppController, GroupController, UserController],
  providers: [
    AppService,
    GroupService,
    UserService,
    {
      provide: Db,
      useFactory: async () => {
        // TODO: auth
        const client = new MongoClient('mongodb://localhost:27017');
        await client.connect();
        return client.db('together');
      },
    },
    AuthService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
