import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    signUp(@Body() signUpDto: SignUpDTO): Promise<{ token: string }> {
        return this.authService.signUp(signUpDto);
    }
}
