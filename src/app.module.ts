import { Module } from '@nestjs/common';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import path = require('path');
// const __dirname = path.resolve();
@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'build'),
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
