import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/users/schema/user.schema';
import { Request } from 'express';

const getCurrentUserByContext = (
  context: ExecutionContext,
): User | undefined => {
  const request = context.switchToHttp().getRequest<Request>();
  return request.user;
};

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) =>
    getCurrentUserByContext(context),
);
