import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {FindGateway} from "./find.gateway";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FindGateway],
  exports: [FindGateway]
})
export class AppModule {
}
