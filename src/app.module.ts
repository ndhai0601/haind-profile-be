import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OciStorageModule } from './oci-storage/oci-storage.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [OciStorageModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
