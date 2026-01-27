import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { SignUpDTO } from './dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDTO): Promise<{ token: string }> {
    const { username, email, password } = signUpDto;

    const checkExistingUser = await this.userModel.find({ email }).exec();

    if (checkExistingUser.length > 0) {
      throw new ConflictException('Email đã được sử dụng');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await this.userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: newUser._id });

    return { token };
  }

  async login(
    loginDTO: LoginDTO,
  ): Promise<{ token: string; emailInput: User }> {
    const { email, password } = loginDTO;

    const emailInput = await this.userModel
      .findOne({ email })
      .select('+password');

    if (!emailInput) {
      throw new ConflictException('Email hoặc mật khẩu không đúng');
    }

    const isPasswordMatch = await bcrypt.compare(password, emailInput.password);

    if (!isPasswordMatch) {
      throw new ConflictException('Email hoặc mật khẩu không đúng');
    }

    const token = this.jwtService.sign({ id: emailInput._id });

    return { token, emailInput };
  }
}
