import { Injectable, CanActivate,  Inject, forwardRef ,ExecutionContext } from '@nestjs/common';
import { AuthService } from '../services/auth.service'


@Injectable()
export class AuthGuard implements CanActivate {
  constructor( @Inject(forwardRef(() => AuthService)) private authService: AuthService){}
  canActivate(context: ExecutionContext): Promise<boolean>  {
    const request = context.switchToHttp().getRequest();
    let Token = request.headers.authorization;
    if (!Token){
      return Promise.resolve(false)
    }else{
      let bearer = Token.split(' ')[1]
      return this.validateRequest(bearer);
    }
  
  }

    validateRequest(Token : string )  : Promise<boolean>{
            return this.authService.verifyJWT(Token);
  }
}


