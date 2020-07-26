import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable,from,of } from 'rxjs';
import { Agency } from 'src/dtos/agency.dto';
import {hash ,compare} from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private jwtService:JwtService){}
    generateJWT(agencyId:string) {
        return this.jwtService.sign({agencyId} ,{ expiresIn : '1h'});
    }
    verifyJWT(token:string){
        return this.jwtService.verify(token)
    }
}
