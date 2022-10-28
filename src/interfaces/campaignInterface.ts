import { formInterface } from "./formInterface";
import { textInterface } from "./textInterface";
import { userInterface } from "./userInterface";

export interface campaignInterface {
  _id?: string;
  code: string;
  title: {
    es: string;
    en?: string;
    cat?: string;
  };
  description?: {
    es: string;
    en: string;
    cat: string;
  };
  startsAt?: Date;
  endsAt?: Date;
  active: boolean;
  type: string;
  usersAsigned?: [userInterface];
  textsAsigned?: [textInterface];
  formsAssigned?: [formInterface];
  // investigadores?: [{ id: string; nombre: string; email: string }];
  // evaluadores?: [{ id: string; nombre: string }];
  // administradores?: [{ id: string; nombre: string }];
  // centros_participantes?: [{ id: string; nombre: string }];
  // textos_consentimiento: [{ id: string; nombre: string }];
  // formularios: [{ id: string; nombre: string }];
  link?: string;
  date: Date;
}
