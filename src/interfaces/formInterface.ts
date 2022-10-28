export interface formInterface {
  _id: string;
  creado: Date;
  creador_id: string;
  codigo: string;
  titulo: {
    es: string;
    en?: string;
    cat?: string;
  };
  descripcion: {
    es: string;
    en?: string;
    cat?: string;
  };
  ultima_modificacion: Date;
  activo: boolean;
  bloque: {
    id: string;
    numero: string;
    descripcion: {
      es: string;
      en?: string;
      cat?: string;
    };
    tipo?: string;
    activo?: boolean;
    preguntas: [
      {
        id: string;
        numero: string;
        descripcion: {
          es: string;
          en?: string;
          cat?: string;
        };
        tipo?: string;
        obligatoria: boolean;
        activa: boolean;
        respuestas: [
          {
            id: string;
            numero: string;
            descripcion: {
              es: string;
              en?: string;
              cat?: string;
            };
          }
        ];
      }
    ];
  };
  date: Date;
}
