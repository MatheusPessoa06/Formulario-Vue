import HttpClient from "./HttpContact";
import ClientModel from "@/models/Client";

export default class ContactService {
  private HttpClient: HttpClient;

  constructor() {
    this.HttpClient = new HttpClient();
  }

  public async save(contactForm: ClientModel) {
    return await this.HttpClient.post("/contacts", {
      full_name: contactForm.fullName,
      email: contactForm.email,
      message: contactForm.message,
      id: contactForm.id,
    });
  }
}
