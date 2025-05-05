import { Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../guard';
import { GetUser } from '../decorator';
import { User } from '@prisma/client';
import { ApiBearerAuth, ApiTags,ApiBody } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  // constructor(private userService: UserService){}
  @ApiBearerAuth('access-token')
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
