import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
    @ApiProperty({example:'test@mail.com'})
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @ApiProperty({example:'testpassword1234'})
    @IsString()
    @IsNotEmpty()
    password:string;

    @ApiProperty({example:'test'})
    @IsString()
    @IsNotEmpty()
    firstName:string;

    @ApiProperty({example:'test'})
    @IsString()
    @IsNotEmpty()
    lastName:string;

}

export class AdinAuthDto {

    @ApiProperty({example:'test'})
    @IsString()
    @IsNotEmpty()
    userName:string;

    @ApiProperty({example:'testpassword1234'})
    @IsString()
    @IsNotEmpty()
    password:string;
}

export class LoginDto{
    @ApiProperty({example:'test@mail.com'})
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @ApiProperty({example:'testpassword1234'})
    @IsString()
    @IsNotEmpty()
    password:string;
}

export class CheckEmailDto{
    @ApiProperty({example:'test'})
    @IsEmail()
    @IsNotEmpty()
    email:string;
}