import { SendEmailRequest } from "@/requests/SendEmailRequest";
import { ContactFormData } from "@/types/ContactFormData";

export class EmailService {
  public async sendContactFormEmail(
    contactFormData: ContactFormData,
    company?: string
  ): Promise<string> {
    try {
      const sendEmailRequest = new SendEmailRequest(
        "Contact Form Submission",
        contactFormData,
        company
      );

      // send the email
      const response = await this.sendEmail(sendEmailRequest);

      // return the response
      return response;
    } catch (error) {
      throw error;
    }
  }

  private async sendEmail(request: SendEmailRequest): Promise<string> {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(request),
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default EmailService;