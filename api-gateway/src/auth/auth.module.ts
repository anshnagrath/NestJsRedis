import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AuthService } from './services/auth.service';
import { config } from 'dotenv';
config();
@Module({
    imports :[ JwtModule.registerAsync({
        imports : [ConfigModule ],
        inject:[ConfigService],
        useFactory: async (configService:ConfigService)=>({
            secret:process.env.SECRET,
            signOptions:{ expiresIn:process.env.EXPIRE}
        })

    })],
    providers:[ AuthService],
    exports:[AuthService]
})
export class AuthModule {}
