import { Body, Controller, Post } from '@nestjs/common';
import { UserDTO } from './auth.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  register(@Body() createCatDto: UserDTO) {
    console.log(createCatDto);

    return;
  }
}
