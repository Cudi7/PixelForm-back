export interface centroInterface {
  _id: string;
  creado?: Date;
  creador_id: string;
  nombre: string;
  descripcion: string;
  responsable_id: string;
  ultima_modificacion?: Date;
  participantes: [{ participante_id: string }];
  campañas: [{ campaña_id: string }];
  date?: Date;
}
