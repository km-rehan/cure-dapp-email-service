import { Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";


const MAIL_FROM = process.env.MAIL_FROM;

@Injectable()
export class EmailService {

  constructor(private readonly emailService: MailerService) {

  }


  public async sendUserRegisterationMail(to: string, subject: string, body: string): Promise<any> {
    try {
      await this.emailService.sendMail(
        {
          to: to,
          from: MAIL_FROM,
          subject: subject,
          template: 'actions',
          context: {
            body: body
          }
        }
      );

      return {
        status: "success",
        message: "E-mail sent sucessfully"
      }
    } catch (exception) {
      throw exception;
    }
  }
}