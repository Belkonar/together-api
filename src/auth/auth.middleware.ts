import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const { authorization } = req.headers;

    if (authorization) {
      // TODO: pull the subject from the token for the user
      req.user = 'sub';
    } else {
      req.user = 'user';
    }

    next();
  }
}
