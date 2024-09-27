import { Controller, Post } from '@nestjs/common';
import { SyncService } from './sync.service';

@Controller('sync')
export class SyncController {
  constructor(private readonly syncService: SyncService) {}

  @Post()
  async syncData() {
    // Wywołujemy synchronizację z przykładowymi danymi
    await this.syncService.triggerSync({ example: 'data' });
    return { message: 'Synchronization triggered' };
  }
}
