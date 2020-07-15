import { Module } from '@nestjs/common';
import { ConfigureModule } from "./modules/configure.module";
import { EmailModule } from "./modules/email.module";

@Module({
  imports: [
    ConfigureModule,
    EmailModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
