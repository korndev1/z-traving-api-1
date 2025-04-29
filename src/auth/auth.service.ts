import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AdinAuthDto, AuthDto, CheckEmailDto, LoginDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { error } from 'console';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash: hash,
          firstName: dto.firstName,
          lastName: dto.lastName,
        },
      });
      delete user.hash;

      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code == 'P2002') {
          throw new ForbiddenException('Credentials Taken');
        }
      }
    }
    throw error;
  }

  async signupAdmin(dto: AdinAuthDto) {
    const hash = await argon.hash(dto.password);
    try {
      const user = await this.prisma.admin.create({
        data: {
          userName: dto.userName,
          hash: hash,
        },
      });
      delete user.hash;

      return {statusCode:200,message: 'create account success'}
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code == 'P2002') {
          throw new ForbiddenException('Credentials Taken');
        }
      }
    }
    throw error
  }

  async signin(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }

    const pwMatch = await argon.verify(user.hash, dto.password);
    if (!pwMatch) {
      throw new ForbiddenException('Credentials incorrect');
    }

    return this.signToken(user.id, user.email);
  }

  async signinAdmin(dto: AdinAuthDto) {
    const user = await this.prisma.admin.findUnique({
      where: {
        userName: dto.userName,
      },
    });
    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }

    const pwMatch = await argon.verify(user.hash, dto.password);
    if (!pwMatch) {
      throw new ForbiddenException('Credentials incorrect');
    }
    return {statusCode:200,message:"Login success",access_token:(await this.signToken(user.id, user.userName)).access_token}

    // return {statusCode:200,message:"Login success",access_token:this.signToken(user.id, user.userName)}
  }

  async checkEmail(dto: CheckEmailDto) {
    const checkEmail = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (checkEmail) {
      return { data: 'already' };
    } else {
      return { data: 'not use' };
    }
  }

  async checkUsername(dto: AdinAuthDto) {
    const checkEmail = await this.prisma.admin.findUnique({
      where: {
        userName: dto.userName,
      },
    });
    if (checkEmail) {
      return { statusCode:401,data: 'already' };
    } else {
      return { statusCode:200,data: 'not use' };
    }
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }

  async allUser(){
    const alluser = await this.prisma.user.findMany()
    return {data: alluser}
  }
}
