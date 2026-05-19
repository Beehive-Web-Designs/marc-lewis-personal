import { ContactFormData } from "@/types/ContactFormData";

export type EmailBodyContent = ContactFormData;

export class SendEmailRequest {
  public subject: string;
  public body: EmailBodyContent;
  /** Honeypot — bots often fill this; must stay empty for real submissions */
  public company?: string;

  constructor(subject: string, body: EmailBodyContent, company?: string) {
    this.subject = subject;
    this.body = body;
    this.company = company;
  }
}
