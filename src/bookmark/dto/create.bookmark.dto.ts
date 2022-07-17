import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookMarkDto{
  @IsString()
  @IsNotEmpty()
  title:string;
  @IsString()
  @IsNotEmpty()
  description:string;
  @IsString()
  @IsNotEmpty()
  link:string;
}