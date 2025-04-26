import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdinAuthDto, AuthDto, CheckEmailDto, LoginDto } from './dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  @ApiBody({type:AuthDto})
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiBody({type:LoginDto})
  login(@Body() dto: LoginDto) {
    return this.authService.signin(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('check-email')
  @ApiBody({type:CheckEmailDto})
  checkEmail(@Body() dto: CheckEmailDto) {
    return this.authService.checkEmail(dto);
  }

  @Get('Users')
  getAllUser(){
    return this.authService.allUser()
  }

  @HttpCode(HttpStatus.OK)
  @Post('signup/admin')
  @ApiBody({type:AdinAuthDto})
  signupAdmin(@Body() dto: AdinAuthDto) {
    return this.authService.signupAdmin(dto);
  }

  @HttpCode(HttpStatus.OK) 
  @Post('login/admin')
  @ApiBody({type:AdinAuthDto})
  loginAdmin(@Body() dto: AdinAuthDto) {
    return this.authService.signinAdmin(dto);
  }
}
