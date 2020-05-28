import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  { name: "first user", email: "email@example.com" },
  { name: "second user", email: "email@example.com" },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: {
        name: "test name",
        email: "testname@example.com",
      },
      message: {
        subject: "new user registered",
        body: "Welcome to developer enviroment",
      },
    });
    return res.json({ message: "email enviado" });
  },
};
