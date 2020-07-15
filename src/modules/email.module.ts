import { Module } from "@nestjs/common";
import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EmailService } from "../services/email.service";
import { EmailController } from "src/controllers/email.controller";

const TEMPLATE_LOCATION = `${process.cwd()}/templates`
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

@Module({
  controllers: [EmailController],
  exports: [EmailService],
  providers: [EmailService],
  imports: [
    MailerModule.forRoot({
      transport: {
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: true,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASSWORD,
        },
      },
      defaults: {
        from: `"Mohammad Rehan Kodekar" <${SMTP_USER}>`
      },
      template: {
        dir: TEMPLATE_LOCATION,
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true
        }
      }
    })
  ]
})
export class  EmailModule {}