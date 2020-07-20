import { Controller } from "@nestjs/common";
import { MessagePattern } from "@nestjs/microservices";
import { EmailService } from "../services/email.service";
import { EmailBodyDTO } from "../dto/email-body.dto";
import { sendMailToNewUser } from "src/utils/user-email.utils";


@Controller("email")
export class EmailController {

  constructor(private readonly emailService: EmailService) {

  }

  @MessagePattern({
    cmd: 'send-new-user-email'
  })
  public async sendUserCreatedEmail(emailBodyDto: EmailBodyDTO): Promise<any> {
    try {
      const response = sendMailToNewUser(emailBodyDto, this.emailService);
      return response;
    } catch (exception) {
      throw exception;
    }
  }

}