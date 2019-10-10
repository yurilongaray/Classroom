import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntriesModule } from './modules/entries.module';

@Module({
	imports: [EntriesModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }