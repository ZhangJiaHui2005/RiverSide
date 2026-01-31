import { Body, Controller, Post, Res, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/signup.dto';
import { LoginDTO } from './dto/login.dto';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('signup')
  // signUp(@Body() signUpDto: SignUpDTO): Promise<{ token: string }> {
  //   return this.authService.signUp(signUpDto);
  // }

  // @Post('login')
  // async login(
  //   @Body() loginDTO: LoginDTO,
  //   @Res({ passthrough: true }) res: Response,
  // ) {
  //   const { token, emailInput } = await this.authService.login(loginDTO);

  //   res.cookie('accessToken', token, {
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV === 'production',
  //     sameSite: 'lax',
  //     maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
  //   });

  //   return {
  //     message: 'Đăng nhập thành công',
  //     user: emailInput,
  //   };
  // }

  // @Post('signout')
  // async logout(@Res({ passthrough: true }) res: Response) {
  //   res.clearCookie('accessToken', {
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV === 'production',
  //     sameSite: 'lax',
  //   });
  //   return { message: 'Đăng xuất thành công' };
  // }

  @Post('clerk-sync')
  async clerkSync(
    @Body('token') token: string, // Token từ Clerk Frontend
    @Res({ passthrough: true }) res: Response
  ) {
    if (!token) throw new UnauthorizedException('Thiếu token từ Clerk');
    
    const { token: internalToken, user } = await this.authService.validateClerkUser(token);
    
    // Ghi đè vào Cookie để các API khác (Rooms, Bookings) vẫn chạy bình thường
    this.setCookie(res, internalToken);

    return { message: 'Đồng bộ Clerk thành công', user };
  }

  // Đăng xuất
  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('accessToken');
    return { message: 'Đã đăng xuất' };
  }

  // Hàm helper set cookie
  private setCookie(res: Response, token: string) {
    res.cookie('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });
  }
}
