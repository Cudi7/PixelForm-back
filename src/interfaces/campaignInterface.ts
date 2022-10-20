export interface campaignInterface {
  _id: string;
  codigo: string;
  titulo: {
    es: string;
    en?: string;
    cat?: string;
  };
  descripcion?: {
    es: string;
    en: string;
    cat: string;
  };
  inicio: string;
  fin: string;
  validada: boolean;
  administracion: string;
  tipo: string;
  activa: boolean;
  investigadores?: [{ id: string; nombre: string; email: string }];
  evaluadores?: [{ id: string; nombre: string }];
  administradores?: [{ id: string; nombre: string }];
  centros_participantes?: [{ id: string; nombre: string }];
  textos_consentimiento: [{ id: string; nombre: string }];
  formularios: [{ id: string; nombre: string }];
  link: string;
  date: Date;
}
