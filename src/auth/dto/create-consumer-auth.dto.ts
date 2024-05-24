import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateConsumerAuthDto {
  @IsString()
  @IsNotEmpty({ message: '이름을 입력해주세요' })
  @ApiProperty({
    example: '홍길동',
    description: '이름',
  })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: '이메일을 입력해주세요' })
  @ApiProperty({
    example: 'example@gmail.com',
    description: '이메일',
  })
  email: string;

  @IsString()
  @IsNotEmpty({ message: '닉네임을 입력해주세요' })
  @ApiProperty({
    example: '길동쓰',
    description: '닉네임',
  })
  nickname: string;

  @IsNumber()
  @IsNotEmpty({ message: '휴대폰 번호를 입력해주세요' })
  @ApiProperty({
    example: '01012345678',
    description: '휴대폰 번호',
  })
  phoneNumber: number;

  @IsString()
  @IsNotEmpty({ message: '비밀번호를 입력해주세요' })
  @ApiProperty({
    example: 'example1234@',
    description: '비밀번호',
  })
  password: string;

  @IsString()
  @IsNotEmpty({ message: '비밀번호를 다시 입력해주세요' })
  @ApiProperty({
    example: 'example1234@',
    description: '비밀번호 재확인',
  })
  passwordConfirm: string;
}