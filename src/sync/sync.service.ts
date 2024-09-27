import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bullmq';

@Injectable()
export class SyncService {
  constructor(@InjectQueue('syncQueue') private readonly syncQueue: Queue) {}

  async triggerSync(data: any) {
    // Dodajemy zadanie synchronizacji do kolejki
    await this.syncQueue.add('syncJob', data);
  }
}
