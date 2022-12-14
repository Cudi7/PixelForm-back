export interface userInterface {
  _id?: string;
  apellido1?: string;
  apellido2?: string;
  nombre: string;
  email: string;
  ultima_modificacion?: string;
  fecha_baja?: string;
  sexo?: string;
  telefono?: string;
  password: string;
  direccion?: string;
  centros_interes?: string;
  observaciones?: string;
  role: string;
  date: Date;
  type: string;
  history: [
    {
      modificadoPor: string;
      date: Date;
      action: string;
    }
  ];
}
