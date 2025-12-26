import 'express';
import { User } from '../users/schema/user.schema';

declare module 'express' {
  interface Request {
    user: User;
    cookies: {
      Authentication: string;
      Refresh: string;
    };
  }
}
