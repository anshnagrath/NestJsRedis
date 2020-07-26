import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { config } from 'dotenv';
config()

@Injectable()
export class AuthService {
    constructor(private jwtService:JwtService){}
    generateJWT(agencyId:string) {
        return this.jwtService.sign({agencyId} ,{ expiresIn : process.env.EXPIRE});
    }
    verifyJWT(token:string){
        return this.jwtService.verify(token)
    }
}
