import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
  signin(){
    return {message: "I have sign in"}
  }

  signup(){
    return {message:' I have sign up'}

  }
}