import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignUpDTO {
    @IsNotEmpty({ message: "Tên người dùng không được để trống" })
    @IsString()
    username: string;

    @IsNotEmpty({ message: "Email không được để trống" })
    @IsString()
    email: string;

    @IsNotEmpty({ message: "Mật khẩu không được để trống" })
    @MinLength(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" })
    @IsString()
    password: string;
}