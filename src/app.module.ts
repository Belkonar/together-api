import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupService } from './group/group.service';
import { GroupController } from './group/group.controller';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  imports: [],
  controllers: [AppController, GroupController, UserController],
  providers: [AppService, GroupService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
