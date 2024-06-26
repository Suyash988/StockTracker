import { JwtPayload } from 'jsonwebtoken';
import { User } from '@prisma/client';

declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload;
    }
  }
}