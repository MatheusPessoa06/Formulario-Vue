import HttpClient, { http } from "./HttpContact";

interface Contact {
  id: number;
  fullname: string;
  email: string;
  message: string;
}

export default {
  salvar: (Contacts: Contact) => {
    return new HttpClient().post("/contacts", Contacts);
  },
  mostrar: () => {
    return new HttpClient().get("/contacts");
  },
};
