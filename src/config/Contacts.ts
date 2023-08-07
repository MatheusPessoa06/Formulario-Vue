import { http } from "./HttpContact";

interface Contact {
  fullname: string;
  email: string;
  message: string;
}

export default {
  salvar: (contacts: Contact) => {
    return http.post("contacts", contacts);
  },
};
