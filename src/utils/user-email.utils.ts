import { HttpException, HttpStatus } from "@nestjs/common";
import { EmailBodyDTO } from "src/dto/email-body.dto";
import { EmailService } from "src/services/email.service";


export async function sendMailToNewUser(emailBodyDto: EmailBodyDTO, emailService: EmailService): Promise<any> {
  try {
    if (emailBodyDto.isUserVerified) {
      return new HttpException("User already verified", HttpStatus.CONTINUE);
    }

    const emailBody = `<tr>
                        <td valign="top"
                            style=" background: #fff; width: 600px; font-size: 15px; color: #333; line-height: 1.4em; font-family: 'Helvetica Neue', helvetica, arial, sans-serif; padding: 20px">
                          <table summary="body" cellpadding="0" cellspacing="0" border="0"
                                  style="width: 100%">
                            <tr>
                                          <td colspan="2" style="padding: 10px 0;" align="center">
                                            CureDapp Fitness
                                          </td>
                                      </tr>
                                      <tr>
                                      <td colspan="2" style="padding: 20px 0; color: #777;text-align: center;padding:20px;" align="center">
                                      <h3 style="color: #444;font-size: 27px;">Registration Of New User</h3>
                                      <p style="padding:30px;padding-top:5px;">The new user walletAddress is mentioned below</p>
                                      <div style="padding: 20px;color: #fff;background-color: #900">
                                      <span style="font-size: 20px;"><b>Wallet Address : </b>${emailBodyDto.walletAddress}</span>
                                      </div>
                                      <div style="padding: 20px;"></div>
                                    
                                      <hr style="opacity: .3" />
                                      </td>
                              
                                    </tr>
                                    <tr>
                                    <td colspan="2" style="padding: 20px 0; color: #777;text-align: center;padding:20px;" align="center">
                                          <p style="padding:30px;padding-top:5px;">Please click the following button to see</p>
                                          <a href="" style="text-decoration: none;"><div style="padding: 20px;color: #fff;background-color: #900">
                                            <span style="font-size: 20px;">Click here to visit</span>
                                          </div></a>
                                          <div style="padding: 20px;"></div>
                                          <hr style="opacity: .3" />
                              </td>
                              </tr>
                          </table>
                        </td>
                      </tr>`
      const response = await emailService.sendUserRegisterationMail("rehan@blocklogy.org", "CureDapp Fitness", emailBody);
      return response;
  } catch (exception) {

  }
} 