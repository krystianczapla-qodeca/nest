import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { SyncProcessor } from './sync.processor';
import { SyncService } from './sync.service';
import { HttpModule } from '@nestjs/axios';
import { SyncController } from './sync.controller';

@Module({
  imports: [
    HttpModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'syncQueue',
    }),
  ],
  providers: [SyncService, SyncProcessor],
  controllers: [SyncController],
})
export class SyncModule {}
