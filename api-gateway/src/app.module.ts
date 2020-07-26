import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TransportService } from './transport.service';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [TransportService ]
})
export class AppModule {}
