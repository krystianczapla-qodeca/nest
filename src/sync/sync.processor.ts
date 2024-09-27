import { Process, Processor } from '@nestjs/bull';
import { HttpService } from '@nestjs/axios';
import { Job } from 'bullmq';
import { firstValueFrom } from 'rxjs';

@Processor('syncQueue')
export class SyncProcessor {
  constructor(private readonly httpService: HttpService) {}

  @Process('syncJob')
  async handleSync(job: Job<any>) {
    console.log('Processing sync job with data:', job.data);

    // Symulacja pobierania danych z zewnętrznego API
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Przykładowe API
    const response = await firstValueFrom(this.httpService.get(apiUrl));

    const apiData = response.data;
    console.log('Data from API:', apiData);

    // Zapis danych
    console.log('Saving data to database...');
  }
}
