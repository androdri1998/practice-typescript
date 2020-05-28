interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachments?: string[];
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(request: IMessageDTO): boolean;
}

class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Send email to ${to.name}: ${message.subject}`);
    return true;
  }
}

export default EmailService;
